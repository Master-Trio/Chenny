var width = 0;
window.onload = function () {
    width = window.innerWidth;
    console.log('Dokument geladen');
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
window.onresize = function () {
    width = window.innerWidth;
    if (width < 1100) {
        console.log(width);
        document.getElementById('animation').style.visibility = "visible";
        document.getElementById('animation').style.height = "auto";
        document.getElementById('animation').style.marginTop = "63px";
        document.getElementById('animation').style.marginBottom = "-580px";

        document.getElementById('1').style.visibility = "hidden";
        document.getElementById('1').style.height = "0";
    } else {
        width = window.innerWidth;
        document.getElementById('animation').style.visibility = "hidden";
        document.getElementById('animation').style.height = "0";
        document.getElementById('animation').style.marginTop = "0";
        document.getElementById('animation').style.marginBottom = "0";
        console.log(width);
        document.getElementById('1').style.visibility = "visible";
        document.getElementById('1').style.height = "auto";
    }
}
