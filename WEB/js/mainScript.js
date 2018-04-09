function names (anzahl) {
    
    document.getElementById("test").innerHTML = "";
    for (var i = 1; i < (parseInt(anzahl)+1); i++) {
        document.getElementById("test").innerHTML += "   "+i+". Name: <input type='text'>";
        if (i == 5) {
            document.getElementById("test").innerHTML += "<br><br>";
        }
    }
}