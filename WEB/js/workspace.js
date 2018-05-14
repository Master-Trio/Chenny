// -----------------
// -- CANVASGRÖßE --
// -----------------

// Dies sind die Variablen für die Höhe und Breite des Canvas
var cw;
var ch;
// Multiplikator für Canvasgröße
var screenSize = 1;

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
        case (x > 200 && x < 300):
            screenSize = 0.3;
            break;
        case (x > 300 && x < 400):
            screenSize = 0.4;
            break;
        case (x > 400 && x < 500):
            screenSize = 0.5;
            break;
        case (x > 500 && x < 600):
            screenSize = 0.6;
            break;
        case (x > 600 && x < 700):
            screenSize = 0.7;
            break;
        case (x > 700 && x < 800):
            screenSize = 0.8;
            break;
        case (x > 800 && x < 900):
            screenSize = 0.9;
            break;
        case (x > 900 && x < 1000):
            screenSize = 1.0;
            break;
        case (x > 1000 && x < 1100):
            screenSize = 1.1;
            break;
        case (x > 1100 && x < 1200):
            screenSize = 1.2;
            break;
        case (x > 1200 && x < 1300):
            screenSize = 1.3;
            break;
        case (x > 1300 && x < 1400):
            screenSize = 1.4;
            break;
        case (x > 1400 && x < 1500):
            screenSize = 1.5;
            break;
        case (x > 1500 && x < 1600):
            screenSize = 1.6;
            break;
        case (x > 1600 && x < 1700):
            screenSize = 1.7;
            break;
        case (x > 1700):
            screenSize = 1.8;
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
    // Ausrichtung und Canvasgröße
    ausrichtung();

    // Verschiedene Größen werden mit der Fenstergröße multipliziert
    entWidth = 100 * screenSize;
    ellipseWidth = 80 * screenSize;
    attTextSize = 12 * screenSize;
    attAbstand = 30 * screenSize;
    entTextSize = 20 * screenSize;
}

// ------------
// -- SETUP --
// ------------

/*
    Hier werden 'organisatorische' Dinge verfasst, wie beispielsweise das Erstellen des Canvas oder von Objekt-Instanzen.
    Dies ist standardmäßig die erste aufgerufene Funktion und sollte auch nach Programmstart nicht mehr aufgerufen werden.
*/
function setup() {

    // Damit das Canvas bereits zu Anfang in richtiger Größe angezeigt wird, wird die Methode auch hier aufgerufen
    ausrichtung();

    // Auch dies soll bereits zu Anfang richtiggestellt sein
    // Verschiedene Größen werden mit der Fenstergröße multipliziert
    entWidth = 100 * screenSize;
    ellipseWidth = 80 * screenSize;
    attTextSize = 12 * screenSize;
    attAbstand = 30 * screenSize;
    entTextSize = 20 * screenSize;

    // Hier wird das Canvas, mithilfe variabler Parameter erstellt
    var canvas = createCanvas(cw, ch);

    // Hiermit wird das Canvas in ein div gesetzt
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    //Test Einträge
    ent[0] = new Entity("12ufgh7778sbhjbjdf", "");
    ent[1] = new Entity("Swag", "");

    att[0] = new Attribut("1juju", "");
    att[1] = new Attribut("Sbj", "");
    att[2] = new Attribut("Pe77bjjbkbjkkbjter", "");
    att[3] = new Attribut("S77bjjbkbjkkbjebi", "");

    //entAtt[0] = new EntAtt(100, 100, ent[0]);
    //entAtt[0] = new EntAtt(100, 100, ent[0], att[0]);
    //entAtt[0] = new EntAtt(100, 100, ent[0], att[0], att[1]);
    //entAtt[0] = new EntAtt(100, 100, ent[0], att[0], att[1], att[2]);
    entAtt[0] = new EntAtt(cw/2,ch/2, ent[0], att[0], att[1], att[2], att[3]);

}

// ----------
// -- DRAW --
// ----------

/*
    Diese Funktion, ist die, an zweiter Stelle aufgerufene Funktion.
    Sie wird ständig automatisch wiederholt; die Wiederholungsrate kann mit 'frameRate()' gesteuert werden.
    Diese Funktion sollte niemals händisch aufgerufen werden.
*/
function draw() {
    background(200);
    //drawGrid();

    //Zeichnet alle Objekte mit deren Attributen
    for (let i = 0; i < entAtt.length; i++) {
        entAtt[i].show();
    }
}

// Diese Funktion wird bei Verändern der Fenstergröße aufgerufen.
function windowResized() {
    // Canvasgröße wird verändert
    resizeCanvas(cw, ch);
	entAtt[0].move(cw/2,ch/2);
}

// Darstellung der vertikalen und horrizontalen Hilfslinien
function drawGrid() {
    line(0, ch / 2, cw, ch / 2);
    line(cw / 2, 0, cw / 2, ch)
}

