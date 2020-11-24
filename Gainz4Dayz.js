// ==UserScript==
// @name         Gainz4Dayz
// @namespace    http://sobieski.codes
// @version      0.3
// @description  Don't make the mistake of attacking
// @author       ProbsJustin#0001
// @match        *.torn.com/loader.php*
// @updateURL    https://gist.githubusercontent.com/SobieskiCodes/f32bc09d38c2757606dc7db027363b2a/raw/278ca1baaadb72d7a24f0dd801546825e5cbb862/gainzallday.js
// @connect      api.torn.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

if(!document.location.href.includes("attackLog")){
    location.replace("https://www.torn.com/gym.php");
}
