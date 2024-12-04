async function loadarticle(parameters) {
    Vue.createApp({
        data() {
            return {
                article: { id: parameters.article_id, title: parameters.article_title, url: window.location.href },
                currentView: "buttons",
                comments: null,
                msgBox: {},
                processing: null,
                newsroomURL: null,
                language: parameters.language
            }
        },
        computed: {
            classRTL: function () {
                return this.language === 'he' || this.language === 'ar' ? "rtl" : "";

            },
            apiurl() {
                if (window.location.href.includes("www.accesswire.com")) {
                    return "https://accesswire-api.isdrdev.com/";
                } else if (window.location.href.includes("beta.accesswire.com")) {
                    return "https://beta-accesswire-api.isdrdev.com/";
                } else {
                    return "https://alpha-accesswire-api.isdrdev.com/";
                }
            },
            localAPI() {
                if (window.location.href.includes("accesswire.com")) {
                    return "/users/api/";
                } else {
                    return "https://alpha.accesswire.xyz/users/api/";
                }
            },
            newsroomAPI() {
                if (window.location.href.includes("www.accesswire.com")) {
                    return "https://api.newsroom.accesswire.com/";
                } else if (window.location.href.includes("beta.accesswire.com")) {
                    return "https://api.newsroom.beta.accesswire.com/";
                } else {
                    return "https://api.newsroom.alpha.accesswire.xyz/";
                }
            },
            loggingAPI() {
                if (window.location.href.includes("www.accesswire.com")) {
                    return "https://reports.accesswire.com/";
                } else if (window.location.href.includes("beta.accesswire.com")) {
                    return "https://reports.beta.accesswire.com/";
                } else {
                    return "https://reports.alpha.accesswire.xyz/";
                }
            }
        },
        methods: {
            share: async function (network) {
                if (network == "fb") {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.article.url}`,
                        'facebook-share-dialog', 'width=626,height=436');
                }
                else if (network == "li") {
                    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${this.article.url}`,
                        'linkedin-share-dialog', 'width=626,height=436');
                }
                else if (network == "tw") {
                    window.open(`https://twitter.com/intent/tweet?text=${this.article.title}&url=${this.article.url}`,
                        'twitter-share-dialog', 'width=626,height=436');
                }
                net3000.common.handlePromise({
                    apiurl: `${this.loggingAPI}share/${this.article.id}?networkid=${network}&share=true`
                });
            },
            postRequest: async function (action) {
                this.processing = action;
                if (action == 'approve') {
                    let result = await Swal.fire({
                        icon: 'info',
                        title: "Are you sure you want to Approve?",
                        text: "This will lock your press release and automatically schedule this for dissemination. Click Ok or Cancel",
                        showCloseButton: true,
                        showCancelButton: true,
                        cancelButtonColor: '#6c757d',
                        reverseButtons: true,
                        confirmButtonText: "Ok",
                        cancelButtonText: "Cancel"
                    });
                    if (result.value) {
                        this.post(action);
                        this.currentView = "message";
                        this.processing = null;
                    }
                } else {
                    if (!this.comments) {
                        Swal.fire({
                            'icon': 'error',
                            'title': 'Missing Comments',
                            'text': 'Type a summary of the changes you need done'
                        });
                        return;
                    }
                    this.post(action);
                    this.currentView = "message";
                    this.processing = null;
                }
            },
            post: async function (action) {
                if (!parameters.requestapproval) { return; }
                this.msgBox = await net3000.common.handlePromise({
                    apiurl: "/public/reportApproval",
                    body: JSON.stringify({
                        comments: this.comments,
                        id: parameters.requestapproval,
                        action: action
                    }),
                    method: "POST"
                });
            }
        },
        mounted() {
            if (!parameters.visitorParameters) { parameters.visitorParameters = ""; }
            let self = this;
            net3000.common.handlePromise({
                apiurl: `${this.newsroomAPI}serviceurl?accountid=${parameters.customerID}&subaccountid=${parameters.subaccountID}`,
                parameters: {
                    callBackFunction: function (myResponse) {
                        if (myResponse.code == 302) {
                            self.newsroomURL = myResponse.data;
                            if (self.newsroomURL) {
                                $("#newsroomlink").show();
                            }
                        }
                    }
                }
            });
        }
    }).mount('#app');
}