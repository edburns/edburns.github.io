﻿
//includes polyfill.
if (!String.prototype.includes) {
    String.prototype.includes = function () {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

var useTranscript = new Map();
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
})("cmpl_docReady_v2", window);

//This is used for tracking if the element has been registered with the observer. This handles when an embed is cloned and the embed has already got the data-cmplhandled attribute set.
var cmpl_embed_collection_v2 = [];

function cmpl_AttemptKeys_v2() {
    //now, append to the iframe url the current url so that we can access it correctly via share buttons.
    try {
        cmpl_wirePageForVideo_v2(); //Make sure page is wired.  This can happen if video embed are added after the page has loaded.
        var elements = document.getElementsByClassName("cmpl_iframe");
        for (var i = 0; i < elements.length; i++) {
            if (!elements[i].hasAttribute("data-cmplhandled_v2") || !cmpl_embed_collection_v2.includes(elements[i])) {
                ////pass along the unique id generated for this iframe by the page.
                ///Set a unique id on the iframe.

                if (!elements[i].hasAttribute("data-cmplhandled_v2")) {
                    var uid = cmpl_generateUUIDNoDash_v2();
                    elements[i].setAttribute("data-uidvtwo", uid);

                    elements[i].setAttribute("data-cmplhandled_v2", true);
                }

                //Setup visibility observer for resizing.
                cmpl_embed_observer_v2.observe(elements[i]);

                //Add this element to the list to see if this is already being observed.
                cmpl_embed_collection_v2.push(elements[i]);
            }
        }

    }
    catch (ex) {
        console.log("CMPL: Error during keying.");
        console.log(ex);
    }
}


cmpl_docReady_v2(function () {

    //Check to make sure we haven't run this already.  This can happen when embed.js is deposited on the page more than once, and we don't want to run it again and again.
    if (document.body.classList.contains('cmpl_embed_complete_v2')) {
        return;
    }

    document.body.classList.add('cmpl_embed_complete_v2');

    var cmpl_responsiveIframeTest = (document.getElementsByClassName("cmpl_iframe_div")).length > 0 || (document.getElementsByClassName("cmpl_iframe_audio_div")).length;

    if (cmpl_responsiveIframeTest) {
        cmpl_wirePageForVideo_v2();
    }

    try {
        window.addEventListener('message', cmpl_messages_v2);
    }
    catch (ex) {
        console.log("ERROR");
        console.log(ex);
    }

});

function cmpl_messages_v2(e) {
    try {


        if (e.origin !== "https://play.cadmore.media" && e.origin != "https://samoyed-player-dev.azurewebsites.net" && e.origin !== "https://localhost:16301") {
            //bad domain.
            return;
        }

        if (document.body.classList.contains('cmpl_embeds_v1')) {
            cmpl_unbind_v2();
            return; //We stop listening as soon as a V1 player has made itself known.
        }

        //Update the body with a flag that there is a v2 embed, this stops v1 code running if there is a v2 embed present.
        //All embeds should be v1 or v2, no partial matches.
        if (!(document.body.classList.contains('cmpl_embeds_v2')) && !(document.body.classList.contains('cmpl_embeds_v1'))) {
            document.body.classList.add('cmpl_embeds_v2');
        }

        var obj = JSON.parse(e.data);

        //Check keys on each request so we can ensure no Iframe has been loaded post document load in the dom which needs to be keyed.
        cmpl_AttemptKeys_v2();


        if (obj.method === "visicheck_v2") {
            cmpl_provideVisicheck_v2();
        }
        //This method keys the iframe for future reference, passes the key to iframe content, and also includes any parameters.
        else if (obj.method === "keyMe_v2") {
            if (obj.playerBoxShadow == undefined || obj.playerBoxShadow) {
                cmpl_addboxshadow_v2();
            }
            var elements = document.getElementsByClassName("cmpl_iframe");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].contentWindow === e.source) {

                    //THis gets the list of startup parameters that may be present on the main site's url.
                    var start = cmpl_GetStart_v2();
                    var end = cmpl_GetEnd_v2();
                    var cue = cmpl_GetCue_v2();
                    var searchString = cmpl_GetSearchString_v2();
                    var parentUrl = window.location.href;

                    //add aspect ratio to the video so we know how to properly resize.
                    elements[i].parentElement.classList.add("cmpl_" + obj.aspectratio);
                    if (obj.forcefillcontainer) {
                        elements[i].parentElement.classList.add("cmpl_forcefillcontainer");
                    }

                    if (obj.useparentcontainerheight) {
                        elements[i].parentElement.classList.add("cmpl_useparentcontainerheight");
                    }

                    if (obj.force100percentwidth) {
                        elements[i].parentElement.classList.add("cmpl_100_width");
                    }

                    var playerBoxShadow = true;
                    if ("playerBoxShadow" in obj) {
                        playerBoxShadow = obj.playerBoxShadow;
                    }

                    var msg = {
                        method: "keyed",
                        parentUrl: parentUrl,
                        start: start,
                        end: end,
                        cue: cue,
                        searchString: searchString,
                        key: elements[i].dataset.uidvtwo
                    }

                    elements[i].contentWindow.postMessage(JSON.stringify(msg), "*");
                }
            }

            cmpl_ReportViewHeight_v2(); //set the initial view height.
        }
        else if (obj.method == "resize_v2") {
            var elements = document.getElementsByClassName("cmpl_iframe");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].dataset.uidvtwo === obj.key) {
                    elements[i].parentElement.classList.add('cmpl_resize_ready_v2');
                }
            }
            cmpl_ResponsiveResize_v2();
        }
        else if (obj.method === "clickLink_v2") {
            window.open(obj.link, '_blank').focus();
            //location.href = obj.link;
        }
        else if (obj.method === "NoTranscript_v2") {
            var elements = document.getElementsByClassName("cmpl_iframe");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].dataset.uidvtwo === obj.key) {
                    var iframeElement = elements[i];
                    iframeElement.classList.add('cmpl_no_transcript');
                    iframeElement.classList.remove('cmpl_yes_transcript');
                    if (iframeElement.parentElement != null) {
                        iframeElement.parentElement.classList.add('cmpl_no_transcript');
                        iframeElement.parentElement.classList.remove('cmpl_yes_transcript');
                    }

                    //At this point, we will let the embed.js resize like we want.
                    cmpl_allowResize = true;
                    cmpl_ResponsiveResize_v2();
                }
            }
        }
        else if (obj.method === "YesTranscript_v2") {
            var elements = document.getElementsByClassName("cmpl_iframe");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].dataset.uidvtwo === obj.key) {
                    var iframeElement = elements[i];
                    iframeElement.classList.remove('cmpl_no_transcript');
                    iframeElement.classList.add('cmpl_yes_transcript');
                    if (iframeElement.parentElement != null) {
                        iframeElement.parentElement.classList.remove('cmpl_no_transcript');
                        iframeElement.parentElement.classList.add('cmpl_yes_transcript');
                    }
                    cmpl_allowResize = true;
                    cmpl_ResponsiveResize_v2();
                }
            }
        }
        else if (obj.method === "AudioPlayer_v2") {
            var elements = document.getElementsByClassName("cmpl_iframe");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].dataset.uidvtwo === obj.key) {
                    var iframeElement = elements[i];
                    iframeElement.classList.add('cmpl_audio_player');
                    if (iframeElement.parentElement != null) {
                        iframeElement.parentElement.classList.add('cmpl_audio_player');

                        if (obj.showTitle == "false") {
                            iframeElement.parentElement.classList.add('cmpl_no_title');
                        }
                    }

                    cmpl_allowResize = true;
                    cmpl_ResponsiveResize_v2();
                }
            }
        }
    }
    catch (ex) {
        //ignore errors.  nothign will be visible.
    }

}

