var jsCardCount = document.createElement("div");
jsCardCount.id = "card-count";
jsCardCount.style.textAlign = "left";
jsCardCount.style.display = "none";
jsCardCount.style.paddingLeft = "8px";
jsCardCount.style.paddingTop = "4px";

jsCardCount.innerHTML = `
<div style="color:#2196f3; display:inline-block;" id="newCard">1</div>
<div style="color:#ea2322; display:inline-block;" id="learnCard">2</div>
<div style="color:#4caf50; display:inline-block;" id="reviewCard">3</div>
`;

var jsShowAnswerButton = document.createElement("footer");
jsShowAnswerButton.innerHTML = '<div type="button" id="showAns" onclick="showAnswer()" class="show-ans-button" style="display: none;">Show Answer</div>';

var UA = navigator.userAgent;

var isMobile = /Android/i.test(UA);
var isAndroidWebview = /wv/i.test(UA);

if (isMobile && isAndroidWebview) {
    if (showJsAddonButton) {
        document.body.insertBefore(jsCardCount, document.body.firstChild);
        document.body.insertBefore(jsShowAnswerButton, document.body.lastChild);

        document.getElementById("card-count").style.display = "table-cell";
        document.getElementById("showAns").style.display = "flex"; 

        document.getElementById("newCard").innerText = AnkiDroidJS.ankiGetNewCardCount();
        document.getElementById("learnCard").innerText = AnkiDroidJS.ankiGetLrnCardCount();
        document.getElementById("reviewCard").innerText = AnkiDroidJS.ankiGetRevCardCount();
    }
}