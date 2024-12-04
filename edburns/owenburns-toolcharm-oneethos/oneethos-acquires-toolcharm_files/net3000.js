var net3000 = {};
net3000.common = {
    account: 1,
    currentAccount: null,
    apps: {},
    apiurl: "/",
    apiURL: function () {
        return this.apiurl;
    },
    handlePromise: async function (parameters) {
        //parameters: {url, body, method,account,callBackFunction}
        if (!parameters.method) {
            if (parameters.body) {
                parameters.method = "POST";
            } else {
                parameters.method = "GET";
            }
        }
        if (parameters.apiurl) {
            parameters.url = parameters.apiurl;
        } else {
            parameters.url = this.apiurl + parameters.url;
        }
        if (!parameters.account) {
            parameters.account = this.account;
        }
        let headers = {};
        if (parameters.parameters) {
            if (parameters.parameters.account) {
                parameters.account = parameters.parameters.account;
            }
            if (parameters.parameters.callBackFunction) {
                parameters.callBackFunction = parameters.parameters.callBackFunction;
            }
            if (parameters.parameters.headers) {
                headers = parameters.parameters.headers;
            }
        }
        if (parameters.account) {
            headers.account = parameters.account;
        } else if (this.currentAccount) {
            headers.account = this.currentAccount.id;
        } else if (this.account) {
            headers.account = this.account;
        }
        if (parameters.body != undefined) {
            if (headers["Content-Type"] == undefined) {
                headers["Content-Type"] = "application/json";
            }
        }
        if (parameters.formData != undefined) { parameters.body = parameters.formData; }
        if (jQuery("input[name='AntiforgeryFieldname']").length > 0) {
            headers["X-CSRF-TOKEN-HEADERNAME"] = jQuery("input[name='AntiforgeryFieldname']").val();
        }

        if (sessionStorage.getItem("token") != null) {
            headers["Authorization"] = "Bearer " + sessionStorage.getItem("token");
        } else if (localStorage.getItem("token") != null) {
            headers["Authorization"] = "Bearer " + localStorage.getItem("token");
        } else if (sessionStorage.getItem("client_token") != null) {
            headers["Authorization"] = "Bearer " + sessionStorage.getItem("client_token");
        } else if (localStorage.getItem("client_token") != null) {
            headers["Authorization"] = "Bearer " + localStorage.getItem("client_token");
        }
        if (parameters.method == "GET") { parameters.body = undefined; }

        const fetchOptions = {
            method: parameters.method,
            headers: headers,
            body: parameters.body,
            credentials: "same-origin"
        };

        if (parameters.keepalive !== undefined) {
            fetchOptions.keepalive = parameters.keepalive;
        }

        let res = await (await fetch(parameters.url, fetchOptions)).json();
        if (parameters.callBackFunction) {
            parameters.callBackFunction(res);
        }
        return res;
    },
    getAccount: async function (myAccount) {
        if (myAccount) {
            if (this.account && this.currentAccount && this.currentAccount.id == myAccount) {
                this.account = this.currentAccount.id;
                return;
            } else if (localStorage.getItem("account") && JSON.parse(localStorage.getItem("account")).id == myAccount) {
                this.currentAccount = JSON.parse(localStorage.getItem("account"));
                if (this.currentAccount) { this.account = this.currentAccount.id; }
            } else {
                await this.loadAccountFromDB(myAccount);
            }
        } else {
            if (localStorage.getItem("account")) {
                this.currentAccount = JSON.parse(localStorage.getItem("account"));
                if (this.currentAccount) { this.account = this.currentAccount.id; }
            } else if (this.account) {
                await this.loadAccountFromDB(this.account);
            } else {
                await this.loadAccountFromDB();
            }
        }
        return this.currentAccount;
    },
    loadAccountFromDB: async function (myAccount) {
        let parameters = "";
        if (myAccount) {
            parameters = `?id=${myAccount}`;
        } else if (this.account) {
            parameters = `?id=${this.account}`;
        }
        let res = await (await fetch(`${this.apiurl}admin/account${parameters}`)).json();
        if (res.success) {
            this.currentAccount = res.data;
            this.account = this.currentAccount.id;
            localStorage.setItem("account", JSON.stringify(this.currentAccount));
        }
    },
    verifyCaptcha: async function (parameters) {
        //{ callBackFunction: Function, actionName: string, sitekey?: string }
        if (parameters.actionName == undefined) { parameters.actionName = "website"; }
        if (parameters.sitekey == undefined) { parameters.sitekey = '6Le1cs4UAAAAAFzAcc-6pcJDZI2A2hg0cEaDCGvT'; }
        grecaptcha.ready(function () {
            grecaptcha.execute(parameters.sitekey, { action: parameters.actionName }).then(async function (token) {
                let myResponse = await net3000.common.handlePromise({ url: `recaptcha?token=${token}`, account: 0 });
                if (Number(myResponse.data.score) > 0.5 && myResponse.data.success == true && myResponse.data.action == parameters.actionName) {
                    parameters.callBackFunction();
                    return true;
                } else {
                    return false;
                }
            });
        });
    },
    login: async function (parameters) {
        //{ "email": this.client.email, "password": this.client.password, "loginGroupID": this.logingroup }
        let res = await this.handlePromise({
            url: "login",
            body: JSON.stringify(parameters),
            account: parameters.account,
            method: "POST"
        });
        if (res.success) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user);
            if (parameters.callBackFunction) {
                parameters.callBackFunction(res);
            }
        }
        return res;
    },
    logout: function (redirect) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        if (redirect != undefined) {
            window.location.href = redirect;
        }
    },
    getuser: async function () {
        if (localStorage.getItem("token") != undefined || sessionStorage.getItem("token") != undefined) {
            let user = await this.handlePromise({
                url: "user"
            });
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        }
        return null;
    },
    getdata: async function (parameters) {
        //{ elementID: null, source: null, localStorage: null, sessionStorage: null }
        if (parameters.elementID == undefined || parameters.source == undefined) { return; }
        let dataSource = {};
        let found = false;
        if (parameters.localStorage) {
            if (localStorage.getItem(parameters.localStorage)) {
                dataSource = JSON.parse(localStorage.getItem(parameters.localStorage));
                found = true;
            }
        } else if (parameters.sessionStorage) {
            if (sessionStorage.getItem(parameters.sessionStorage)) {
                dataSource = JSON.parse(sessionStorage.getItem(parameters.sessionStorage));
                found = true;
            }
        }
        if (!found) {
            let res = await this.handlePromise({ url: parameters.source });
            if (res.code == 200) {
                dataSource = await res.json();
                if (parameters.localStorage) { localStorage.setItem(parameters.localStorage, JSON.stringify(dataSource)); }
                if (parameters.sessionStorage) { sessionStorage.setItem(parameters.sessionStorage, JSON.stringify(dataSource)); }
            }
        }
        this.apps[parameters.elementID] = Vue.createApp({
            data() {
                return dataSource
            }
        }).mount("#" + parameters.elementID);
    },
    passwordStrength: function (password) {
        let errors = [];
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters.");
        }
        if (password.match(/[A-Z]/g) == null) {
            errors.push("Password must include an uppercase character.");
        }
        if (password.match(/[a-z]/g) == null) {
            errors.push("Password must include a lowercase character.");
        }
        if (password.match(/[0-9]/g) == null) {
            errors.push("Password must include a number.");
        }
        return errors;
    },
    addID: function (element, pref) {
        if (jQuery(element).attr("id")) { return; }
        if (jQuery(element).data("id")) {
            jQuery(element).attr("id", pref + "-" + jQuery(element).data("id"));
        } else if (jQuery(element).data("code")) {
            jQuery(element).attr("id", pref + "-" + jQuery(element).data("code"));
        } else {
            jQuery(element).attr("id", "el-" + Math.floor(Math.random() * 10000));
        }
    },
    getQueryString: function (key, query) {
        let queryString = window.location.search;
        if (query) {
            queryString = query;
        }
        return (new URLSearchParams(queryString)).get(key);
    },
    loginComponent: async function () {
        let loginTemplate = await net3000.common.handlePromise({ url: "common/setting?title=loginComponent" });
        return {
            template: loginTemplate.data,
            props: ['logingroup', 'client'],
            data() {
                return {
                    showAuhorization: false,
                    currentView: 'login',
                    msgBox: '',
                    processing: false
                };
            },
            methods: {
                async checkEmail() {
                    let form = document.querySelector("#loginForm input[name=email]");
                    if (!form.checkValidity()) {
                        this.msgBox = net3000.common.msgBox(net3000.standardMessages.invalid);
                        return;
                    }
                    let response = await net3000.common.handlePromise({ url: `checkEmail?email=${this.client.email}&loginGroup=${this.logingroup}` });
                    if (response.code == 302) {
                        this.client.isNew = false;
                    } else {
                        this.client.isNew = true;
                    }
                },
                async getAuthorizationCode() {
                    this.processing = true;
                    let response = await net3000.common.handlePromise({ url: `sendAuthorizationCode?email=${this.client.email}&loginGroup=${this.logingroup}` });
                    if (response.code == 302) {
                        this.msgBox = '';
                        this.showAuhorization = true;
                    }
                    this.processing = false;
                },
                async verifyCode() {
                    this.processing = true;
                    let response = await net3000.common.handlePromise({ url: `authorizeCode?email=${this.client.email}&code=${this.client.authorizationCode}` });
                    if (response.code == 200) {
                        this.client.firstName = response.data.client.firstName;
                        this.client.lastName = response.data.client.lastName;
                        this.client.email = response.data.client.email;
                        this.client.isNew = false;
                        this.client.loggedIn = true;
                        this.client.loginGroupID = response.data.client.loginGroupID;
                        this.client.mainPage = response.data.client.mainPage;
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem(response.data.client.loginGroupID, JSON.stringify(response.data.client));
                        this.msgBox = '';
                        this.$emit("continue");
                    } else {
                        this.showAuhorization = null;
                        this.msgBox = response.html;
                    }
                    this.processing = false;
                },
                async login() {
                    this.processing = true;
                    let response = await net3000.common.handlePromise({
                        url: "login", body: JSON.stringify({ "email": this.client.email, "password": this.client.password, "loginGroupID": this.logingroup })
                    });
                    if (response.code == 200) {
                        this.client.loggedIn = true;
                        this.client.firstName = response.data.client.firstName;
                        this.client.lastName = response.data.client.lastName;
                        this.client.email = response.data.client.email;
                        this.client.loginGroupID = response.data.client.loginGroupID;
                        this.client.mainpage = response.data.client.mainpage;
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("user", JSON.stringify(this.client));
                        this.msgBox = '';
                        this.$emit("continue");
                    } else {
                        //jQuery("#userLoginButtonContainer > *").toggle();
                        this.processing = false;
                        this.showAuhorization = null;
                        this.msgBox = response.html;
                    }
                },
                async register() {
                    //jQuery("#userRegisterButtonContainer > *").toggle();
                    debugger;
                    this.processing = true;
                    let response = await net3000.common.handlePromise({
                        url: "registerOrGet", body: JSON.stringify({
                            firstName: this.client.firstName,
                            lastName: this.client.lastName,
                            email: this.client.email,
                            loginGroupID: this.logingroup,
                            password: this.client.password
                        })
                    });
                    if (response.code == 200) {
                        this.client.loggedIn = true;
                        this.client.firstName = response.data.client.firstName;
                        this.client.lastName = response.data.client.lastName;
                        this.client.email = response.data.client.email;
                        this.client.loginGroupID = response.data.client.loginGroupID;
                        this.client.mainpage = response.data.client.mainpage;
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("user", JSON.stringify(this.client));
                        this.msgBox = '';
                        this.$emit("continue");
                    } else {
                        //jQuery("#userRegisterButtonContainer > *").toggle();
                        this.showAuhorization = null;
                        this.msgBox = response.html;
                    }
                    this.processing = false;
                },
                logout() {
                    if (localStorage.getItem("token") != undefined) {
                        localStorage.removeItem("token");
                    }
                    if (localStorage.getItem("user") != undefined) {
                        localStorage.removeItem("user");
                    }
                    this.client.loggedIn = false;
                    this.client.firstName = null;
                    this.client.lastName = null;
                    this.client.email = null;
                    this.client.loginGroupID = this.logingroup;
                    this.processing = false;
                }
            },
            async mounted() {
                let user = await net3000.common.getUser();
                if (user == null) {
                    if (this.client) {
                        this.client.loggedIn = false;
                    }
                } else if (this.client) {
                    this.client.loggedIn = true;
                    this.client.isNew = false;
                    this.client.firstName = user.firstName;
                    this.client.lastName = user.lastName;
                    this.client.email = user.email;
                    this.client.loginGroupID = user.loginGroupID;
                    this.client.password = undefined;
                }
            }
        };
    },
    getUser: async function () {
        if (localStorage.getItem("token") == undefined && sessionStorage.getItem("token") == undefined) {
            return null;
        }
        let res = await net3000.common.handlePromise({
            url: "user"
        });
        if (res.success) {
            let myContact = {};
            myContact.firstName = res.data.firstName;
            myContact.lastName = res.data.lastName;
            myContact.email = res.data.email;
            myContact.phone = res.data.phone;
            myContact.loggedIn = true;
            myContact.isNew = false;
            myContact.loginGroupID = res.data.loginGroupID;
            if (res.data.loginGroup != undefined) {
                myContact.mainPage = res.data.loginGroup.mainPage;
            }
            if (res.data.metaDataDictionary == undefined) {
                myContact.metaDictionary = {};
            } else {
                for (let key in res.data.metaDataDictionary) {
                    myContact[key] = res.data.metaDataDictionary[key];
                }
            }
            return myContact;
        } else {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
        return null;
    },
    apiResponse: function (parameters) {
        let cssClass = "success";
        let icon = "fa-check-circle";
        if (!parameters.success) {
            cssClass = "danger";
            icon = "fa-times-circle";
        }
        return `<div class="alert alert-${cssClass} alert-dismissible fade show" role="alert">
                    <i class="fa ${icon} mr-2"></i><strong>${parameters.title}</strong>. ${parameters.message}.
                </div>`;
    },
    loadParameters: function (parameters) {
        if (!parameters) {
            if (window.location.search) {
                return window.location.search.replace("?", "");
            } else {
                return "";
            }
        } else {
            return parameters;
        }
    },
    getData: async function (parameters) {
        if (parameters.elementID == undefined || parameters.source == undefined) { return; }
        let dataSource = net3000.standardMessages.found;
        let found = false;
        if (parameters.localStorage != undefined) {
            if (localStorage.getItem(parameters.localStorage) != undefined) {
                dataSource = JSON.parse(localStorage.getItem(parameters.localStorage));
                found = true;
            }
        } else if (parameters.sessionStorage != undefined) {
            if (sessionStorage.getItem(parameters.sessionStorage) != undefined) {
                dataSource = JSON.parse(sessionStorage.getItem(parameters.sessionStorage));
                found = true;
            }
        }
        if (!found) {
            dataSource = await net3000.common.handlePromise({ url: parameters.source });
            if (parameters.localStorage != undefined) { localStorage.setItem(parameters.localStorage, JSON.stringify(dataSource)); }
            if (parameters.sessionStorage != undefined) { sessionStorage.setItem(parameters.sessionStorage, JSON.stringify(dataSource)); }
        }

        this.apps[parameters.elementID] = Vue.createApp({
            data() {
                return {
                    data: dataSource.data
                }
            }
        }).mount("#" + parameters.elementID);
    },
    initializeLogin: async function () {
        var loginTemplate = await net3000.common.handlePromise({ url: "common/setting?title=loginComponent" });
        Vue.createApp({}).component('useraccount', {
            template: loginTemplate.data,
            props: ['logingroup', 'client'],
            data() {
                return {
                    showAuhorization: false,
                    currentView: 'login',
                    msgBox: '',
                    processing: false
                }
            },
            methods: {
                checkEmail: async function () {
                    let form = document.querySelector("#loginForm input[name=email]");
                    if (!form.checkValidity()) {
                        this.msgBox = net3000.common.msgBox(net3000.standardMessages.invalid);
                        return;
                    }
                    let response = await net3000.common.handlePromise({ url: `checkEmail?email=${this.client.email}&loginGroup=${this.logingroup}` });
                    if (response.code == 302) {
                        this.client.isNew = false;
                    } else {
                        this.client.isNew = true;
                    }
                },
                getAuthorizationCode: async function () {
                    this.processing = true;
                    let response = await net3000.common.handlePromise({ url: `sendAuthorizationCode?email=${this.client.email}&loginGroup=${this.logingroup}` });
                    if (response.code == 302) {
                        this.msgBox = '';
                        this.showAuhorization = true;
                    }
                    this.processing = false;
                },
                verifyCode: async function () {
                    this.processing = true;
                    let response = await net3000.common.handlePromise({ url: `authorizeCode?email=${this.client.email}&code=${this.client.authorizationCode}` });
                    if (response.code == 200) {
                        this.client.firstName = response.data.client.firstName;
                        this.client.lastName = response.data.client.lastName;
                        this.client.email = response.data.client.email;
                        this.client.isNew = false;
                        this.client.loggedIn = true;
                        this.client.loginGroupID = response.data.client.loginGroupID;
                        this.client.mainPage = response.data.client.mainPage;
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem(response.data.client.loginGroupID, JSON.stringify(response.data.client));
                        this.msgBox = '';
                        this.$emit("continue");
                    } else {
                        this.showAuhorization = null;
                        this.msgBox = response.html;
                    }
                    this.processing = false;
                },
                login: async function () {
                    this.processing = true;
                    let response = await net3000.common.handlePromise({
                        url: "login", body: JSON.stringify({ "email": this.client.email, "password": this.client.password, "loginGroupID": this.logingroup })
                    });
                    if (response.code == 200) {
                        this.client.loggedIn = true;
                        this.client.firstName = response.data.client.firstName;
                        this.client.lastName = response.data.client.lastName;
                        this.client.email = response.data.client.email;
                        this.client.loginGroupID = response.data.client.loginGroupID;
                        this.client.mainpage = response.data.client.mainpage;
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("user", JSON.stringify(this.client));
                        this.msgBox = '';
                        this.$emit("continue");
                    } else {
                        //jQuery("#userLoginButtonContainer > *").toggle();
                        this.processing = false;
                        this.showAuhorization = null;
                        this.msgBox = response.html;
                    }
                },
                register: async function () {
                    //jQuery("#userRegisterButtonContainer > *").toggle();
                    this.processing = true;
                    let response = await net3000.common.handlePromise({
                        url: "registerOrGet", body: JSON.stringify({
                            firstName: this.client.firstName,
                            lastName: this.client.lastName,
                            email: this.client.email,
                            loginGroupID: this.logingroup,
                            password: this.client.password
                        })
                    });
                    if (response.code == 200) {
                        this.client.loggedIn = true;
                        this.client.firstName = response.data.client.firstName;
                        this.client.lastName = response.data.client.lastName;
                        this.client.email = response.data.client.email;
                        this.client.loginGroupID = response.data.client.loginGroupID;
                        this.client.mainpage = response.data.client.mainpage;
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("user", JSON.stringify(this.client));
                        this.msgBox = '';
                        this.$emit("continue");
                    } else {
                        //jQuery("#userRegisterButtonContainer > *").toggle();
                        this.showAuhorization = null;
                        this.msgBox = response.html;
                    }
                    this.processing = false;
                },
                logout: function () {
                    if (localStorage.getItem("token") != undefined) {
                        localStorage.removeItem("token");
                    }
                    if (localStorage.getItem("user") != undefined) {
                        localStorage.removeItem("user");
                    }
                    this.client.loggedIn = false;
                    this.client.firstName = null;
                    this.client.lastName = null;
                    this.client.email = null;
                    this.client.loginGroupID = this.logingroup;
                    this.processing = false;
                }
            },
            mounted: async function () {
                let user = await net3000.common.getUser();
                if (user == null) {
                    this.client.loggedIn = false;
                } else {
                    this.client.loggedIn = true;
                    this.client.isNew = false;
                    this.client.firstName = user.firstName;
                    this.client.lastName = user.lastName;
                    this.client.email = user.email;
                    this.client.loginGroupID = user.loginGroupID;
                    this.client.password = undefined;
                }
            }
        });
    },
    initializeAccountUpdate: async function () {
        let loginTemplate = await net3000.common.handlePromise({ url: "common/setting?title=updateAccount" });
        Vue.createApp({}).component('userupdate', {
            template: loginTemplate.data,
            props: ['client'],
            data() {
                return {
                    msgBox: '',
                    processing: false
                }
            },
            methods: {
                validateCustomField: function () {
                    let confirmBox = document.getElementById("confirmPassword");
                    if (this.client.password == undefined || this.client.password == '' || this.client.password == this.client.confirmPassword) {
                        confirmBox.setCustomValidity('');
                    } else {
                        confirmBox.setCustomValidity("Password not matching");
                    }
                },
                updateAccount: async function () {
                    this.processing = true;
                    this.msgBox = {};
                    let AddressForm = document.querySelector("form.clientDetails");
                    if (!AddressForm.checkValidity() || !(this.client.password == undefined || this.client.password == '' || this.client.password == this.client.confirmPassword)) {
                        jQuery("form.clientDetails").addClass("was-validated");
                        this.processing = false;
                        return;
                    } else {
                        jQuery("form.clientDetails").removeClass("was-validated");
                    }
                    let postClient = { ...this.client };
                    delete postClient.isNew;
                    delete postClient.loggedIn;
                    delete postClient.id;
                    delete postClient.metaDictionary;
                    delete postClient.mainPage;
                    delete postClient.loginGroupID;
                    let res = await (net3000.common.handlePromise({ url: "user", body: JSON.stringify(postClient), method: "put" }));
                    this.msgBox = res;
                    this.processing = false;
                },
                logout: function () {
                    if (localStorage.getItem("token") != undefined) {
                        localStorage.removeItem("token");
                    }
                    if (localStorage.getItem("user") != undefined) {
                        localStorage.removeItem("user");
                    }
                    this.client.isNew = null;
                    this.client.loggedIn = false;
                    this.client.firstName = null;
                    this.client.lastName = null;
                    this.client.email = null;
                }
            }
        })
    },
    plural: function (name, count, affix) {
        if (!affix) {
            affix = "s";
        }
        if (count == 0) {
            return `no ${name}${affix}`;
        }
        if (count == 1) {
            return `1 ${name}`;
        }
        return `${numeral(count).format()} ${name}${affix}`;
    },
    isImage: function (file) {
        if (!file) { return false; }
        return ["image/jpg", "image/jpeg", "image/png", "image/svg"].includes(file.type);
    }
}
net3000.standardMessages = {
    saved: net3000.common.apiResponse({
        title: "Saved",
        message: "Your changes have been saved.",
        success: true
    }),
    loggedOut: net3000.common.apiResponse({
        code: 200,
        title: "Logged Out",
        message: "You're now logged out.",
        success: true
    }),
    deleted: net3000.common.apiResponse({
        title: "Deleted",
        message: "The record you selected has been deleted.",
        success: true
    }),
    invalid: net3000.common.apiResponse({
        title: "Invalid Request",
        message: "Your request is invalid.",
        success: false
    }),
    missingRequired: net3000.common.apiResponse({
        title: "Missing Required Fields",
        message: "Fill the required fields to continue.",
        success: false
    }),
    loggedIn: net3000.common.apiResponse({
        title: "Logged In",
        message: "You are now logged in.",
        success: true
    }),
    invalidLogin: net3000.common.apiResponse({
        title: "Invalid Login",
        message: "Your login is incorrect.",
        success: false
    }),
    notFound: net3000.common.apiResponse({
        title: "Not Found",
        message: "The record you were trying to reach was not found.",
        success: false
    }),
    notActive: net3000.common.apiResponse({
        title: "Not Active",
        message: "The account you were trying to access is not active.",
        success: false
    }),
    found: net3000.common.apiResponse({
        title: "Found",
        message: "Found the record you requested.",
        success: true
    })
}

jQuery(function () {
    jQuery("[data-getdata]").each(function () {
        net3000.common.getData({ elementID: jQuery(this).attr("id"), source: jQuery(this).data("getdata"), localStorage: jQuery(this).data("localstorage"), sessionStorage: jQuery(this).data("sessionstorage") });
    });
});