//This observer is necessary if our play is being contained inside something which will hide it, such as a tab.
//This will ensure it goes to properly resize itself once it becomes visible again.
//Note that our player will not size itself if it hidden.  This prevents scenarios of resizing while hidden cause tabs
//to disappear due to it believing it has no width or height to show tabs.
//This is V1 compatible as responsive resize 2 can only fire if v1 flags aren't present.
var cmpl_embed_observer_v2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            cmpl_ResponsiveResize_v2();
        }

    });
}, { root: null });

function cmpl_wirePageForVideo_v2() {
    if (document.body.classList.contains('cmpl_embed_loaded_v2')) {
        return;
    }

    document.body.classList.add('cmpl_embed_loaded_v2');

    //apply styles for auto sizing.
    var css = new Array();
    css.push('body:not(.cmpl_embeds_v1) .cmpl_iframe_div.cmpl_audio_player { max-width:1024px; }');
    css.push('body:not(.cmpl_embeds_v1) .cmpl_iframe_div { overflow:hidden !important; position:relative !important; height:unset !important; margin-left:auto; margin-right:auto;}');
    css.push('body:not(.cmpl_embeds_v1) .cmpl_iframe_div iframe { position:absolute; left: 0; top: 0; }');
    css.push('body:not(.cmpl_embeds_v1) .cmpl_iframe_audio_div iframe { position:absolute; left: 0; top: 0; }');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        var cssText = "";
        for (var i = 0; i < css.length; i++) {
            cssText = cssText + " " + css[i];
        }
        style.styleSheet.cssText = cssText;
    } else {
        for (var i = 0; i < css.length; i++) {
            style.appendChild(document.createTextNode(css[i]));
        }
    }

    ///***************************************************** *///
    //Each of the following is running V2 response resize.  This function short circuits until the V2 player identifies that it is ready for resizing.
    //Therefore, it will not place badly with the V1 player.  V1 player does similar by accepting a function to allow resize.  Basically, they will
    //resize to the same on initial load, but one or the other will stop running when the first callback occurs to Embed.js to allow for resizing
    //because that callback will set flags to prevent it.
    cmpl_ResponsiveResize_v2(); // resize once
    window.addEventListener("resize", cmpl_resize_v2); //resize if window resizes.
    window.addEventListener("load", cmpl_load_v2); //resize again incase there is a scroll bar.

    window.addEventListener('orientationchange', cmpl_orientationchange_v2);

    document.addEventListener('webkitfullscreenchange', cmpl_exitHandler_v2, false);
    document.addEventListener('mozfullscreenchange', cmpl_exitHandler_v2, false);
    document.addEventListener('fullscreenchange', cmpl_exitHandler_v2, false);
    document.addEventListener('MSFullscreenChange', cmpl_exitHandler_v2, false);

    
    ///*************************************************///

    cmpl_AttemptKeys_v2(); //attempt keys for elements already loaded.

    ///This function is benign now as it will call down to the iframe but call using a method of visicheck_v2, which V1 won't respond to.
    window.addEventListener('scroll', cmpl_scrollfunction_v2);
}

function cmpl_orientationchange_v2() {
    cmpl_ResponsiveResize_v2();
}

function cmpl_load_v2() {
    cmpl_ResponsiveResize_v2();
}

function cmpl_resize_v2() {
    cmpl_ResponsiveResize_v2();
}

function cmpl_exitHandler_v2() {
    cmpl_ResponsiveResize_v2();
}

function cmpl_scrollfunction_v2() {
    try {
        cmpl_provideVisicheck_v2();
    }
    catch (ex) {
        //ignore errors.  nothing will be visible.
    }
}

function cmpl_unbind_v2() {
    console.log("CMPL V2: Unbinding...");
    window.removeEventListener("resize", cmpl_resize_v2); //resize if window resizes.
    window.removeEventListener("load", cmpl_load_v2); //resize again incase there is a scroll bar.

    window.removeEventListener('orientationchange', cmpl_orientationchange_v2);

    document.removeEventListener('webkitfullscreenchange', cmpl_exitHandler_v2);
    document.removeEventListener('mozfullscreenchange', cmpl_exitHandler_v2);
    document.removeEventListener('fullscreenchange', cmpl_exitHandler_v2);
    document.removeEventListener('MSFullscreenChange', cmpl_exitHandler_v2);


    ///This function is benign now as it will call down to the iframe but call using a method of visicheck_v2, which V1 won't respond to.
    window.removeEventListener('scroll', cmpl_scrollfunction_v2);

    window.removeEventListener('message', cmpl_messages_v2);

    try {
        cmpl_embed_observer_v2.disconnect();
    }
    catch (ex) {
    }
}

function cmpl_addboxshadow_v2() {

    if (document.body.classList.contains('cmpl_embed_loaded_v2_boxshadow')) {
        return;
    }

    document.body.classList.add('cmpl_embed_loaded_v2_boxshadow');
    //apply styles for auto sizing.
    var css = new Array();
    css.push('body:not(.cmpl_embeds_v1) .cmpl_iframe_div { box-shadow: 0 .125rem .55rem rgba(0,0,0,.075)!important;}');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet) {
        // This is required for IE8 and below.
        var cssText = "";
        for (var i = 0; i < css.length; i++) {
            cssText = cssText + " " + css[i];
        }
        style.styleSheet.cssText = cssText;
    } else {
        for (var i = 0; i < css.length; i++) {
            style.appendChild(document.createTextNode(css[i]));
        }
    }
}

function cmpl_generateUUIDNoDash_v2() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

}

