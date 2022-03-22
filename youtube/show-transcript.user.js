// ==UserScript==
// @name        Show YouTube Transcripts by default.
// @namespace   sa
// @match       https://www.youtube.com/watch
// @grant       none
// @version     1.0
// @author      Sameer Ahuja
// @description On pageload, click the sequence of buttons necessary to load the video transcript.
// ==/UserScript==

setTimeout(() => document.querySelector('[aria-label="More actions"]').click(), 1000)
// TODO: This is brittle and will fail when YouTube makes any changes to the order of the list items.
setTimeout(() => document.querySelectorAll('tp-yt-paper-listbox ytd-menu-service-item-renderer')[1].click(), 2000)
