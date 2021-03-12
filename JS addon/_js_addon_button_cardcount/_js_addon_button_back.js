
var jsAllAnswerButton = document.createElement("footer");
jsAllAnswerButton.innerHTML = `
    <div id="answerButtons" class="ans-buttons-bottom" style="display:none;">
        <div id="answerButton1" onclick="buttonAnswerEase1()" class="ans-buttons ans1"><time id="time1"
                style="font-size: 0.8rem;">
            </time>Again</div>
        <div id="answerButton2" onclick="buttonAnswerEase2()" class="ans-buttons ans2"><time id="time2"
                style="font-size: 0.8rem;">
            </time>Hard</div>
        <div id="answerButton3" onclick="buttonAnswerEase3()" class="ans-buttons ans3"><time id="time3"
                style="font-size: 0.8rem;">
            </time>Good</div>
        <div id="answerButton4" onclick="buttonAnswerEase4()" class="ans-buttons ans4"><time id="time4"
                style="font-size: 0.8rem;">
            </time>Easy</div>
    </div>
    `;

var UA = navigator.userAgent;

var isMobile = /Android/i.test(UA);
var isAndroidWebview = /wv/i.test(UA);

if (isMobile && isAndroidWebview) {
    if (showJsAddonButton) {
        document.body.insertBefore(jsCardCount, document.body.firstChild);
        document.body.insertBefore(jsAllAnswerButton, document.body.lastChild);

        if (document.getElementById("showAns") != null) {
            document.getElementById("showAns").style.display = "none";
        }

        document.getElementById("card-count").style.display = "table-cell";

        document.getElementById("newCard").innerText = AnkiDroidJS.ankiGetNewCardCount();
        document.getElementById("learnCard").innerText = AnkiDroidJS.ankiGetLrnCardCount();
        document.getElementById("reviewCard").innerText = AnkiDroidJS.ankiGetRevCardCount();

        document.getElementById("answerButtons").style.display = "flex";

        // Hide button when next time above button is empty
        if (!AnkiDroidJS.ankiGetNextTime1()) {
            document.getElementById("answerButton1").style.display = "none";
        } else {
            document.getElementById("time1").innerHTML = AnkiDroidJS.ankiGetNextTime1() + "<br>";
        }

        if (!AnkiDroidJS.ankiGetNextTime2()) {
            document.getElementById("answerButton2").style.display = "none";
        } else {
            document.getElementById("time2").innerHTML = AnkiDroidJS.ankiGetNextTime2() + "<br>";
        }

        if (!AnkiDroidJS.ankiGetNextTime3()) {
            document.getElementById("answerButton3").style.display = "none";
        } else {
            document.getElementById("time3").innerHTML = AnkiDroidJS.ankiGetNextTime3() + "<br>";
        }

        if (!AnkiDroidJS.ankiGetNextTime4()) {
            document.getElementById("answerButton4").style.display = "none";
        } else {
            document.getElementById("time4").innerHTML = AnkiDroidJS.ankiGetNextTime4() + "<br>";
        }
    }
}