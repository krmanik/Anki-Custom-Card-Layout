function AnkiJSFunction(data) {

    var jsonData = JSON.parse(data);

    var selectedText = jsonData['selectedText'];

    var newJsonData = {};

    newJsonData["changedText"] = "<sub>"+ selectedText +"</sub>";

    // changeType options - replace, append, clear, default
    newJsonData["changeType"] = "replace";

    return JSON.stringify(newJsonData);
}