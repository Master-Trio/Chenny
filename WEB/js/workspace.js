// Dies sind die Variablen für die Höhe und Breite des Canvas
let cw;
let ch;
// Multiplikator für Canvasgröße
let screenSize = 1;
// Hier wird sowohl die Höhe, als auch die Breite von Canvas festgelegt
function ausrichtung() {
    var quer = true;

    // -- FENSTERBREITE -- 
    // nötig zur Abfrage der Fensterbreite
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

    switch (true) {
        case (x > 500 && x < 600):
            screenSize = 0.5;
            break;
        case (x > 600 && x < 700):
            screenSize = 0.6;
            break;
        case (x > 700 && x < 800):
            screenSize = 0.7;
            break;
        case (x > 800 && x < 900):
            screenSize = 0.8;
            break;
        case (x > 900 && x < 1000):
            screenSize = 0.9;
            break;
        case (x > 1000 && x < 1100):
            screenSize = 1;
            break;
        case (x > 1100 && x < 1200):
            screenSize = 1.1;
            break;
        case (x > 1200 && x < 1300):
            screenSize = 1.2;
            break;
        case (x > 1300 && x < 1400):
            screenSize = 1.3;
            break;
        case (x > 1400 && x < 1500):
            screenSize = 1.4;
            break;
        case (x > 1500 && x < 1600):
            screenSize = 1.5;
            break;
        case (x > 1600 && x < 1700):
            screenSize = 1.6;
            break;
        case (x > 1700):
            screenSize = 1.7;
            break;
    }

    // -- FENSTERBREITE-ENDE --

    if (quer == false) {
        // sowohl die Breite, als auch die Höhe werden mit einem Multiplikator versehen
        cw = 500 * screenSize;
        ch = 707.5 * screenSize;
    } else {
        cw = 707.5 * screenSize;
        ch = 500 * screenSize;
    }
}

// Die Funktionen werden bei Veränderung der Fenstergröße ausgeführt
window.onresize = function () {
    ausrichtung();
}

function setup() {
    ausrichtung();
    var canvas = createCanvas(cw, ch);
    
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
}

function draw() {
    background(200);
    drawGrid();
}

function windowResized() {
    resizeCanvas(cw, ch);
}

function drawGrid() {
    line(0, ch/2, cw, ch/2);
    line(cw/2, 0, cw/2, ch)
}