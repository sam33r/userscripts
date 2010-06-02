// ==UserScript==
// @name           RTM Tweaks
// @description    Some Tweaks to the RTM Interface
// @include        http://www.rememberthemilk.com/home/*       
// @author         Sameer Ahuja
// ==/UserScript==

var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://sameer.dreamhosters.com/files/rtm.css';
cssNode.media = 'screen';
cssNode.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);

// need to figure this out later
//var footerText = document.createElement('div');
//footerText.innerHTML = "hello";
//document.getElementsByTagName("body")[0].appendChild(footerText);