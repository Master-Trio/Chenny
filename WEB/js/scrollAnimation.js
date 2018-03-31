/*
	Um Animationen nach dem Scrollen zu ermöglichen, muss der viewportchecker angewendet werden.
	Da dieser jedoch im Google Chrome Browser nicht funktioniert, muss abgefragt werden, um welchen Browser es sich handelt.
	Danach können entsprechende Maßnahmen in Form von, nicht einbeziehen des viewportcheckers bei Chrome.
*/

var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

// Dies ist die Variable, die abcheckt, ob es sich um den Google Chrome Browser handelt.
var isItChrome = false;

// In Opera 15+, the true version is after "OPR/" 
if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
    // Die Variable wird auf true gesetzt
    isItChrome = true;

    // Dieser Teil vom Code bewirkt sofortiges Anzeigen des Animationsbildes auf mobilen Geräten
    var width = 0;
    width = window.innerWidth;
    if (width < 1100) {
        console.log(width);
        document.getElementById('animation').style.visibility = "visible";
        document.getElementById('animation').style.height = "auto";
        document.getElementById('animation').style.marginTop = "63px";
        document.getElementById('animation').style.marginBottom = "-580px";
        document.getElementById('1').style.visibility = "hidden";
        document.getElementById('1').style.height = "0";
    }

}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";

    // Da Safari Probleme mit der Animation hat, erhält es standardmäßig das Animationsbild
    var width = 0;
    window.onload = function () {
        document.getElementById('animation').style.visibility = "visible";
        document.getElementById('animation').style.height = "auto";
        document.getElementById('animation').style.marginTop = "63px";
        document.getElementById('animation').style.marginBottom = "-580px";
        document.getElementById('1').style.visibility = "hidden";
        document.getElementById('1').style.height = "0";
    }
    window.onresize = function () {
        document.getElementById('animation').style.visibility = "visible";
        document.getElementById('animation').style.height = "auto";
        document.getElementById('animation').style.marginTop = "63px";
        document.getElementById('animation').style.marginBottom = "-580px";

        document.getElementById('1').style.visibility = "hidden";
        document.getElementById('1').style.height = "0";
    }

    // Dieser Teil vom Code bewirkt sofortiges Anzeigen des Animationsbildes auf mobilen Geräten
    function firstSmall() {
        document.getElementById('animation').style.visibility = "visible";
        document.getElementById('animation').style.height = "auto";
        document.getElementById('animation').style.marginTop = "63px";
        document.getElementById('animation').style.marginBottom = "-580px";

        document.getElementById('1').style.visibility = "hidden";
        document.getElementById('1').style.height = "0";
    }

    firstSmall();

    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);

}
// In most other browsers, "name/version" is at the end of userAgent 
else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
    (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
    }
}
// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
    fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
    fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt('' + fullVersion, 10);
if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
}

// --ANIMATIONEN--

window.onload = function () {
    if (isItChrome == false) { // Wenn es sich nicht um den Chrome Browser handelt
	// Überschriftsanimation
        jQuery(document).ready(function () {
            jQuery('.ueber').addClass("hidden").viewportChecker({
                classToAdd: 'visible animated flipInX', // Hier können Klassen bei einem SICHTBAREN Element hinzugefügt werden
                offset: 50
            });
        });
	// Bildanimation
        jQuery(document).ready(function () {
            jQuery('.round').addClass("hidden").viewportChecker({
                classToAdd: 'visible animated zoomIn', // Hier können Klassen bei einem SICHTBAREN Element hinzugefügt werden
                offset: 50
            });
        });
    }
}