//Array für die Entitäten mit deren Attributen
let entAtt = [];
//Array für die Entitäten 
let ent = [];
//Array für die Attribute
let att = [];
//Breite einer Entität
let entWidth = 100 * screenSize;
//TextSize in einer Entität
let entTextSize = 20 * screenSize;
//Breite eines Attributs
let ellipseWidth = 80 * screenSize;
//TextSize in einem Attribut
let attTextSize = 12 * screenSize;
//Abstand zwischen einer Entität und einem Attribut
let attAbstand = 30 * screenSize;

// -------------
// -- KLASSEN --
// -------------

// Entität mit den Attributen zusammengesetzt
class EntAtt {

    // Konstruktor mit standardmäßig 4 Attributen
    constructor(x, y, ent_Obj, attr_Obj1, attr_Obj2, attr_Obj3, attr_Obj4) {
        this.x = x;
        this.y = y;
        this.ent_Obj = ent_Obj;
        this.attr_Obj1 = attr_Obj1;
        this.attr_Obj2 = attr_Obj2;
        this.attr_Obj3 = attr_Obj3;
        this.attr_Obj4 = attr_Obj4;
    }
	move(x,y){
		this.x = x;
		this.y = y;
	}
    // Methode um es darzustellen
    show() {
        // Darstellung in einem Rechteck
        var x1 = this.x - ellipseWidth / 2;
        var y1 = this.y - ellipseWidth / 4 - attAbstand;
        var x2 = this.x + entWidth + ellipseWidth / 2;
        var y2 = this.y + entWidth / 2 + attAbstand + ellipseWidth / 4;
        line(x1, y1, x2, y1);
        line(x2, y1, x2, y2);
        line(x2, y2, x1, y2);
        line(x1, y2, x1, y1);
        rect(this.x, this.y, entWidth, entWidth / 2);

        // Check ob der Entitätenname zu lang ist; falls ja, dann macht es einen Zeilenumbruch
        if (this.ent_Obj.entName.length > 8) {
            var oben = this.ent_Obj.entName.substr(0, 8);
            var unten = this.ent_Obj.entName.substring(8, this.ent_Obj.entName.length);

            textSize(attTextSize + 7 * screenSize);
            text(oben, this.x + entWidth / 10, this.y + attTextSize + entWidth / 10);
            text(unten, this.x + entWidth / 10, this.y + attTextSize + entWidth / 3.5);
        } else {
            textSize(entTextSize);
            text(this.ent_Obj.entName, this.x + entWidth / 10, this.y + entWidth / 3);
        }

        //***********
        // 1 Attribut 
        //***********

        if (this.attr_Obj1 != null && this.attr_Obj2 == null && this.attr_Obj3 == null && this.attr_Obj4 == null) {
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);

            //Check ob der Attributname zu lang ist, falls ja dann macht es einen Zeilenumbruch
            if (this.attr_Obj1.attName.length > 10) {
                var oben = this.attr_Obj1.attName.substring(0, 10);
                var unten = this.attr_Obj1.attName.substring(10, this.attr_Obj1.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3, this.y - attAbstand - ellipseWidth / 20);
                text(unten, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize - ellipseWidth / 20);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj1.attName, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize / 3);
            }

