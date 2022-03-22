// ==UserScript==
// @name        Show YouTube Transcripts by default.
// @namespace   sa
// @match       http*://www.youtube.tld/watch?v=*
// @grant       none
// @run-at      document-idle
// @version     1.1
// @author      Sameer Ahuja
// @description On pageload, click the sequence of buttons necessary to load the video transcript.
// ==/UserScript==

// The delays are arbitrary to give YouTube enough time to load its resources.
setTimeout(() => document.querySelector('[aria-label="More actions"]').click(), 3000)
// TODO: This is brittle and will fail when YouTube makes any changes to the order of the list items.
setTimeout(() => document.querySelectorAll('tp-yt-paper-listbox ytd-menu-service-item-renderer')[1].click(), 4000)
