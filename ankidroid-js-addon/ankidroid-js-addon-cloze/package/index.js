// data is in json format sent from AnkiDroid
function AnkiJSFunction(data) {

    var jsonData = JSON.parse(data);

    var selectedText = jsonData['selectedText'];

    var newJsonData = {};
    var fieldsData = {};
    if (jsonData['noteType'] == "ocloze-infi" && jsonData["fieldsCount"] == 26) {
        newJsonData["changedText"] = "";  // intentionally empty

        var list = selectedText.split("\n");

        var fullText = "";
        var len = list.length;
        var startField = 5;
        for (i = 0; i < len; i++) {
            var text = "";
            fullText += "<div>{{c21::" + list[i] + "}}</div>";
            for (j = 0; j < len; j++) {
                if (i == j) {
                    if (j > 0) {
                        text += "<div>" + list[j - 1] + "</div>";
                    }
                    text += "<div>{{c" + (j + 1) + "::" + list[j] + "}}</div>";
                } else {
                    text += "<div>...</div>";
                }
            }
            fieldsData[startField] = text;
            startField++;
        }
        fieldsData[25] = fullText;

        newJsonData["addToFields"] = fieldsData;
    }

    return JSON.stringify(newJsonData);
}