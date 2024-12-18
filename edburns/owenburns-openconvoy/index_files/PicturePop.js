﻿var CMPL_PICTURE_POP_JS_SCRIPT = document.currentScript.src;

if (document.currentScript.src == "https://app.cadmoremedia.com/Scripts/PicturePop.js") {
    CMPL_PICTURE_POP_JS_SCRIPT = "https://stream.cadmore.media/Scripts/PicturePop.js";
}


var cmpl_picturePop_rooturl = cmpl_PicturePop_GetDomain(CMPL_PICTURE_POP_JS_SCRIPT);

function cmpl_PicturePop_GetDomain(url) {
    var urla = document.createElement('a');
    urla.setAttribute('href', url);
    //Port will already be SSL no need to specify.
    if (urla.port != null && urla.port != "") {
        console.log("CMPL PICTURE_POP: Root Url w/ Port -- " + urla.protocol + "//" + urla.hostname + ":" + urla.port)
        return urla.protocol + "//" + urla.hostname + ":" + urla.port;
    }
    else {
        console.log("CMPL PICTURE_POP: Root Url -- " + urla.protocol + "//" + urla.hostname)
        return urla.protocol + "//" + urla.hostname;
    }
}

//Jquery implementation of document ready.
(function (funcName, baseObj) {
    // The public function name defaults to window.docReady
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    funcName = funcName || "docReady";
    baseObj = baseObj || window;
    var readyList = [];
    var readyFired = false;
    var readyEventHandlersInstalled = false;

    // call this when the document is ready
    // this function protects itself against being called more than once
    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (var i = 0; i < readyList.length; i++) {
                // if a callback here happens to add new ready handlers,
                // the docReady() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if (document.readyState === "complete") {
            ready();
        }
    }

    // This is the one public interface
    // docReady(fn, context);
    // the context argument is optional - if present, it will be passed
    // as an argument to the callback
    baseObj[funcName] = function (callback, context) {
        if (typeof callback !== "function") {
            throw new TypeError("callback for docReady(fn) must be a function");
        }
        // if ready has already fired, then just schedule the callback
        // to fire asynchronously, but right away
        if (readyFired) {
            setTimeout(function () { callback(context); }, 1);
            return;
        } else {
            // add the function and context to the list
            readyList.push({ fn: callback, ctx: context });
        }
        // if document already ready to go, schedule the ready function to run
        if (document.readyState === "complete") {
            setTimeout(ready, 1);
        } else if (!readyEventHandlersInstalled) {
            // otherwise if we don't have event handlers installed, install them
            if (document.addEventListener) {
                // first choice is DOMContentLoaded event
                document.addEventListener("DOMContentLoaded", ready, false);
                // backup is window load event
                window.addEventListener("load", ready, false);
            } else {
                // must be IE
                document.attachEvent("onreadystatechange", readyStateChange);
                window.attachEvent("onload", ready);
            }
            readyEventHandlersInstalled = true;
        }
    }
})("cmpl_docReady", window);

function cmpl_picturepop_isElement(o) {
    return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );
}

var cmpl_mutation_observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            // element added to DOM
            var hasClass = [].some.call(mutation.addedNodes, function (el) {
                if (el != null && cmpl_picturepop_isElement(el)) {
                    var pageTest = el.querySelector('.cmpl_picture_pop');

                    if (pageTest != null) {
                        return pageTest.classList.contains('cmpl_picture_pop') && !pageTest.classList.contains('cmpl-ready');
                    }
                    else {
                        return false;
                    }

                }
                else {
                    return false;
                }
            });
            if (hasClass) {
                setTimeout(function () { cmpl_LoadPicturePops(); }, 100);
            }
        }
    });
});

var cmpl_mutation_config = {
    attributes: false,
    childList: true,
    subtree: true,
    characterData: false
};

var cmpl_embedJSLoaded = false;

