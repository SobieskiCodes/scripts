// ==UserScript==
// @name         Gainz4Dayz
// @namespace    http://sobieski.codes
// @version      0.4
// @description  Don't make the mistake of attacking
// @author       ProbsJustin#0001
// @match        *.torn.com/loader.php*
// @updateURL    https://raw.githubusercontent.com/SobieskiCodes/scripts/main/Gainz4Dayz.js
// @connect      api.torn.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

if(document.location.href.includes("sid=attack&user2ID=")){
    location.replace("https://www.torn.com/gym.php");
}