            line(this.x + entWidth / 4, this.y, this.x, this.y - attAbstand + ellipseWidth / 4);
        }

        //***********
        // 2 Attribute 
        //***********

        if (this.attr_Obj1 != null && this.attr_Obj2 != null && this.attr_Obj3 == null && this.attr_Obj4 == null) {
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);

            //Check ob der Attributname zu lang ist, falls ja dann macht es einen Zeilenumbruch
            if (this.attr_Obj1.attName.length > 10) {
                var oben = this.attr_Obj1.attName.substring(0, 10);
                var unten = this.attr_Obj1.attName.substring(10, this.attr_Obj1.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3, this.y - attAbstand - ellipseWidth / 20);
                text(unten, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize - ellipseWidth / 20);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj1.attName, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize / 3);
            }
            if (this.attr_Obj2.attName.length > 10) {
                var oben = this.attr_Obj2.attName.substring(0, 10);
                var unten = this.attr_Obj2.attName.substring(10, this.attr_Obj2.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand - ellipseWidth / 20);
                text(unten, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand + attTextSize - ellipseWidth / 20);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj2.attName, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand + attTextSize / 3);
            }

            line(this.x + entWidth / 4, this.y, this.x, this.y - attAbstand + ellipseWidth / 4);
            line(this.x + entWidth / 2 + entWidth / 4, this.y, this.x + entWidth, this.y - attAbstand + ellipseWidth / 4);
        }

        //***********
        // 3 Attribute 
        //***********

        if (this.attr_Obj1 != null && this.attr_Obj2 != null && this.attr_Obj3 != null && this.attr_Obj4 == null) {
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x, this.y + entWidth / 2 + attAbstand, ellipseWidth, ellipseWidth / 2);

            //Check ob der Attributname zu lang ist, falls ja dann macht es einen Zeilenumbruch
            if (this.attr_Obj1.attName.length > 10) {
                var oben = this.attr_Obj1.attName.substring(0, 10);
                var unten = this.attr_Obj1.attName.substring(10, this.attr_Obj1.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3, this.y - attAbstand - ellipseWidth / 20);
                text(unten, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize - ellipseWidth / 20);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj1.attName, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize / 3);
            }
            if (this.attr_Obj2.attName.length > 10) {
                var oben = this.attr_Obj2.attName.substring(0, 10);
                var unten = this.attr_Obj2.attName.substring(10, this.attr_Obj2.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand - ellipseWidth / 20);
                text(unten, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand + attTextSize - ellipseWidth / 20);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj2.attName, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand + attTextSize / 3);
            }
            if (this.attr_Obj3.attName.length > 10) {
                var oben = this.attr_Obj3.attName.substring(0, 10);
                var unten = this.attr_Obj3.attName.substring(10, this.attr_Obj3.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3, this.y + ellipseWidth + attTextSize / 3 - ellipseWidth / 12);
                text(unten, this.x - ellipseWidth / 3, this.y + ellipseWidth + attTextSize / 3 + ellipseWidth / 15);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj2.attName, this.x - ellipseWidth / 3, this.y + ellipseWidth + attTextSize / 3);
            }

            line(this.x + entWidth / 4, this.y, this.x, this.y - attAbstand + ellipseWidth / 4);
            line(this.x + entWidth / 2 + entWidth / 4, this.y, this.x + entWidth, this.y - attAbstand + ellipseWidth / 4);
            line(this.x + entWidth / 4, this.y + entWidth / 2, this.x, this.y + entWidth / 2 + attAbstand / 3);

        }

        //***********
        // 4 Attribute 
        //***********

        if (this.attr_Obj1 != null && this.attr_Obj2 != null && this.attr_Obj3 != null && this.attr_Obj4 != null) {
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x, this.y + entWidth / 2 + attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y + entWidth / 2 + attAbstand, ellipseWidth, ellipseWidth / 2);

            if (this.attr_Obj1.attName.length > 10) {
                var oben = this.attr_Obj1.attName.substring(0, 10);
                var unten = this.attr_Obj1.attName.substring(10, this.attr_Obj1.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3, this.y - attAbstand - ellipseWidth / 20);
                text(unten, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize - ellipseWidth / 20);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj1.attName, this.x - ellipseWidth / 3, this.y - attAbstand + attTextSize / 3);
            }
            if (this.attr_Obj2.attName.length > 10) {
                var oben = this.attr_Obj2.attName.substring(0, 10);
                var unten = this.attr_Obj2.attName.substring(10, this.attr_Obj2.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand - ellipseWidth / 20);
                text(unten, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand + attTextSize - ellipseWidth / 20);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj2.attName, this.x - ellipseWidth / 3 + entWidth, this.y - attAbstand + attTextSize / 3);
            }
            if (this.attr_Obj3.attName.length > 10) {
                var oben = this.attr_Obj3.attName.substring(0, 10);
                var unten = this.attr_Obj3.attName.substring(10, this.attr_Obj3.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3, this.y + ellipseWidth + attTextSize / 3 - ellipseWidth / 12);
                text(unten, this.x - ellipseWidth / 3, this.y + ellipseWidth + attTextSize / 3 + ellipseWidth / 15);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj3.attName, this.x - ellipseWidth / 3, this.y + ellipseWidth + attTextSize / 3);
            }
            if (this.attr_Obj4.attName.length > 10) {
                var oben = this.attr_Obj4.attName.substring(0, 10);
                var unten = this.attr_Obj4.attName.substring(10, this.attr_Obj4.attName.length);
                textSize(attTextSize * 0.8);
                text(oben, this.x - ellipseWidth / 3 + entWidth, this.y + ellipseWidth + attTextSize / 3 - ellipseWidth / 12);
                text(unten, this.x - ellipseWidth / 3 + entWidth, this.y + ellipseWidth + attTextSize / 3 + ellipseWidth / 15);
            } else {
                textSize(attTextSize);
                text(this.attr_Obj4.attName, this.x - ellipseWidth / 3 + entWidth, this.y + ellipseWidth + attTextSize / 3);
            }

            line(this.x + entWidth / 4, this.y, this.x, this.y - attAbstand + ellipseWidth / 4);
            line(this.x + entWidth / 2 + entWidth / 4, this.y, this.x + entWidth, this.y - attAbstand + ellipseWidth / 4);
            line(this.x + entWidth / 4, this.y + entWidth / 2, this.x, this.y + entWidth / 2 + attAbstand / 3);
            line(this.x + entWidth / 2 + entWidth / 4, this.y + entWidth / 2, this.x + entWidth, this.y + entWidth / 2 + attAbstand / 3);
        }
    }
}

// Entitätsklasse
class Entity {
    // Im Konstruktor sind der Entitätenname und der Beziehungstyp zu finden
    constructor(entName, bezTyp) {
        this.entName = entName;
        this.bezTyp = bezTyp;
    }
}

// Attributsklasse
class Attribut {
    // Parameter: Attributname und Attributart
    constructor(attName, pk_Art) {
        this.attName = attName;
        this.pk_Art = pk_Art;
    }
}