function cmpl_LoadPicturePops() {

    //Prevent loading until embed.js has been loaded.
    if (!cmpl_embedJSLoaded) {
        console.log("Embed.JS is not loaded yet.  Retrying.");
        setTimeout(function () {
            cmpl_LoadPicturePops();
        }, 100);
        return;
    }

    //find the last highlight color if there is one specified.
    var accentColor = "";
    var foundPicturePop = false;
    var ajaxCallSend = true;


    var colorElements = document.getElementsByClassName("cmpl_picture_pop");
    for (var i = 0; i < colorElements.length; i++) {
        foundPicturePop = true;
        var colorContainer = colorElements[i];

        if (colorContainer.hasAttribute("data-highlightcolor") && !colorContainer.classList.contains("cmpl-ready")) {

            accentColor = colorContainer.dataset.highlightcolor;
            ajaxCallSend = false;
        }
    }

    function picturepop_cmpl_GetVideoIdFromPath(url, key) {
        key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
        var results = regex.exec(url);
        var returnVal = results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

        if (returnVal === '') {
            //the embed does not contain the key.  Thereby, the id is attached to the domain
            //before the query string.
            var directoryName = url.substring(url.lastIndexOf("/") + 1);
            //now exclude any query string variables
            var querySplit = directoryName.split("?");
            return querySplit[0];
        }
        else {
            return returnVal;
        }
    }

    function cmpl_LoadPicturePopsInner() {
        //Apply picture pop styles to the page.
        if (foundPicturePop) {
            cmpl_PicturePop_Styles(accentColor);
        }

        var elements = document.getElementsByClassName("cmpl_picture_pop");
        var rotateThumbnails = false;
        for (var i = 0; i < elements.length; i++) {
            //Find the containing div for the clickable image
            var image_container = elements[i];

            if (!image_container.classList.contains("cmpl-ready")) {
                image_container.classList.add("cmpl-ready");

                //Handles optional video url instead of video id.
                var videoUrl = image_container.dataset.videourl;
                var videoId = image_container.dataset.videoid;
                var altId = image_container.dataset.altid;
                var accessCode = image_container.dataset.accesscode;
                var delayedAccessCode = image_container.dataset.delayedaccesscode;
                var offset = image_container.dataset.offset;
                var numberOfThumbnails = image_container.dataset.numberofthumbnails;
                var interval = image_container.dataset.interval;
                var delayed = image_container.dataset.delayed;
                var borderSize = image_container.dataset.bordersize;
                var borderColor = image_container.dataset.bordercolor;
                var borderCorner = image_container.dataset.borderradius;
                rotateThumbnails = image_container.dataset.rotating




                if (typeof videoUrl !== 'undefined' && videoUrl !== null) {
                    //Then set the video id to the one specified in the url.
                    videoId = picturepop_cmpl_GetVideoIdFromPath(videoUrl, "id");
                }

                if ((typeof accessCode === 'undefined' || accessCode === null) && typeof videoUrl !== 'undefined' && videoUrl !== null) {
                    accessCode = picturepop_cmpl_GetVideoIdFromPath(videoUrl, "accesscode");
                }
                else if (typeof accessCode !== 'undefined' && accessCode != null) {
                    accessCode = accessCode;
                }

                if ((typeof delayedAccessCode === 'undefined' || delayedAccessCode === null)) {
                    delayedAccessCode = "";
                }

                if (typeof delayed === 'undefined' || delayed === null) {
                    delayed = false;
                }

                if (typeof accessCode === 'undefined' || accessCode === null) {
                    accessCode = "";
                }

                if (typeof offset === 'undefined') {
                    offset = "";
                }

                if (typeof borderSize === 'undefined') {
                    borderSize = "";
                }

                if (typeof borderColor === 'undefined') {
                    borderColor = "";
                }

                if (typeof borderCorner === 'undefined') {
                    borderCorner = "";
                }

                if (typeof numberOfThumbnails === 'undefined') {
                    numberOfThumbnails = 0;
                }

                if (typeof interval === 'undefined') {
                    interval = 0;
                }

                //Grab the playbutton url if it exists, otherwise use the default.
                var play_url = '';
                if (!image_container.hasAttribute("data-playimageurl") || image_container.dataset.playimageurl.trim() == "") {
                    play_url = `${cmpl_picturePop_rooturl}/images/svgicons/play_small.svg`;
                }
                else {
                    play_url = image_container.dataset.playimageurl;
                }

                //Determine if an image is specified as a data attribute for the container or if we are downloading a video thumbnail.
                var image_url = "";
                //We cannot proceed with this if we do not have a video id, so silently fail to display.  But log.
                if ((typeof videoId !== 'undefined' && videoId !== null && videoId !== "")
                    || (typeof altId !== 'undefined' && altId !== null && altId !== "")) {

                    //If altid is specified, we use that instead of video id to create a unique id for embeds.
                    //Since an altid can really be "anything" we have to be careful about what characters we allow.
                    //So, in this regard, we will generate a UID to use for this purpose.
                    if (typeof altId !== 'undefined' && altId !== null && altId !== "") {
                        videoId = cmpl_generateUUIDNoDash();
                    }

                    if (!image_container.id) {
                        image_container.id = 'div_' + videoId.toUpperCase() + '_' + i
                    }

                    if (!image_container.hasAttribute("data-imageurl") || image_container.dataset.imageurl.trim() == "") {

                        if (typeof altId !== 'undefined' && altId !== null && altId !== "") {
                            rotateThumbnails = getRotatingThumbnailConfig(`${cmpl_picturePop_rooturl}/GetThumbnailRotatingConfig?videoURL=` + encodeURIComponent(videoUrl) + "&altUrl=" + encodeURIComponent(altId), videoId, image_container, play_url, altId, delayed, accessCode, delayedAccessCode, videoUrl, interval, numberOfThumbnails, offset, i, borderSize, borderColor, borderCorner, rotateThumbnails);
                        }
                        else {
                            rotateThumbnails = getRotatingThumbnailConfig(`${cmpl_picturePop_rooturl}/GetThumbnailRotatingConfig?assetId=` + videoId, videoId, image_container, play_url, altId, delayed, accessCode, delayedAccessCode, videoUrl, interval, numberOfThumbnails, offset, i, borderSize, borderColor, borderCorner, rotateThumbnails);
                        }
                    }
                    else {
                        //image attribute does exist.
                        image_url = image_container.dataset.imageurl;
                        //Add image to dom.
                        cmpl_Create_PicturePop_Image(image_url, videoId + '_' + i, image_container, play_url, accessCode, videoId, altId, rotateThumbnails, delayed, accessCode, delayedAccessCode, videoUrl, borderSize, borderColor, borderCorner);
                        //next, we need to create the modal.
                        if (!delayed) {
                            cmpl_Create_Modal('MODAL_' + videoId + '_' + i, image_container, videoId, videoUrl, accessCode, altId, rotateThumbnails, videoId + '_' + i, delaydAccessCode);
                        }
                    }

                }
                else {
                    console.log("CMPL Picture Pop: Failed to locate a valid video id to process.  Are you missing the data-videoid attribute or specified a data-videourl that is incorrect?");
                }

            }
        }
    }

    function getThumbnailsToDisplay(videoId, image_container, play_url, altId, rotateThumbnails, delayed, accessCode, delayedAccessCode, videoUrl, interval, numberOfThumbnails, offset, index, borderSize, borderColor, borderCorner) {

        // image attribute doesn't exist
        cmpl_Create_PicturePop_Image('', videoId + '_' + index, image_container, play_url, videoId, altId, rotateThumbnails, delayed, accessCode, delayedAccessCode, videoUrl, borderSize, borderColor, borderCorner);
        //next, we need to create the modal.
        if (!rotateThumbnails && !delayed) {
            cmpl_Create_Modal('MODAL_' + videoId + '_' + index, image_container, videoId, videoUrl, accessCode, altId, rotateThumbnails, videoId + '_' + i, delayedAccessCode);
        }
        //Set up jsonp script tag to get the url of the image embed.
        var script = document.createElement('script');

        //if altid is specified, retrieving the thumbnail has to go to a different endpoint.
        if (typeof altId !== 'undefined' && altId !== null && altId !== "") {
            if (rotateThumbnails) {
                script.src = `${cmpl_picturePop_rooturl}/GetThumbnailUrls?altUrl=` + encodeURIComponent(altId) + '&index=' + index + '&videoURL=' + videoUrl + "&altId=" + altId + "&videoId=" + videoId + '&accessCode=' + accessCode + '&delayedAccessCode=' + delayedAccessCode + '&interval=' + interval + '&noOfThumbnails=' + numberOfThumbnails + '&offset=' + offset;
                //script.src = 'https://localhost:44358/GetThumbnailUrls?&index=' + i + '&videoURL=' + videoUrl + '&accessCode=' + accessCode + '&altUrl=' + encodeURIComponent(altId) + '&altId=' + videoId;
            }
            else {
                script.src = `${cmpl_picturePop_rooturl}/GetThumbnailAltUrl?altUrl=` + encodeURIComponent(altId) + '&index=' + index + "&altId=" + videoId;
                //script.src = 'https://localhost:44358/GetThumbnailAltUrl?altUrl=' + encodeURIComponent(altId) + '&index=' + i + "&altId=" + videoId;
            }
            //script.src = 'https://cadmorevideotest.azurewebsites.net/GetThumbnailAltUrl?altUrl=' + encodeURIComponent(altId) + '&index=' + i + "&altId=" + videoId;
            //script.src = 'https://localhost:44358/GetThumbnailAltUrl?altUrl=' + encodeURIComponent(altId) + '&index=' + i + "&altId=" + videoId;
        }
        else {

            if (rotateThumbnails) {
                script.src = `${cmpl_picturePop_rooturl}/GetThumbnailUrls?assetId=` + videoId + '&index=' + index + '&videoURL=' + videoUrl + '&accessCode=' + accessCode + '&delayedAccessCode=' + delayedAccessCode + '&interval=' + interval + '&noOfThumbnails=' + numberOfThumbnails + '&offset=' + offset;
                //script.src = 'https://localhost:44358/GetThumbnailUrls?assetId=' + videoId + '&index=' + i + '&videoURL=' + videoUrl + '&accessCode=' + accessCode;
            }
            else {
                script.src = `${cmpl_picturePop_rooturl}/GetThumbnailUrl?videoId=` + videoId + '&index=' + index;
                //script.src = 'https://localhost:44358/GetThumbnailUrl?videoId=' + videoId + '&index=' + i;
            }
            //script.src = 'https://cadmorevideotest.azurewebsites.net/GetThumbnailUrl?videoid=' + videoId + '&index=' + i;
            //script.src = 'https://localhost:44358/GetThumbnailUrl?videoid=' + videoId + '&index=' + i;
        }
        document.querySelector('head').appendChild(script);
    }

    function getRotatingThumbnailConfig(url, videoId, image_container, play_url, altId, delayed, accessCode, delayedAccessCode, videoUrl, interval, numberOfThumbnails, offset, index, borderSize, borderColor, borderCorner, rotateThumbnails) {

        var configValue;
        if (url) {
            try {
                var opts = {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    }
                };

                fetch(url, opts).then(function (response) {
                    return response.json();
                })
                    .then(function (data) {
                        if (data) {
                            if (!borderSize && data.PicturePopStyleBorderThickness && data.PicturePopStyleBorderThickness != 0) {
                                borderSize = data.PicturePopStyleBorderThickness;
                            }
                            if (!borderColor && data.PicturePopStyleBorderColour) {
                                borderColor = data.PicturePopStyleBorderColour;
                            }
                            if (!borderCorner && data.PicturePopStyleBorderRadius && data.PicturePopStyleBorderRadius != 0) {
                                borderCorner = data.PicturePopStyleBorderRadius;
                            }
                            if (!rotateThumbnails) {
                                rotateThumbnails = data.TurnOnThumbnailRotation;
                            }
                        }
                        getThumbnailsToDisplay(videoId, image_container, play_url, altId, rotateThumbnails, delayed, accessCode, delayedAccessCode, videoUrl, interval, numberOfThumbnails, offset, index, borderSize, borderColor, borderCorner);
                    })
                    .catch(error => {
                        getThumbnailsToDisplay(videoId, image_container, play_url, altId, false, delayed, accessCode, delayedAccessCode, videoUrl, interval, numberOfThumbnails, offset, index, borderSize, borderColor, borderCorner);
                        console.log("CMPL Picture Pop: Failed to retrieve configuration " + error);
                    });
            }
            catch (ex) {
                //log fail if could not retrieve for remediation
                console.log("CMPL Picture Pop: Failed to retrieve configuration " + ex);
            }
        }
        return configValue;
    }

    function cmpl_LoadPicturePopsAjax(elements) {
        var videoHighlightColorUrl;

        for (var i = 0; i < elements.length; i++) {
            //Find the containing div for the clickable image
            var image_container = elements[i];

            //Handles optional video url instead of video id.
            var videoUrl = image_container.dataset.videourl;
            var videoId = image_container.dataset.videoid;
            var altId = image_container.dataset.altid;

            function picturepop_cmpl_GetVideoIdFromPath(url, key) {
                key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
                var results = regex.exec(url);
                var returnVal = results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

                if (returnVal === '') {
                    //the embed does not contain the key.  Thereby, the id is attached to the domain
                    //before the query string.
                    var directoryName = url.substring(url.lastIndexOf("/") + 1);
                    //now exclude any query string variables
                    var querySplit = directoryName.split("?");
                    return querySplit[0];
                }
                else {
                    return returnVal;
                }
            }


            if (typeof videoUrl !== 'undefined' && videoUrl !== null) {
                //Then set the video id to the one specified in the url.
                videoId = picturepop_cmpl_GetVideoIdFromPath(videoUrl, "id");
            }

            if (typeof altId !== 'undefined' && altId !== null && altId !== "") {
                videoHighlightColorUrl = `${cmpl_picturePop_rooturl}/videohighlightcolor/alturl/` + altId;
                //videoHighlightColorUrl = "https://localhost:44358/videohighlightcolor/alturl/" + altId;
            }
            else {
                videoHighlightColorUrl = `${cmpl_picturePop_rooturl}/videohighlightcolor/` + videoId;
                //videoHighlightColorUrl = "https://localhost:44358/videohighlightcolor/" + videoId;
            }
        }

        if (videoHighlightColorUrl) {

            try {
                var opts = {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    }
                };

                fetch(videoHighlightColorUrl, opts).then(function (response) {
                    return response.json();
                })
                    .then(function (data) {

                        if (data) {
                            accentColor = data;
                        }

                        cmpl_LoadPicturePopsInner();
                    });
            }
            catch (ex) {
                //log fail if could not retrieve for remediation
                console.log("CMPL Picture Pop: Failed to retrieve configuration " + ex);
                cmpl_LoadPicturePopsInner();
            }
        }
        else {
            cmpl_LoadPicturePopsInner();
        }
    }

    //Ajax call will be needed if there wasnt a highlightcolor provided on the PicturePop embed.
    if (ajaxCallSend) {
        //Fire off call to get configuration to setup highlight color for the play shadow div.
        cmpl_LoadPicturePopsAjax(colorElements);
    }
    else {
        cmpl_LoadPicturePopsInner();
    }
}

