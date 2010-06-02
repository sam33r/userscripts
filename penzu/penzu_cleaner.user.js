// ==UserScript==
// @name           Penzu Cleaner
// @description    Cleans up the Penzu writing pad
// @include        https://penzu.com/p
// @include        https://penzu.com/pad
// @author         Sameer Ahuja
// ==/UserScript==

var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'http://github.com/sam33r/PenzuCleaner/raw/master/penzu.css	';
cssNode.media = 'screen';
cssNode.title = 'dynamicLoadedSheet';
document.getElementsByTagName("head")[0].appendChild(cssNode);