// ==UserScript==
// @name         Gainz4Dayz
// @namespace    http://sobieski.codes
// @version      0.3
// @description  Don't make the mistake of attacking #Ohadik
// @author       ProbsJustin#0001
// @match        *.torn.com/loader.php*
// @updateURL    https://raw.githubusercontent.com/SobieskiCodes/scripts/main/Gainz4Dayz.js
// @connect      api.torn.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

if(!document.location.href.includes("attackLog")){
    location.replace("https://www.torn.com/gym.php");
}