cmpl_docReady(function () {
    cmpl_LoadPicturePops();
});

cmpl_docReady(function () {

    try {
        cmpl_mutation_observer.observe(document, cmpl_mutation_config);
    }
    catch (ex) {
        console.log("CMPL PP: Error Setting observer");
        console.log(ex);
    }

});

function cmpl_isLoadedScript(lib) {
    return document.querySelectorAll('[src="' + lib + '"]').length > 0
}

//add embed.js
var cmpl_EmbedJSScriptLocationDev = 'https://localhost:44358/Scripts/Embed.js';
var cmpl_EmbedJSScriptLocation = `${cmpl_picturePop_rooturl}/Scripts/Embed.js`;
//var cmpl_EmbedJSScriptLocation = 'https://cadmorevideotest.azurewebsites.net/Scripts/Embed.js';
if (!cmpl_isLoadedScript(cmpl_EmbedJSScriptLocation) && !cmpl_isLoadedScript(cmpl_EmbedJSScriptLocationDev)) {
    var embedjs = document.createElement('script');
    embedjs.src = cmpl_EmbedJSScriptLocation;
    //embedjs.src = cmpl_EmbedJSScriptLocationDev;
    embedjs.onload = () => { console.log("CMPL: Loaded Embed.js."); cmpl_embedJSLoaded = true; };
    document.querySelector('head').appendChild(embedjs);
}
else {
    cmpl_embedJSLoaded = true;
}