function cmpl_GetVideoIdFromPath_v2(url, key) {
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

function cmpl_getParameterByName_v2(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function cmpl_GetStart_v2() {
    var field = 'start';
    var url = window.location.href;
    if (url.indexOf('?' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else if (url.indexOf('&' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else
        return '';
}

function cmpl_GetEnd_v2() {
    var field = 'end';
    var url = window.location.href;
    if (url.indexOf('?' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else if (url.indexOf('&' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else
        return '';

}


function cmpl_GetCue_v2() {
    var field = 'cue';
    var url = window.location.href;
    if (url.indexOf('?' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else if (url.indexOf('&' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else
        return '';
}

function cmpl_GetSearchString_v2() {
    var field = 'cmplsearchstring';
    var url = window.location.href;
    if (url.indexOf('?' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else if (url.indexOf('&' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else
        return '';
}


function cmpl_GetClipId_v2() {
    var field = 'clipId';
    var url = window.location.href;
    if (url.indexOf('?' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else if (url.indexOf('&' + field + '=') != -1)
        return cmpl_getParameterByName_v2(field, url);
    else
        return '';
}

function cmpl_ReportViewHeight_v2() {
    //THis funciton is used to report the current view height to the player.
    //This is needed so that the player can adequately act on the view port height for determining if it has enough height to display properly or to revert to transcriptless mode.

    try {
        var elements = document.getElementsByClassName("cmpl_iframe");
        for (var p = 0; p < elements.length; p++) {
            var uid = elements[p].getAttribute("data-uidvtwo");

            try {
                elements[p].contentWindow.postMessage('{"method":"viewHeight","value":"' + window.innerHeight + '"}', "*");
            }
            catch (ex) {
                //do nothing.
            }
        }
    }
    catch (ex) {
        console.log("CMPL: Error reporting parent view height to embed.");
        console.log(ex);
    }

}

function cmpl_forceTranscriptless_v2(divElement) {
    if (!divElement.classList.contains("forced_transcriptless")) {
        var iframe = divElement.querySelector('iframe');
        iframe.contentWindow.postMessage('{"method":"forceTranscriptless","value":true}', "*");
        divElement.classList.add('forced_transcriptless');
    }
}

function cmpl_unforceTranscriptless_v2(divElement, showTab) {
    if (divElement.classList.contains('forced_transcriptless')) {
        var iframe = divElement.querySelector('iframe');
        iframe.contentWindow.postMessage('{"method":"forceTranscriptless","value":false , "showTab":' + showTab + '}', "*");
        divElement.classList.remove('forced_transcriptless');
    }
}


function cmpl_ResponsiveResize_v2() {

    try {
        if (document.body.classList.contains('cmpl_embeds_v1')) {
            //If there is a setup indicator for V1, we don't apply the v2 resizing code.
            cmpl_unbind_v2();
            return;
        }
        var elements = document.getElementsByClassName("cmpl_iframe_div");
        cmpl_ReportViewHeight_v2();
        for (var i = 0; i < elements.length; i++) {
            var divElement = elements[i];
            var cmpl_allowResize = divElement.classList.contains('cmpl_resize_ready_v2');

            var isAudioPlayer = elements[i].classList.contains('cmpl_audio_player');
            if (!cmpl_allowResize && !isAudioPlayer) {
                divElement.style.paddingTop = "56.25%";
                continue;
            }
            else if (!cmpl_allowResize && isAudioPlayer) {
                divElement.style.paddingTop = "66%";
                continue;
            }

            //Set an appropriate padding based on the width of the div.
            var positionInfo = divElement.getBoundingClientRect();
            var width = positionInfo.width;

            // Get the width of the parent and then remove the padding.
            // We'll need that later to determine if we have enough space to display properly.
            var parentRect = divElement.parentElement.getBoundingClientRect();
            var parentWidth = parentRect.width - 1;
            if (parentWidth <= 0) {
                //Shunt here for browsers where sometimes parentWidth is 0 based on inline properties of parent.
                parentWidth = divElement.parentElement.clientWidth - 1;
            }

            var computedStyle = getComputedStyle(divElement.parentElement);
            parentWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
            //If position info is indicating that this thing is not on the screen, we dont' want to resize it.'
            if (positionInfo.x == 0 && positionInfo.y == 0 && positionInfo.width == 0) {
                continue;
            }

            //Here we branch on aspect ratio.
            var aspectRatio = "16x9"; //Default.

            if (divElement.classList.contains("cmpl_100_width")) {
                aspectRatio = "100%";
            }
            else if (divElement.classList.contains("cmpl_1x1")) {
                aspectRatio = "1x1";
            }
            else if (divElement.classList.contains("cmpl_9x16")) {
                aspectRatio = "9x16";
            }
            else if (divElement.classList.contains("cmpl_4x3")) {
                aspectRatio = "4x3";
            }

            //Add more as we support.
            if (isAudioPlayer) {
                cmpl_audioResize(width, divElement, parentWidth);
            }
            else if (aspectRatio == "16x9") {
                cmpl_16x9Resize(width, divElement, parentWidth);
            }
            else if (aspectRatio == "1x1") {
                cmpl_1x1Resize(width, divElement, parentWidth);
            }
            else if (aspectRatio == "9x16") {
                cmpl_9x16Resize(width, divElement, parentWidth);
            }
            else if (aspectRatio == "4x3") {
                cmpl_4x3Resize(width, divElement, parentWidth);
            }
            else if (aspectRatio == "100%") {
                cmpl_100PercentResize(width, divElement, parentWidth, cmpl_allowResize);
            }
            else {
                //Default on missing aspect somehow.  THis isn't relaly possible but who knows.
                cmpl_16x9Resize(width, divElement, parentWidth);
            }
        }
    }
    catch (ex) {
        console.log(ex);
    }
}

function cmpl_audioResize(width, divElement, parentWidth) {

    var windowHeight = window.innerHeight;
    if (divElement.classList.contains('cmpl_no_transcript')) {
        if (parentWidth < 1024) {
            if (parentWidth > 767) {
                if (divElement.classList.contains('cmpl_no_title')) {
                    divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 0.26) + 'px !important;');
                }
                else {
                    divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 0.37) + 'px !important;');
                }
            }
            else {
                if (parentWidth > 532) {
                    if (divElement.classList.contains('cmpl_no_title')) {
                        divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 0.36) + 'px !important;');
                    }
                    else {
                        divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 0.56) + 'px !important;');
                    }
                }
                else {
                    if (divElement.classList.contains('cmpl_no_title')) {
                        divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 0.44) + 'px !important;');
                    }
                    else {
                        divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 0.66) + 'px !important;');
                    }
                }
            }
        }
        else {
            if (divElement.classList.contains('cmpl_no_title')) {
                divElement.setAttribute('style', 'padding-top:unset !important; height:' + (1024 * 0.24) + 'px !important;');
            }
            else {
                divElement.setAttribute('style', 'padding-top:unset !important; height:' + (1024 * 0.37) + 'px !important;');
            }
        }
    }
    else {
        if (parentWidth < 1024) {
            if (parentWidth > 767) {
                divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 0.84) + 'px !important;');
            }
            else {
                if (parentWidth > 532) {
                    divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 1.16) + 'px !important;');
                }
                else if (parentWidth > 360) {
                    divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 1.6) + 'px !important;');
                }
                else {
                    divElement.setAttribute('style', 'padding-top:unset !important; height:' + (parentWidth * 2) + 'px !important;');
                }
            }
        }
        else {
            //Transcript is slightly larger than player.
            divElement.setAttribute('style', 'padding-top:unset !important; height:' + (1024 * 0.84) + 'px !important;');
        }
    }
}

function cmpl_100PercentResize(width, divElement, parentWidth, cmpl_allowResize) {

    if (!cmpl_allowResize) {
        divElement.style.paddingTop = "56.25%";
        return;
    }

    divElement.setAttribute('style', '');
    divElement.style.paddingTop = "56.25%";
    divElement.style.width = "100%";
    divElement.style.height = 0;
    if (width >= 1024) {
        divElement.style.paddingTop = "39.4%";
    }
    else {
        //This is the mobile/tablet view breakpoint.
        //calculate correct padding top.
        var viewPortHeight = window.innerHeight; //Gets the total height.

        if (viewPortHeight < 400) {
            //in this case we have width but no height.
            divElement.style.paddingTop = "56.25%";
        }
        else {
            var percent = 0.70; //70%

            if (width >= 768) {
                percent = 0.85; //85%
            }

            //Even though the view port height is sufficient to display with transcript + video for adequate padding,
            //if the width sized to 16:9 is going to consume all the height, save < 100 px, we need to shrink to 56.25% because there won't be enough
            //room to show the transcript anyways.
            var videoConsumedWidth = Math.floor((parentWidth - 8) * 0.5625); //we subtract 8 because of internal padding around the player.
            var modifiedViewPortHeight = Math.floor((((viewPortHeight - 8) * percent)));//this is the view port height we consider because we never go to 100% view port height.
            if (modifiedViewPortHeight - videoConsumedWidth <= 100) {
                divElement.style.paddingTop = "56.25%";
            }
            else {
                var correctPadding = ((viewPortHeight * percent) / parentWidth) * 100;
                divElement.style.paddingTop = correctPadding + "%";
            }
        }
    }
}

function cmpl_16x9Resize(width, divElement, parentWidth) {
   //Wide view breakpoint.
    var useParentHeight = divElement.classList.contains('cmpl_useparentcontainerheight');
    var windowHeight = window.innerHeight;
    var consumeHeight = 0.84; //Default amount of height we will consume on viewport.
    if (useParentHeight) {
        windowHeight = divElement.parentElement.clientHeight;
        consumeHeight = 0.98; //When using parent element will want to consume most of its height.
    }
    var forceFillContainer = divElement.classList.contains('cmpl_forcefillcontainer'); //If true, that means we do not adjust height based on width.
    if (divElement.classList.contains('cmpl_no_transcript')) {
        //No transcript
        divElement.setAttribute('style', '');
        divElement.style.paddingTop = "56.25%";
        divElement.style.width = "100%";
        divElement.style.height = 0;
        //If there is not enough height to match the width, we shrink width till there is.
        if (parentWidth * 0.5625 > (windowHeight * consumeHeight) && !forceFillContainer) {
            divElement.setAttribute('style', '');
            var newWidth = (windowHeight * consumeHeight) / 0.5625;
            var newHeight = newWidth * 0.5625;
            divElement.setAttribute('style', 'width:' + newWidth + 'px; padding-top:unset !important; height:' + newHeight + 'px !important;');
        }

        //Now that we have done the above, we want to know if we could unforce transcriptless.
        var portraitSampleplayerHeight = (windowHeight * consumeHeight) * .3; //This is the height we want.
        var portraitsampleplayerWidth = portraitSampleplayerHeight / 0.5625; //That makes this the desired player width.
        var portraitSampledesiredHeight = (windowHeight * consumeHeight); //this is our desired height, the full availabe height.
        if (portraitsampleplayerWidth > parentWidth) {
            portraitsampleplayerWidth = parentWidth; //Player width will be parentWidth.
            portraitSampleplayerHeight = portraitsampleplayerWidth * 0.5625;
            portraitSampledesiredHeight = portraitsampleplayerWidth * 2.5 < 580 ? 580 : portraitsampleplayerWidth * 2.5 > (windowHeight * consumeHeight) ? (windowHeight * consumeHeight) : portraitsampleplayerWidth * 2.5;
        }
        var landscapeSampleplayerHeight = (windowHeight * consumeHeight); //This is the height we have available.
        //So, we calculate the new width and shrink the player to fit.
        var landscapeSampleplayerWidth = landscapeSampleplayerHeight / 0.39375;

        if (
            (parentWidth >= 1024 && (windowHeight * consumeHeight) > 0.39375 * parentWidth)  //Could be wide view
            ||
            (portraitsampleplayerWidth >= 290 && (portraitSampledesiredHeight >= 580 || forceFillContainer)) //minimum width we allow
            ||
            (landscapeSampleplayerHeight > 300 && landscapeSampleplayerWidth >= 1024 && parentWidth >= 1024)
        ) {

            var iframe = divElement.querySelector('iframe');
            if (useTranscript.has(iframe.getAttribute("data-uidvtwo"))) {
                var attribute = iframe.getAttribute("data-uidvtwo");
                cmpl_unforceTranscriptless_v2(divElement, useTranscript.get(attribute));
            }
            else {
                cmpl_unforceTranscriptless_v2(divElement, false);
            }
        }

    }
    else {
        //This says, if we are wide enough for wide view in theory
        //At at least 1024 wide, the desired height will be 1024 * 0.39375
        if (parentWidth >= 1024 && ((windowHeight * consumeHeight) > 0.39375 * parentWidth || forceFillContainer)) {
            //For wide view, 16/9 comprises 70% of the space.  Formula is 16/9 + x/9 = dimension.  9 is fixed because height must be the same.
            //Therefore 16 is 70% of width.  This means total is 22.857/9 is our aspect ratio of wide view.
            //This makes desired height padding = 9/22.857 = 39.375%
            divElement.setAttribute('style', '');
            divElement.style.paddingTop = "39.375%";
            divElement.style.width = "100%";
            divElement.style.height = 0;
            //If there is not enough height to match the width, we shrink width till there is.
            if (parentWidth * 0.39375 > (windowHeight * consumeHeight) && !forceFillContainer) {
                divElement.setAttribute('style', '');
                var newWidth = (windowHeight * consumeHeight) / 0.39375;
                var newHeight = newWidth * 0.39375;
                divElement.setAttribute('style', 'width:' + newWidth + 'px; padding-top:unset !important; height:' + newHeight + 'px !important;');
            }
        }
        //This handles when we have width for wide view but not enough height for wide view straight up.
        else if (parentWidth >= 1024 && !forceFillContainer) {
            //In this case, the width is there, but not the height to compensate for player being as wide as parent.
            //We will then attempt to shrink.  If we shrink below 880, that means we are very wide but no height and so we will switch
            //to transcriptless.
            var playerHeight = (windowHeight * consumeHeight); //This is the height we have available.
            //So, we calculate the new width and shrink the player to fit.
            var playerWidth = playerHeight / 0.3975;

            var correctPadding = (playerHeight / parentWidth) * 100;
            //If we don't have enough height to show transcript, we force transcriptless.
            if (playerHeight < 300 || playerWidth < 1024) {
                //force transcriptless.
                var iframe = divElement.querySelector('iframe');
                useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                cmpl_forceTranscriptless_v2(divElement);
            }
            else {
                divElement.setAttribute('style', '');
                divElement.style.width = playerWidth + "px";
                divElement.style.paddingTop = correctPadding + "%";
                divElement.style.height = 0;
            }

        }
        else if (forceFillContainer) //Force fill on portrait.
        {
            if (parentWidth < 290) {
                //force transcriptless.
                var iframe = divElement.querySelector('iframe');
                useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);

                cmpl_forceTranscriptless_v2(divElement);
            }
            else {
                //This means we are going to forcefill in portrait mode, meaning we fill the width and show transcript at the bottom no matter how much height we got to show it.
                divElement.setAttribute('style', '');
                divElement.style.width = parentWidth + "px";
                //desired height in this case is just double the player height.
                var forcePortraitDesiredHeight = (parentWidth * 0.5625) * 2;
                divElement.style.paddingTop = ((forcePortraitDesiredHeight / parentWidth) * 100) + "%";
                divElement.style.height = 0;
            }
        }
        //This handles when we do not have the width for wide view and so must go portrait.
        else {
            //Calculate up to 84% height.
            //While in portrait, we set a benchmark for 16x9 player that we want the player to consume 50% of the view height.
            //Leaving 50% for the transcript. 
            var playerHeight = (windowHeight * consumeHeight) * 0.5; //This is the height we want for player, 1/2 of the available height.
            var playerWidth = playerHeight / 0.5625; //That makes this the desired player width.
            //Therefore our desired height is playerHeight x 2 for the transcript.
            var desiredHeight = (windowHeight * consumeHeight); //this is our desired height, the full availabe height.
            //Now, that we have calculated this, we have to consider the case of where the desired width exceeds parent width.
            var correctPadding;
            if (playerWidth > parentWidth) {
                //In this case, we are much taller than we are wide.
                //So, now, we are going to work our way to a height instead of starting with the height.
                playerWidth = parentWidth; //Player width will be parentWidth.
                playerHeight = parentWidth * 0.5625; //This is now the player height. 
                //We still want our desired heigh tto be what is available up until a point.
                //At some point, we want to shrink the transcript too because it starts to look really odd.
                //This point is when the playerWidth is < 1/3 of the height (inverse of the wide view)
                desiredHeight = playerHeight * 2.5 < 580 ? 580 : playerHeight * 2.5 > (windowHeight * consumeHeight) ? (windowHeight * consumeHeight) : playerHeight * 2.5;
                correctPadding = (desiredHeight / parentWidth) * 100;
            }
            else {
                //And that's it.  We just calculate padding off of that.  We have to apply it to the parent width
                //because padding will be based on that, not the set divelement width.
                correctPadding = (desiredHeight / parentWidth) * 100;
            }

            //If the netoutcome of this is a width that is to small for the transcript, we will force the video into transcriptless mode.
            if (playerWidth < 290 || desiredHeight < 580) {
                //force transcriptless.
                var iframe = divElement.querySelector('iframe');
                useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                cmpl_forceTranscriptless_v2(divElement);
            }
            else {
                divElement.setAttribute('style', '');
                divElement.style.width = playerWidth + "px";
                divElement.style.paddingTop = correctPadding + "%";
                divElement.style.height = 0;
            }
        }
    }
}

function cmpl_1x1Resize(width, divElement, parentWidth) {
    //Wide view breakpoint.
    var useParentHeight = divElement.classList.contains('cmpl_useparentcontainerheight');
    var windowHeight = window.innerHeight;
    var consumeHeight = 0.84; //Default amount of height we will consume on viewport.
    if (useParentHeight) {
        windowHeight = divElement.parentElement.clientHeight;
        consumeHeight = 0.98; //When using parent element will want to consume most of its height.
    }
    var forceFillContainer = divElement.classList.contains('cmpl_forcefillcontainer'); //If true, that means we do not adjust height based on width.
    try {
        if (divElement.classList.contains('cmpl_no_transcript')) {
            //No transcript
            divElement.setAttribute('style', '');
            divElement.style.paddingTop = "100%"; //estimate right now probably not right.  This will be wide view with transcript on the right.
            divElement.style.width = "100%";
            divElement.style.height = 0;
            //If there is not enough height to match the width, we shrink width till there is.
            if (parentWidth > (windowHeight * consumeHeight) && !forceFillContainer) {
                var newWidth = (windowHeight * consumeHeight);
                divElement.setAttribute('style', 'width:' + newWidth + 'px; padding-top:unset !important; height:' + newWidth + 'px !important;');
            }

            //Now that we have done the above, we want to know if we could unforce transcriptless.
            var portraitSampleplayerHeight = (windowHeight * consumeHeight) * .5; //This is the height we want.
            var portraitsampleplayerWidth = portraitSampleplayerHeight / 0.5; //That makes this the desired player width.
            var portraitSampledesiredHeight = (windowHeight * consumeHeight); //this is our desired height, the full availabe height.
            if (portraitsampleplayerWidth > parentWidth) {
                portraitsampleplayerWidth = parentWidth; //Player width will be parentWidth.
                portraitSampledesiredHeight = portraitsampleplayerWidth * 2 < 580 ? 580 : portraitsampleplayerWidth * 2 > (windowHeight * consumeHeight) ? (windowHeight * consumeHeight) : portraitsampleplayerWidth * 2;
            }
            var landscapeSampleplayerHeight = (windowHeight * consumeHeight); //This is the height we have available.
            //So, we calculate the new width and shrink the player to fit.
            var landscapeSampleplayerWidth = playerHeight / 0.6502;


            if (
                (parentWidth >= 880 && (windowHeight * consumeHeight) >= 0.6502 * parentWidth)  //Could be wide view
                ||
                (portraitsampleplayerWidth > 290 && (portraitSampledesiredHeight >= 580 || forceFillContainer)) //minimum width we allow
                ||
                (landscapeSampleplayerHeight > 300 && landscapeSampleplayerWidth >= 880 && parentWidth >= 880)
            ) {
                var iframe = divElement.querySelector('iframe');
                if (useTranscript.has(iframe.getAttribute("data-uidvtwo"))) {
                    var attribute = iframe.getAttribute("data-uidvtwo");
                    cmpl_unforceTranscriptless_v2(divElement, useTranscript.get(attribute));
                }
                else {
                    cmpl_unforceTranscriptless_v2(divElement, false);
                }
            }
        }
        else {
            //Yes transcript.
            var windowHeight = window.innerHeight;
            //For wide view, 1/1 comprises 65% of the space.  Formula is 1/1 + x/1 = dimension.  1 is fixed because height must be the same.
            //Therefore 1 is 65% of width.  This means total is 1.538/1 is our aspect ratio of wide view.
            //This makes desired height padding = 1/1.538 = 65.02%

            //This handles wide view when we know we have enough width and height to just do it normal.
            if (parentWidth >= 880 && ((windowHeight * consumeHeight) >= 0.6502 * parentWidth || forceFillContainer)) {
                divElement.setAttribute('style', '');
                divElement.style.paddingTop = "65.02%";
                divElement.style.width = "100%";
                divElement.style.height = 0;

            }
            //This handles when we have width for wide view but not enough height for wide view.
            else if (parentWidth >= 880 && !forceFillContainer) {
                //In this case, the width is there, but not the height to compensate for player being as wide as parent.
                //We will then attempt to shrink.  If we shrink below 880, that means we are very wide but no height and so we will switch
                //to transcriptless.
                var playerHeight = (windowHeight * consumeHeight); //This is the height we have available.
                //So, we calculate the new width and shrink the player to fit.
                var playerWidth = playerHeight / 0.6502;

                var correctPadding = (playerHeight / parentWidth) * 100;
                //If we don't have enough height to show transcript, we force transcriptless.
                if (playerHeight < 300 || playerWidth < 880) {
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    divElement.setAttribute('style', '');
                    divElement.style.width = playerWidth + "px";
                    divElement.style.paddingTop = correctPadding + "%";
                    divElement.style.height = 0;
                }

            }
            else if (forceFillContainer) //Force fill on portrait.
            {
                if (parentWidth < 290) {
                    //force transcriptless.
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    //This means we are going to forcefill in portrait mode, meaning we fill the width and show transcript at the bottom no matter how much height we got to show it.
                    divElement.setAttribute('style', '');
                    divElement.style.width = parentWidth + "px";
                    //desired height in this case is just double the player height.
                    var forcePortraitDesiredHeight = (parentWidth * 0.5) + parentWidth;
                    divElement.style.paddingTop = ((forcePortraitDesiredHeight / parentWidth) * 100) + "%";
                    divElement.style.height = 0;
                }
            }
            //This handles when we do not have enough width for wide view and must go portrait.
            else {
                //Calculate up to 84% height.
                //While in portrait, we set a benchmark for 1x1 player that we want the player to consume 50% of the view height.
                //Leaving 50% for the transcript. 
                var playerHeight = (windowHeight * consumeHeight) * 0.5; //This is the height we want.
                var playerWidth = playerHeight; //That makes this the desired player width, for 1x1 that's same as width.
                var desiredHeight = (windowHeight * consumeHeight); //this is our desired height, the full availabe height.

                //Now, that we have calculated this, we have to consider the case of where the desired width exceeds parent width.
                var correctPadding;
                if (playerWidth > parentWidth) {
                    //In this case, we are much taller than we are wide.
                    //So, now, we are going to work our way to a height instead of starting with the height.
                    playerWidth = parentWidth; //Player width will be parentWidth.
                    playerHeight = parentWidth; //height and width are the same on 1x1
                    desiredHeight = playerHeight * 2 < 580 ? 580 : playerHeight * 2 > (windowHeight * consumeHeight) ? (windowHeight * consumeHeight) : playerHeight * 2; //We want to double up so transcript is also 50%
                    correctPadding = (desiredHeight / parentWidth) * 100;
                }
                else {
                    //And that's it.  We just calculate padding off of that.  We have to apply it to the parent width
                    //because padding will be based on that, not the set divelement width.
                    correctPadding = ((windowHeight * consumeHeight) / parentWidth) * 100;
                }

                //If the netoutcome of this is a width that is to small for the transcript, we will force the video into transcriptless mode.
                if (playerWidth < 290 || desiredHeight < 580) {
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    divElement.setAttribute('style', '');
                    divElement.style.width = playerWidth + "px";
                    divElement.style.paddingTop = correctPadding + "%";
                    divElement.style.height = 0;
                }
            }
        }
    }
    catch (ex) {
        console.log(ex);
    }

}

function cmpl_9x16Resize(width, divElement, parentWidth) {
    //Wide view breakpoint.
    var useParentHeight = divElement.classList.contains('cmpl_useparentcontainerheight');
    var windowHeight = window.innerHeight;
    var consumeHeight = 0.84; //Default amount of height we will consume on viewport.
    if (useParentHeight) {
        windowHeight = divElement.parentElement.clientHeight;
        consumeHeight = 0.98; //When using parent element will want to consume most of its height.
    }
    var forceFillContainer = divElement.classList.contains('cmpl_forcefillcontainer'); //If true, that means we do not adjust height based on width.
    try {
        if (divElement.classList.contains('cmpl_no_transcript')) {
            //No transcript
            divElement.setAttribute('style', '');
            divElement.style.paddingTop = "177.78%"; //This is natural aspect ratio for 9x16 (inverse of 16x9)
            divElement.style.width = "100%";
            divElement.style.height = 0;
            //If there is not enough height to match the width, we shrink width till there is.
            if (parentWidth * 1.7778 > (windowHeight * consumeHeight) && !forceFillContainer) {
                divElement.setAttribute('style', '');
                var newWidth = (windowHeight * consumeHeight) / 1.7778;
                var newHeight = newWidth * 1.7778;
                divElement.setAttribute('style', 'width:' + newWidth + 'px; padding-top:unset !important; height:' + newHeight + 'px !important;');
            }

            //Now that we have done the above, we want to know if we could unforce transcriptless.
            var portraitSampleplayerHeight = (windowHeight * 0.95) * 0.7; //This is the height we want.
            var portraitsampleplayerWidth = portraitSampleplayerHeight / 1.7778; //That makes this the desired player width.
            var portraitSampledesiredHeight = (windowHeight * 0.95); //this is our desired height, the full availabe height.
            if (portraitsampleplayerWidth > parentWidth) {
                portraitsampleplayerWidth = parentWidth; //Player width will be parentWidth.
                portraitSampleplayerHeight = portraitsampleplayerWidth * 1.7778; //This is the height we want.
                portraitSampledesiredHeight = portraitSampleplayerHeight + portraitSampleplayerHeight * 0.333;
            }
            var landscapeSampleplayerHeight = (windowHeight * consumeHeight); //This is the height we have available.
            //So, we calculate the new width and shrink the player to fit.
            var landscapeSampleplayerWidth = landscapeSampleplayerHeight / 0.8;

            if (
                (parentWidth >= 552 && (windowHeight * consumeHeight) > 0.8 * parentWidth)  //Could be wide view
                ||
                (portraitsampleplayerWidth > 200 && (portraitSampledesiredHeight > 550 || forceFillContainer)) //minimum width we allow
                ||
                (landscapeSampleplayerHeight >= 300 && landscapeSampleplayerWidth >= 552 && parentWidth >= 552)
            ) {
                var iframe = divElement.querySelector('iframe');
                if (useTranscript.has(iframe.getAttribute("data-uidvtwo"))) {
                    var attribute = iframe.getAttribute("data-uidvtwo");
                    cmpl_unforceTranscriptless_v2(divElement, useTranscript.get(attribute));
                }
                else {
                    cmpl_unforceTranscriptless_v2(divElement, false);
                }
            }
        }
        else {
            if (parentWidth >= 552 && ((windowHeight * consumeHeight) > 0.8 * parentWidth || forceFillContainer)) {
                //For wide view, 9/19 comprises 45% of the space.  Formula is 9/16 + x/16 = dimension.  9 is fixed because height must be the same.
                //Therefore 9 is 45% of width.  This means total is 20/16 is our aspect ratio of wide view.
                //This makes desired height padding = 16/20 = 80%
                divElement.setAttribute('style', '');
                divElement.style.paddingTop = "80%";
                divElement.style.width = "100%";
                divElement.style.height = 0;
                //If there is not enough height to match the width, we shrink width till there is.
                if (parentWidth * 0.8 > (windowHeight * consumeHeight)) {
                    divElement.setAttribute('style', '');
                    var newWidth = (windowHeight * consumeHeight) / 0.8;
                    var newHeight = newWidth * 0.8;
                    divElement.setAttribute('style', 'width:' + newWidth + 'px; padding-top:unset !important; height:' + newHeight + 'px !important;');
                }
            }
            //This handles when we have width for wide view but not enough height for wide view straight up.
            else if (parentWidth >= 552 && !forceFillContainer) {
                //in this case we have enough width in theory for wide view, but we don't have enough height to accommodate
                //if the player was the full width of parent container.
                var playerHeight = (windowHeight * consumeHeight); //This is the height we have available.
                //So, we calculate the new width and shrink the player to fit.
                var playerWidth = playerHeight / 0.8;

                var correctPadding = (playerHeight / parentWidth) * 100;
                //If we don't have enough height to show transcript, we force transcriptless.
                if (playerHeight < 300 || playerWidth < 552) {
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);

                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    divElement.setAttribute('style', '');
                    divElement.style.width = playerWidth + "px";
                    divElement.style.paddingTop = correctPadding + "%";
                    divElement.style.height = 0;
                }
            }
            else if (forceFillContainer) //Force fill on portrait.
            {
                if (parentWidth <= 200) {
                    //force transcriptless.
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    //This means we are going to forcefill in portrait mode, meaning we fill the width and show transcript at the bottom no matter how much height we got to show it.
                    divElement.setAttribute('style', '');
                    divElement.style.width = parentWidth + "px";
                    //desired height in this case is just double the player height.
                    var forcePortraitDesiredHeight = (parentWidth * 0.88) + (parentWidth * 1.7778);
                    divElement.style.paddingTop = ((forcePortraitDesiredHeight / parentWidth) * 100) + "%";
                    divElement.style.height = 0;
                }
            }
            //This handles when we do not have the width for wide view and so must go portrait.
            else {
                //Calculate up to 84% height.
                //While in portrait, we set a benchmark for 9x16 player that we want the player to consume 70% of the view height.
                //Leaving 30% for the transcript. 
                var playerHeight = (windowHeight * 0.95) * 0.7; //This is the height we want for player, 70% of the available height.
                var playerWidth = playerHeight / 1.7778; //That makes this the desired player width.
                //Therefore our desired height is playerHeight x 2 for the transcript.
                var desiredHeight = (windowHeight * 0.95); //this is our desired height, the full availabe height.

                //Now, that we have calculated this, we have to consider the case of where the desired width exceeds parent width.
                var correctPadding;
                if (playerWidth > parentWidth) {
                    //In this case, we are much taller than we are wide.
                    //So, now, we are going to work our way to a height instead of starting with the height.
                    playerWidth = parentWidth; //Player width will be parentWidth.
                    playerHeight = parentWidth * 1.7778; //This is now the player height. 
                    //We still want our desired heigh tto be what is available up until a point.
                    //At some point, we want to shrink the transcript too because it starts to look really odd.
                    //We therefore state arbitrarily that we want the transcript to be about 40% the size of the player.
                    desiredHeight = playerHeight + (playerHeight * 0.333);
                    correctPadding = (desiredHeight / parentWidth) * 100;
                }
                else {
                    //And that's it.  We just calculate padding off of that.  We have to apply it to the parent width
                    //because padding will be based on that, not the set divelement width.
                    correctPadding = (desiredHeight / parentWidth) * 100;
                }

                //If the netoutcome of this is a width that is to small for the transcript, we will force the video into transcriptless mode.
                if (playerWidth <= 200 || desiredHeight <= 550) {
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    divElement.setAttribute('style', '');
                    divElement.style.width = playerWidth + "px";
                    divElement.style.paddingTop = correctPadding + "%";
                    divElement.style.height = 0;
                }
            }
        }
    }
    catch (ex) {
        console.log(ex);
    }

}

