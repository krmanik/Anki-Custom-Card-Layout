function AnkiJSFunction(data) {
    var s = "";
    data = data.split(" ");
    for (i=0; i<data.length; i++) {
        s += "<li>" + data[i] + "</li>\n";
    }
    s = "<ul>" + s + "</ul>";

    return s;
}