var multiThumbnailIndex = 0;

function processJsonPResponse(url, id, index) {
    document.getElementById(id.toUpperCase() + '_' + index).src = url;

}

var CMPL_rotatingThumbnail = null;

function rotateThumbnail(thumbnailsData) {
    var img = document.getElementById(thumbnailsData.assetId.toUpperCase() + '_' + thumbnailsData.thumbnailIndex);
    if (img == null) {
        img = document.getElementById(thumbnailsData.videoId.toUpperCase() + '_' + thumbnailsData.thumbnailIndex);
    }
    var index = 0;

    while (!img.classList.contains("index-" + index)) {
        index++;
    }

    img.classList.add("cmpl-thumbnail-transition-old");

    setTimeout(() => {
        img.classList.remove("cmpl-thumbnail-transition-old")
        img.classList.remove("index-" + index);
        index == thumbnailsData.thumbnailsCount - 1 ? index = 0 : index++;
        img.classList.add("index-" + index);
        img.src = thumbnailsData.thumbnailUrls[index].thumbnailUrl;
    }, 250);


    if (CMPL_rotatingThumbnail) {
        CMPL_rotatingThumbnail = setTimeout(function () { rotateThumbnail(thumbnailsData) }, 2250);
    }
}

function processMultipleThumbnails(thumbnails) {

    var image = document.getElementById(thumbnails.assetId.toUpperCase() + '_' + thumbnails.thumbnailIndex);

    if (image == null) {
        image = document.getElementById(thumbnails.videoId.toUpperCase() + '_' + thumbnails.thumbnailIndex);
    }

    image.src = thumbnails.thumbnailUrls[0].thumbnailUrl;


    var parentElement = image.parentElement;
    var image_container = document.getElementById('div_' + thumbnails.assetId.toUpperCase() + '_' + thumbnails.thumbnailIndex);

    var playButton = document.getElementById('SHADOW_MODAL_' + thumbnails.assetId.toUpperCase() + '_' + thumbnails.thumbnailIndex);
    if (playButton == null) {
        playButton = document.getElementById('SHADOW_MODAL_' + thumbnails.videoId.toUpperCase() + '_' + thumbnails.thumbnailIndex);
    }

    playButton.hidden = false;

    if (!image_container) {
        image_container = document.getElementById('div_' + thumbnails.videoId.toUpperCase() + '_' + thumbnails.thumbnailIndex);
    }

    setMultipleThumbnailOnClickEvent(parentElement, image.id, image_container, thumbnails.assetId, thumbnails.videoUrl, thumbnails.accessCode, thumbnails.altId, thumbnails.delayedAccessCode);

    parentElement.addEventListener('mouseenter', function (event) {
        if (CMPL_rotatingThumbnail == null) {
            var thumbnailsData = thumbnails;
            CMPL_rotatingThumbnail = setTimeout(function () { rotateThumbnail(thumbnailsData) }, 1000);
        }
    }, false)


    parentElement.addEventListener('mouseleave', function () {
        clearTimeout(CMPL_rotatingThumbnail);
        CMPL_rotatingThumbnail = null;
    }, false)

}