//TO DO: Bring up to code.
function cmpl_4x3Resize(width, divElement, parentWidth) {
    //Wide view breakpoint.
    var useParentHeight = divElement.classList.contains('cmpl_useparentcontainerheight');
    var windowHeight = window.innerHeight;
    var consumeHeight = 0.84; //Default amount of height we will consume on viewport.
    if (useParentHeight) {
        windowHeight = divElement.parentElement.clientHeight;
        consumeHeight = 0.98; //When using parent element will want to consume most of its height.
    }
    var forceFillContainer = divElement.classList.contains('cmpl_forcefillcontainer'); //If true, that means we do not adjust height based on width.
    try {
        if (divElement.classList.contains('cmpl_no_transcript')) {
            //No transcript
            divElement.setAttribute('style', '');
            divElement.style.paddingTop = "75%";
            divElement.style.width = "100%";
            divElement.style.height = 0;
            //If there is not enough height to match the width, we shrink width till there is.
            if (parentWidth * 0.75 > (windowHeight * consumeHeight) && !forceFillContainer) {
                divElement.setAttribute('style', '');
                var newWidth = (windowHeight * consumeHeight) / 0.75;
                var newHeight = newWidth * 0.75;
                divElement.setAttribute('style', 'width:' + newWidth + 'px; padding-top:unset !important; height:' + newHeight + 'px !important;');
            }

            //Now that we have done the above, we want to know if we could unforce transcriptless.
            var portraitSampleplayerHeight = (windowHeight * consumeHeight) * .5; //This is the height we want at least
            var portraitsampleplayerWidth = portraitSampleplayerHeight / 0.75; //That makes this the desired player width.
            var portraitSampledesiredHeight = (windowHeight * consumeHeight); //this is our desired height, the full availabe height.
            if (portraitsampleplayerWidth > parentWidth) {
                portraitsampleplayerWidth = parentWidth; //Player width will be parentWidth.
                portraitSampleplayerHeight = portraitsampleplayerWidth * 0.75;
                portraitSampledesiredHeight = portraitSampleplayerHeight * 2 < 580 ? 580 : portraitSampleplayerHeight * 2 > (windowHeight * consumeHeight) ? (windowHeight * consumeHeight) : portraitSampleplayerHeight * 2;
            }
            var landscapeSampleplayerHeight = (windowHeight * consumeHeight); //This is the height we have available.
            //So, we calculate the new width and shrink the player to fit.
            var landscapeSampleplayerWidth = landscapeSampleplayerHeight / 0.525;

            if (
                (parentWidth >= 1024 && (windowHeight * consumeHeight) > 0.525 * parentWidth)  //Could be wide view
                ||
                (portraitsampleplayerWidth >= 290 && (portraitSampledesiredHeight >= 580 || forceFillContainer)) //minimum width we allow
                ||
                (landscapeSampleplayerHeight > 300 && landscapeSampleplayerWidth >= 1024 && parentWidth >= 1024)
            ) {
                var iframe = divElement.querySelector('iframe');
                if (useTranscript.has(iframe.getAttribute("data-uidvtwo"))) {
                    var attribute = iframe.getAttribute("data-uidvtwo");
                    cmpl_unforceTranscriptless_v2(divElement, useTranscript.get(attribute));
                }
                else {
                    cmpl_unforceTranscriptless_v2(divElement, false);
                }
            }
        }
        else {
            //Yes transcript.
            var windowHeight = window.innerHeight;
            //If the parent width is greater than our break point AND there will be enough height for wide mode meaning width won't be set less than break point..
            if (parentWidth >= 1024 && ((windowHeight * consumeHeight) > 0.525 * parentWidth || forceFillContainer)) {
                //For wide view, 4/3 comprises 70% of the space.  Formula is 4/3 + x/3 = dimension.  3 is fixed because height must be the same.
                //Therefore 4 is 70% of width.  This means total is 5.714/3 is our aspect ratio of wide view.
                //This makes desired height padding = 3/5.714 = 52.5%
                divElement.setAttribute('style', '');
                divElement.style.paddingTop = "52.5%";
                divElement.style.width = "100%";
                divElement.style.height = 0;
                //If there is not enough height to match the width, we shrink width till there is.
                if (parentWidth * 0.525 > (windowHeight * consumeHeight)) {
                    divElement.setAttribute('style', '');
                    var newWidth = (windowHeight * consumeHeight) / 0.525;
                    var newHeight = newWidth * 0.525;
                    divElement.setAttribute('style', 'width:' + newWidth + 'px; padding-top:unset !important; height:' + newHeight + 'px !important;');
                }
            }
            //This handles when we have width for wide view but not enough height for wide view straight up.
            else if (parentWidth >= 1024 && !forceFillContainer) {
                //In this case, the width is there, but not the height to compensate for player being as wide as parent.
                //We will then attempt to shrink.  If we shrink below 880, that means we are very wide but no height and so we will switch
                //to transcriptless.
                var playerHeight = (windowHeight * consumeHeight); //This is the height we have available.
                //So, we calculate the new width and shrink the player to fit.
                var playerWidth = playerHeight / 0.525;

                var correctPadding = (playerHeight / parentWidth) * 100;
                //If we don't have enough height to show transcript, we force transcriptless.
                if (playerHeight < 300 || playerWidth < 1024) {
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    divElement.setAttribute('style', '');
                    divElement.style.width = playerWidth + "px";
                    divElement.style.paddingTop = correctPadding + "%";
                    divElement.style.height = 0;
                }

            }
            else if (forceFillContainer) //Force fill on portrait.
            {
                if (parentWidth < 290) {
                    //force transcriptless.
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    //This means we are going to forcefill in portrait mode, meaning we fill the width and show transcript at the bottom no matter how much height we got to show it.
                    divElement.setAttribute('style', '');
                    divElement.style.width = parentWidth + "px";
                    //desired height in this case is just double the player height.
                    var forcePortraitDesiredHeight = (parentWidth * 0.75) + (parentWidth * 0.75 * 0.66);
                    divElement.style.paddingTop = ((forcePortraitDesiredHeight / parentWidth) * 100) + "%";
                    divElement.style.height = 0;
                }
            }
            //This handles when we do not have the width for wide view and so must go portrait.
            else {
                //Calculate up to 84% height.
                //While in portrait, we set a benchmark for 16x9 player that we want the player to consume 50% of the view height.
                //Leaving 50% for the transcript. 
                var playerHeight = (windowHeight * consumeHeight) * 0.5; //This is the height we want for player, 1/2 of the available height.
                var playerWidth = playerHeight / 0.75; //That makes this the desired player width.
                //Therefore our desired height is playerHeight x 2 for the transcript.
                var desiredHeight = (windowHeight * consumeHeight); //this is our desired height, the full availabe height.

                //Now, that we have calculated this, we have to consider the case of where the desired width exceeds parent width.
                var correctPadding;
                if (playerWidth > parentWidth) {
                    //In this case, we are much taller than we are wide.
                    //So, now, we are going to work our way to a height instead of starting with the height.
                    playerWidth = parentWidth; //Player width will be parentWidth.
                    playerHeight = parentWidth * 0.75; //This is now the player height. 
                    //We still want our desired heigh tto be what is available up until a point.
                    //At some point, we want to shrink the transcript too because it starts to look really odd.
                    //This point is when the playerWidth is < 1/3 of the height (inverse of the wide view)
                    desiredHeight = playerHeight * 2 < 580 ? 580 : playerHeight * 2 > (windowHeight * consumeHeight) ? (windowHeight * consumeHeight) : playerHeight * 2;
                    correctPadding = (desiredHeight / parentWidth) * 100;
                }
                else {
                    //And that's it.  We just calculate padding off of that.  We have to apply it to the parent width
                    //because padding will be based on that, not the set divelement width.
                    correctPadding = (desiredHeight / parentWidth) * 100;
                }

                //If the netoutcome of this is a width that is to small for the transcript, we will force the video into transcriptless mode.
                if (playerWidth < 290 || desiredHeight < 580) {
                    var iframe = divElement.querySelector('iframe');
                    useTranscript.set(iframe.getAttribute("data-uidvtwo"), true);
                    cmpl_forceTranscriptless_v2(divElement);
                }
                else {
                    divElement.setAttribute('style', '');
                    divElement.style.width = playerWidth + "px";
                    divElement.style.paddingTop = correctPadding + "%";
                    divElement.style.height = 0;
                }


            }
        }
    }
    catch (ex) {
        console.log(ex);
    }

}