function setMultipleThumbnailOnClickEvent(element, imageId, image_container, videoId, videoUrl, accessCode, altId, delayedAccessCode) {
    element.addEventListener('click', function (e) {
        var imageContainer = image_container;
        cmpl_Create_Modal('MODAL_' + imageId, imageContainer, videoId, videoUrl, accessCode, altId, true, imageId, delayedAccessCode);

        document.getElementById('MODAL_' + imageId.toUpperCase()).style.display = 'block';
        document.getElementById('CLOSER_MODAL_' + imageId.toUpperCase()).focus();
        element.setAttribute("aria-expanded", "true");
        cmpl_showDialog();
        e.preventDefault();
        e.stopPropagation();
    });

    element.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.stopPropagation();
            this.dispatchEvent(new Event("click"));
        }
    });
}

function cmpl_Create_Modal(id, imagecontainer, videoid, videourl, accessCode, altid, rotateThumbnails, imageid, delayedAccessCode) {

    //Do not create if already created.
    var createCheck = document.getElementById(id.toUpperCase());
    if (typeof (element) != 'undefined' && element != null) {
        return; //Do nothing as the modal was already created.
    }

    var modal = document.createElement('div');
    modal.className = 'cmpl-modal';
    modal.id = id.toUpperCase();
    modal.style.display = 'none';
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-label", "Video");


    //Create iframe
    var iframe = document.createElement('iframe');
    var iframeurl = "";
    if (typeof altid !== 'undefined' && altid !== null && altid !== "") {
        iframeurl = "https://stream.cadmore.media/v" + altid + "?parameters=true";
        //iframeurl = "https://cadmorevideotest.azurewebsites.net/v" + altid + "?parameters=true";
        //iframeurl = "https://localhost:44358/v" + altid + "?parameters=true";
    }
    else {
        iframeurl = "https://stream.cadmore.media/Player/" + videoid + "?parameters=true";
        //iframeurl = "https://cadmorevideotest.azurewebsites.net/Player/" + videoid + "?parameters=true";
        //iframeurl = "https://localhost:44358/Player/" + videoid + "?parameters=true";
    }
    //var iframeurl = "https://localhost:44358/Player/" + videoid;

    if (accessCode !== "") {
        iframeurl = iframeurl + "&accesscode=" + encodeURIComponent(accessCode);
    }

    if (delayedAccessCode !== "") {
        iframeurl = iframeurl + "&delayedAccessCode=" + encodeURIComponent(delayedAccessCode);
    }

    if (imagecontainer.hasAttribute("data-start") && imagecontainer.dataset.start.trim() != "") {
        iframeurl = iframeurl + "&start=" + imagecontainer.dataset.start.trim();
    }
    if (imagecontainer.hasAttribute("data-end") && imagecontainer.dataset.end.trim() != "") {
        iframeurl = iframeurl + "&end=" + imagecontainer.dataset.end.trim();
    }

    if (imagecontainer.hasAttribute("data-branding") && imagecontainer.dataset.branding.trim() === "true") {

        //iframe.setAttribute("data-branding", "true");
        iframeurl = iframeurl + "&branding=true";
    }

    if (imagecontainer.hasAttribute("data-brandinglocation")) {
        //iframe.setAttribute("data-branding", "true");
        iframeurl = iframeurl + "&brandingLocation=" + imagecontainer.dataset.brandinglocation.trim();
    }

    if (imagecontainer.hasAttribute("data-brandingimageurl")) {
        //iframe.setAttribute("data-branding", "true");
        iframeurl = iframeurl + "&brandingImageUrl=" + encodeURIComponent(imagecontainer.dataset.brandingimageurl.trim());
    }

    if (imagecontainer.hasAttribute("data-brandingurl")) {
        //iframe.setAttribute("data-branding", "true");
        iframeurl = iframeurl + "&brandingUrl=" + encodeURIComponent(imagecontainer.dataset.brandingurl.trim());
    }

    if (imagecontainer.hasAttribute("data-brandingheight")) {
        //iframe.setAttribute("data-branding", "true");
        iframeurl = iframeurl + "&brandingHeight=" + imagecontainer.dataset.brandingheight.trim();
    }

    if (imagecontainer.hasAttribute("data-brandingwidth")) {
        //iframe.setAttribute("data-branding", "true");
        iframeurl = iframeurl + "&brandingWidth=" + imagecontainer.dataset.brandingwidth.trim();
    }

    if (imagecontainer.hasAttribute("data-transcripttoggle")) {
        //iframe.setAttribute("data-branding", "true");
        iframeurl = iframeurl + "&toggleTranscript=" + imagecontainer.dataset.transcripttoggle.trim();
    }


    if (imagecontainer.hasAttribute("data-tab")) {
        //iframe.setAttribute("data-tab", imagecontainer.dataset.tab.trim());
        iframeurl = iframeurl + "&tabcolor=" + encodeURIComponent(imagecontainer.dataset.tab.trim());
    }

    if (imagecontainer.hasAttribute("data-tabtransparency")) {
        //iframe.setAttribute("data-tab", imagecontainer.dataset.tab.trim());
        iframeurl = iframeurl + "&tabTransparency=" + imagecontainer.dataset.tabtransparency.trim();
    }

    if (imagecontainer.hasAttribute("data-text")) {
        //iframe.setAttribute("data-text", imagecontainer.dataset.text.trim());
        iframeurl = iframeurl + "&textcolor=" + encodeURIComponent(imagecontainer.dataset.text.trim());
    }

    if (imagecontainer.hasAttribute("data-highlightcolor")) {
        //iframe.setAttribute("data-highlightcolor", imagecontainer.dataset.highlightcolor.trim());

        iframeurl = iframeurl + "&highlightColor=" + encodeURIComponent(imagecontainer.dataset.highlightcolor.trim());
    }

    if (imagecontainer.hasAttribute("data-recordanalytics")) {
        iframeurl = iframeurl + "&recordAnalytics=" + encodeURIComponent(imagecontainer.dataset.recordanalytics.trim());
    }

    var siteLink;
    if (imagecontainer.hasAttribute("data-sitelink")) {
        siteLink = imagecontainer.dataset.sitelink.trim();
    }

    var siteLinkText;
    if (imagecontainer.hasAttribute("data-sitelinktext")) {
        siteLinkText = imagecontainer.dataset.sitelinktext.trim();
    }

    var siteLinkNewTab;
    if (imagecontainer.hasAttribute("data-siteLinkNewTab")) {
        siteLinkNewTab = imagecontainer.dataset.sitelinknewtab.trim();
    }
    else {
        siteLinkNewTab = false
    }

    var parentUrl = window.location.href;
    iframeurl = iframeurl + "&parent=" + encodeURIComponent(parentUrl);


    iframe.src = iframeurl;
    iframe.className = "cmpl_iframe";
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "encrypted-media");
    iframe.setAttribute("class", "cmpl_iframe");
    iframe.setAttribute("allowfullscreen", "true");

    

    iframe.id = 'IFRAME_' + id.toUpperCase();

    //Create closer button.
    var closer = document.createElement('div');
    closer.className = "cmpl-popup-closer";
    closer.innerHTML = "<span>X</span>";
    closer.setAttribute("role", "button");
    closer.setAttribute("aria-label", "Close video dialog");
    closer.tabIndex = "0";
    closer.id = "CLOSER_" + id.toUpperCase();

    closer.addEventListener("click", function (e) {
        document.getElementById(id.toUpperCase()).style.display = 'none';
        if (!rotateThumbnails) {
            document.getElementById("SHADOW_" + id.toUpperCase()).setAttribute("aria-expanded", "false");
            document.getElementById("SHADOW_" + id.toUpperCase()).focus();
        }
        else {
            document.getElementById(imageid.toUpperCase()).setAttribute("aria-expanded", "false");
            document.getElementById(imageid.toUpperCase()).focus();
        }
        iframe.contentWindow.postMessage('{"method":"stop"}', "*");
        cmpl_closeDialog();
        e.preventDefault();
        e.stopPropagation();
    });

    closer.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.stopPropagation();
            this.dispatchEvent(new Event("click"));
        }
    });

    modal.appendChild(closer);


    //Iframes are now wrapped in a div to allow for transcriptless view.
    var iframeContainerDiv = document.createElement('div');
    iframeContainerDiv.className = "cmpl-iframe-container-div";
    iframeContainerDiv.append(iframe);

    modal.appendChild(iframeContainerDiv);

    if (rotateThumbnails) {
        if (siteLink) {
            var info = document.createElement('div');
            info.className = "cmpl-extra-link-div";
            var link = document.createElement('a');
            link.className = "cmpl-extra-link";
            link.href = siteLink;
            if (siteLinkText && siteLinkText != "") {
                link.text = siteLinkText
            }
            else {
                link.text = siteLink
            }

            if (siteLinkNewTab && siteLinkNewTab.toLowerCase() == "true") {
                link.target = "_blank"
                link.rel = "noopener noreferrer"
            }
            info.appendChild(link)
            iframeContainerDiv.appendChild(info);
        }
        iframeContainerDiv.style.top = "10%";
        iframeContainerDiv.style.left = "10%";
        iframeContainerDiv.style.width = "80%";
        iframeContainerDiv.style.height = "80%";
        iframe.style.position = "relative";
    }


    modal.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    //Append to body to avoid transforms.
    document.body.appendChild(modal);

}

function cmpl_showDialog() {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    //body.style.top = `-${scrollY}`;
    var negative = -1 * scrollY;
    body.style.top = negative + 'px';
};

function cmpl_closeDialog() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

window.addEventListener('scroll', function () {
    document.documentElement.style.setProperty('--scroll-y', window.scrollY);
});


function cmpl_Create_PicturePop_Image(url, id, imagecontainer, play_url, videoId, altid, rotateThumbnails, delayed, accessCode, delayedAccessCode, videoUrl, borderSize, borderColor, borderCorner) {
    //create the image.
    var image = document.createElement('img');
    var branding_position_div = document.createElement('div');
    branding_position_div.className = "cmpl-branding-position";
    image.id = id.toUpperCase();
    image.src = url;
    image.className = 'cmpl-picture-pop-image';
   
    //Add image to dom.
    branding_position_div.appendChild(image);

    //Grab the play button image which will sit on top of the image, centered.
    var playImage = document.createElement('img');
    playImage.src = play_url;
    playImage.className = "cmpl-picture-pop-play";
    //Create the shadow div to sit on top of the image.
    var play_shadow_div = document.createElement("div");
    play_shadow_div.className = "cmpl-shadow-div";
    play_shadow_div.appendChild(playImage);
    play_shadow_div.tabIndex = "0";
    play_shadow_div.setAttribute("role", "button");
    play_shadow_div.setAttribute("aria-label", "open video dialog to watch video");
    play_shadow_div.setAttribute("aria-expanded", "false");
    play_shadow_div.id = "SHADOW_MODAL_" + id.toUpperCase();

    branding_position_div.appendChild(play_shadow_div);

    if (rotateThumbnails) {
        image.style.cursor = "pointer";
        image.classList.add('index-0');
        image.classList.add('cmpl-thumbnail-transition-new');
        image.parentElement.style.backgroundColor = "rgba(32,32,32,1)";
        play_shadow_div.style.opacity = "0.3";
        play_shadow_div.hidden = true;
    }

    
    if (!rotateThumbnails) {

        //Lastly, wire up click event for the play shadow div so that when clicked it will bring up the modal.
        play_shadow_div.addEventListener('click', function (e) {

            if (delayed) {
                cmpl_Create_Modal('MODAL_' + id, imagecontainer, videoId, videoUrl, accessCode, altid, rotateThumbnails, id, delayedAccessCode);
            }

            document.getElementById('MODAL_' + id.toUpperCase()).style.display = 'block';
            document.getElementById('CLOSER_MODAL_' + id.toUpperCase()).focus();
            play_shadow_div.setAttribute("aria-expanded", "true");
            cmpl_showDialog();
            e.preventDefault();
            e.stopPropagation();
            //try {
            //document.getElementById('IFRAME_MODAL_' + id.toUpperCase()).contentWindow.postMessage(['pplaycall'],'*');
            //}
            //catch (ex)
            //{
            //console.log(ex);
            //}
        });

        play_shadow_div.addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                e.stopPropagation();
                this.dispatchEvent(new Event("click"));
            }
        });
    }

    //Add branding if specified.

    if (imagecontainer.hasAttribute("data-branding") && imagecontainer.dataset.branding.trim() === "true") {

        //Determine branding specifics.
        if (imagecontainer.hasAttribute("data-brandinglocation")) {
            //Deal with brandin glocation.
        }
        var brandingAnchor = document.createElement('a');
        var branding_div = document.createElement('div');
        branding_div.className = 'cmpl-branding';
        brandingAnchor.className = 'cmpl-branding-a';

        if (imagecontainer.hasAttribute("data-brandingimageurl")) {
            brandingAnchor.style.backgroundImage = 'url(' + imagecontainer.dataset.brandingimageurl.trim() + ')';

        }
        else {
            brandingAnchor.style.backgroundImage = 'url(https://stream.cadmore.media/images/Cadmore-Media-Logo-white.png)';
        }

        if (imagecontainer.hasAttribute("data-brandingurl")) {
            brandingAnchor.href = imagecontainer.dataset.brandingurl.trim();
        }
        else {
            brandingAnchor.href = "https://www.cadmore.media";
        }

        var staticBrandingLocation = "br";
        if (imagecontainer.hasAttribute("data-brandinglocation")) {
            staticBrandingLocation = imagecontainer.dataset.brandinglocation.trim();
        }
        if (staticBrandingLocation == "br") {
            branding_div.style.bottom = "0";
            branding_div.style.right = "0";
        }
        else if (staticBrandingLocation == "tr") {
            branding_div.style.top = "0";
            branding_div.style.right = "0";
        }
        else if (staticBrandingLocation == "tl") {
            branding_div.style.top = "0";
            branding_div.style.left = "0";
        }
        else if (staticBrandingLocation == "bl") {
            branding_div.style.bottom = "0";
            branding_div.style.left = "0";
        }

        var staticBrandingHeight = 3.6;
        var staticBrandingWidth = 18;

        if (imagecontainer.hasAttribute("data-brandingheight")) {
            staticBrandingHeight = imagecontainer.dataset.brandingheight.trim();
        }

        if (imagecontainer.hasAttribute("data-brandingwidth")) {
            staticBrandingWidth = imagecontainer.dataset.brandingwidth.trim();
        }

        branding_div.style.width = staticBrandingWidth + "%";
        branding_div.style.height = staticBrandingHeight + "%";


        brandingAnchor.target = "_blank";

        branding_position_div.appendChild(branding_div);
        branding_div.appendChild(brandingAnchor);

    }
    if (typeof borderSize !== 'undefined' && borderSize) {
        branding_position_div.style.borderStyle = "solid";
        branding_position_div.style.borderWidth = borderSize + "px";
    }

    if (typeof borderColor !== 'undefined' && borderColor) {
        branding_position_div.style.borderStyle = "solid";
        branding_position_div.style.borderColor = borderColor;

    }

    if (typeof borderCorner !== 'undefined' && borderCorner) {
        branding_position_div.style.borderStyle = "solid";
        branding_position_div.style.borderRadius = borderCorner + "px";
    }

    imagecontainer.appendChild(branding_position_div);

}