//we also set a timeout to provide visi check information regularly so we can catch iframes on load.

function cmpl_provideVisicheck_v2() {

    if (document.body.classList.contains('cmpl_embeds_v1')) {
        //If there is a setup indicator for V1, we don't apply the v2 resizing code.
        cmpl_unbind_v2();
        return;
    }

    //this function will keep iframes updated to let them know if they are visible or not.
    //this is needed for much functionality on the player such as knowing which video to full screen on orientation shift while on mobile.
    //determine if the iframe is visible.

    //if multiple iframes are visible, the last one in dom order is the winner for visible and orientation shifts.  The rest are considered not visible.
    var visiArray = new Array();

    try {
        var elements = document.getElementsByClassName("cmpl_iframe");
        for (var i = 0; i < elements.length; i++) {
            visiArray.push(cmpl_checkVisible_v2(elements[i]));
        }

        //Mark all as false now except the last one in the array.
        for (var z = 0; z < visiArray.length; z++) {
            if (visiArray[z] === true && z + 1 < visiArray.length && visiArray[z + 1] === true) {
                visiArray[z] = false;
            }
        }

        for (var p = 0; p < elements.length; p++) {
            var uid = elements[p].getAttribute("data-uidvtwo");

            try {
                elements[p].contentWindow.postMessage('{"method":"visicheck_v2","visible":"' + visiArray[p] + '"}', "*");
            }
            catch (ex) {
                //do nothing.
            }
        }
    }
    catch (ex) {
        //ignore errors.
    }

}



function cmpl_checkVisible_v2(elm) {

    //If there are multiple iframes visible, we only say that the bottom one is visible in the dom order.
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};

var cmpl_embed_js_loaded = true;