function cmpl_PicturePop_Styles(accentColor) {
    //Apply picture pop styling to the page.

    if (document.body.classList.contains('cmpl_picturepop_complete')) {
        return;
    }


    document.body.className += ' ' + 'cmpl_picturepop_complete';

    if (accentColor === "") {
        accentColor = '#107d8b';
    }

    var css = ' .cmpl-thumbnail-transition-new{transition: opacity 0.25s ease-in; opacity: 1;} .cmpl-thumbnail-transition-old{transition: opacity 0.25s ease-in; opacity: 0;} .cmpl-extra-link{color: #f8f9fa;} .cmpl-extra-link:hovor{color:' + accentColor + ';} .cmpl-extra-link-div{ padding: 10px; background-color: rgba(32,32,32,1); width: calc(80% - 20px); position: fixed;} .cmpl-branding-position { margin-left:auto; margin-right:auto; position:relative; display:inline-block; } .cmpl-branding { position:absolute; background-color: rgba(51,51,51,0.75); border-radius:3px; z-index:101; padding:3px; margin:2px; } .cmpl-branding-a { width: 100%; display: block; height: 100%; background-position: 50% 50%; background-repeat: no-repeat; background-size: cover; } .cmpl_picture_pop { text-align:center; position:relative; } .picturepop_image { width:100%;  } .cmpl-modal > .cmpl-iframe-container-div > .cmpl_iframe.cmpl_no_transcript { max-height:calc(100vh - 81px); margin-left:auto; margin-right:auto; }.cmpl-modal > .cmpl-iframe-container-div > .cmpl_iframe { position:absolute; top: 0; left: 0; width:100%; height:100%; } .cmpl-modal > .cmpl-iframe-container-div { overflow: hidden; border:0; margin:0; position:fixed; left:0; top:51px; height:calc(100% - 76px); width:100%; } .cmpl-modal > .cmpl-iframe-container-div.cmpl_no_transcript { } .cmpl-modal {  height: 100%; width: 100%; position: fixed; z-index: 99999; left: 0;  top: 0; background-color: rgba(0, 0, 0, 0.85); overflow: hidden; transition: 0.5s; } .cmpl-popup-closer:focus { background-color:' + accentColor + '; outline:none; padding:3px; border-radius:5px; } .cmpl-popup-closer { font-family: Arial; padding:3px; } .cmpl-popup-closer:hover { padding:3px; background-color:' + accentColor + '; outline:none; border-radius:5px; } .cmpl-popup-closer { position:absolute; top:10px; right: 20px; color: white; font-size:20pt; cursor:pointer; z-index:999999; } .cmpl-picture-pop-image { max-width:100%; display:block; } .cmpl-picture-pop-play { max-width:90%; max-height:90%; position: relative; top: 50%; transform: translateY(-50%); } .cmpl-shadow-div:focus { background-color: ' + accentColor + '; outline:none; } .cmpl-shadow-div:hover { background-color: ' + accentColor + '; outline:none; } .cmpl-shadow-div { background-color: rgba(0, 0, 0, 0.75); cursor:pointer; z-index:10; text-align:center; position:absolute;  top: 50%; left: 50%; border-radius:5px; width: 80px; height: 60px; transform: translate(-50%, -50%); }';
    head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

}
