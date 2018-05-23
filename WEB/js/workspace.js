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

// ------------
// -- SETUP --
// ------------

/*
    Hier werden 'organisatorische' Dinge verfasst, wie beispielsweise das Erstellen des Canvas oder von Objekt-Instanzen.
    Dies ist standardmäßig die erste aufgerufene Funktion und sollte auch nach Programmstart nicht mehr aufgerufen werden.
*/
function setup() {

    // ------------
    // -- COOKIE --
    // ------------

    //Auslesen Entitäten mit Attributen
    //Zu verwenden: entitatenMitAttributen
    var cookie = document.cookie;
    var cookieArr = cookie.split(":");

    var ents = cookieArr[0].split("|");
    ents.pop();

    var atts = cookieArr[1].split("|");

    var entitatenMitAttributen = new Array();
    for (var i = 0; i < ents.length; i++) {
        entitatenMitAttributen.push(ents[i]);
        entitatenMitAttributen.push(atts[i]);
    }

    //Auslesen Beziehungen
    //Zu Verwenden: bezis
    var bezis = new Array();
    var zweiteAuslese = cookieArr[2].split("|");

    var auf = new Array();
    for (var i = 0; i < zweiteAuslese.length; i++) {
        var elems = zweiteAuslese[i].split("/");
        if (elems.length > 5) { //m-n
            auf.push(elems[0]);
            auf.push(elems[1]);
            auf.push(elems[2]);
            auf.push(elems[3]);
            auf.push(elems[5]);
        } else {
            auf.push(elems[0]);
            auf.push(elems[3]);
            auf.push(elems[1]);
            auf.push(elems[2]);
            auf.push(elems[4]);
        }
        bezis.push(auf);
        auf = new Array();
    }

    console.log(entitatenMitAttributen);
    console.log(bezis);

    // Damit das Canvas bereits zu Anfang in richtiger Größe angezeigt wird, wird die Methode auch hier aufgerufen
    ausrichtung();

    // Auch dies soll bereits zu Anfang richtiggestellt sein
    // Verschiedene Größen werden mit der Fenstergröße multipliziert
    entWidth = 100 / 2 * screenSize;
    ellipseWidth = 80 / 2 * screenSize;
    attTextSize = 12 / 2 * screenSize;
    attAbstand = 30 / 2 * screenSize;
    entTextSize = 20 / 2 * screenSize;

    // Hier wird das Canvas, mithilfe variabler Parameter erstellt
    var canvas = createCanvas(cw, ch);

    // AUFRUF-COOKIEDATEN
    cookieDaten(entitatenMitAttributen, bezis);

    // Hiermit wird das Canvas in ein div gesetzt
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    //Test Einträge
    // ent[0] = new Entity("12ufgh7778sbhjbjdf");
    // ent[1] = new Entity("Swag");

    //att[0] = new Attribut("1juju", "");
    //att[1] = new Attribut("Sbj", "");
    //att[2] = new Attribut("Pe77bjjbkbjkkbjter", "");
    //att[3] = new Attribut("S77bjjbkbjkkbjebi", "");

    //entAtt[0] = new EntAtt(100, 100, ent[0]);
    //entAtt[0] = new EntAtt(100, 100, ent[0], att[0]);
    //entAtt[0] = new EntAtt(100, 100, ent[0], att[0], att[1]);
    //entAtt[0] = new EntAtt(100, 100, ent[0], att[0], att[1], att[2]);
    //entAtt[0] = new EntAtt(cw / 4, ch / 4, ent[0], att[0], att[1], att[2], att[4]);
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
    background('white');
    //drawGrid();
    //Zeichnet alle Objekte mit deren Attributen
    for (i = 0; i < entAtt.length; i++) {
        entAtt[i].show();
    }
}

/*
    Diese Funktion exportiert das gesamte Canvas als PNG
*/
function exportCanvas() {
    var img = canvas.toDataURL("image/png");
    document.write('<img src="' + img + '"/>');
}

// Diese Funktion wird bei Verändern der Fenstergröße aufgerufen.
function windowResized() {
    // Ausrichtung und Canvasgröße
    ausrichtung();

    // Verschiedene Größen werden mit der Fenstergröße multipliziert
    entWidth = 100 / 2 * screenSize;
    ellipseWidth = 80 / 2 * screenSize;
    attTextSize = 12 / 2 * screenSize;
    attAbstand = 30 / 2 * screenSize;
    entTextSize = 20 / 2 * screenSize;

    // Canvasgröße wird verändert
    resizeCanvas(cw, ch);

    // Hier wird die Position der Entitäten angepasst
    for (var i = 0; i < entAtt.length; i++) {

        if (screenSize < 1.3) {
            if (i > 4) {
                myY[i] = ch / 2 + ch / 4;
                myX[i] = cw / 10 + (i - 5) * 100;
            } else {
                myY[i] = ch / 5;
                myX[i] = cw / 10 + i * 100;
            }
        } else {
            if (i > 4) {
                myY[i] = ch / 2 + ch / 4;
                myX[i] = cw / 10 + (i - 5) * 180;
            } else {
                myY[i] = ch / 5;
                myX[i] = cw / 10 + i * 180;
            }
        }

        entAtt[i].move(myX[i], myY[i]);
    }

}

// Darstellung der vertikalen und horrizontalen Hilfslinien
function drawGrid() {
    line(0, ch / 2, cw, ch / 2);
    line(cw / 2, 0, cw / 2, ch);
}

/*
    OBJEKTARRAYS
*/
// Array für die Entitäten mit deren Attributen
// Hier werden die Attribute zu ihren Entitäten zugeordnet. Außerdem wird eine Position festgelegt
let entAtt = [];
// Array für die Entitäten 
// Hier werden alle Entitäten, die es gibt, der Reihe nach abgespeichert
let ent = [];
// Array für die Attribute
// Hier werden alle Attribute, die es gibt, der Reihe nach abgespeichert
let att = [];

//Breite einer Entität
let entWidth = 100 / 2 * screenSize;
//TextSize in einer Entität
let entTextSize = 20 / 2 * screenSize;
//Breite eines Attributs
let ellipseWidth = 80 / 2 * screenSize;
//TextSize in einem Attribut
let attTextSize = 12 / 2 * screenSize;
//Abstand zwischen einer Entität und einem Attribut
let attAbstand = 30 / 2 * screenSize;
//Relevante Variablen zur Berechnung von RealX und RealY
let x1 = this.x - ellipseWidth / 2;
let y1 = this.y - ellipseWidth / 4 - attAbstand;
let x2 = this.x + entWidth + ellipseWidth / 2;
let y2 = this.y + entWidth / 2 + attAbstand + ellipseWidth / 4;

// Arrays zur Positionierung von Entitäten
let myX = [];
let myY = [];
// -----------------
// -- COOKIEDATEN --
// -----------------

/*
    Mit dieser Funktion werden die Cookie-Daten in Verwendung gebracht.
    Die eingelesenen Entitäten werden im ent[] gespeichert.
    Selbiges geschieht mit den Attributen.
*/
function cookieDaten(myEnts, myBezis) {
    var ourEnts = myEnts;
    var ourBezis = myBezis;

    // Anzahl der Beistriche, welche die Attribute in einem Arrayelement trennen.
    var beistrichAnzahl;
    // Mithilfe dieser Variable werden die Entitäten im Entity-Objekt-Array an die richtige Stelle gebracht
    var entitaetenNummer = 0;
    // Mithilfe dieser Variable werden die Attribute im Attribut-Objekt-Array an die richtige Stelle gebracht
    var attributNummer = 0;

    // Anzahl aller Attribute
    var anzahlAtts;

    for (var i = 0; i < ourEnts.length; i++) {
        // Da nur jedes zweite Array-Element eine Entität ist, ist diese Abfrage nötig
        if (i % 2 == 0) {
            // Diese Abfrage gilt nur für die erste Entität
            if (i == 0) {
                // Diese Zeile fixt einen Fehler in Chrome
                ourEnts[i] = ourEnts[i].substring(ourEnts[i].indexOf(";") + 1);
                // Die erste Entität wird gespeichert
                ent[i] = new Entity(ourEnts[i]);
                // Dies ist die, oben deklarierte, Beistrichanzahl
                beistrichAnzahl = ourEnts[i + 1].split(",").length - 1;
                var m = ourEnts[i + 1];
                for (var j = 0; j <= beistrichAnzahl; j++) {
                    // Das Attribut, welches sich vor dem ersten Beistrich befindet, wird gespeichert
                    att[j] = new Attribut(m.split(',', 1));
                    // Hiermit wird das bereits gespeicherte Attribut aus dem Arrayelement gelöscht, samt nachfolgendem Beistrich
                    m = m.substring(m.indexOf(",") + 1);
                    // Um auch das letzte Attribut mitzunehmen, wird diese if-Abfrage benötigt, da vor diesem kein Beistrich mehr steht
                    if (j == beistrichAnzahl) {
                        att[j] = new Attribut(m, "");
                    }

                    attributNummer++;
                }


                // -- Positionierung --
                myX[i - entitaetenNummer] = cw / 10 + entitaetenNummer * cw / 5 + 1 * screenSize;

                myY[i - entitaetenNummer] = ch / 5;


                // -- Entitäten + Attribute --
                // Hier werden die Entitäten mit den dazugehörigen Attributen zusammengeführt
                // Je nachdem, wie viele Attribute es gab, wird der jeweilige Konstruktor ausgewählt.
                if (beistrichAnzahl == 0) {
                    entAtt[i] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i], att[0]);
                    anzahlAtts = 1;
                } else if (beistrichAnzahl == 1) {
                    entAtt[i] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i], att[0], att[1]);
                    anzahlAtts = 2;
                } else if (beistrichAnzahl == 2) {
                    entAtt[i] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i], att[0], att[1], att[2]);
                    anzahlAtts = 3;
                } else if (beistrichAnzahl == 3) {
                    entAtt[i] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i], att[0], att[1], att[2], att[3]);
                    anzahlAtts = 4;
                }

            } else {
                // Dies ist die, oben deklarierte, Beistrichanzahl
                beistrichAnzahl = ourEnts[i + 1].split(",").length - 1;
                // Hier werden die restlichen Entitäten generiert
                ent[i - entitaetenNummer] = new Entity(ourEnts[i]);
                var n = ourEnts[i + 1];

                for (var d = 0; d <= beistrichAnzahl; d++) {
                    // Das Attribut, welches sich vor dem ersten Beistrich befindet, wird gespeichert
                    att[attributNummer] = new Attribut(n.split(',', 1));
                    // Hiermit wird das bereits gespeicherte Attribut aus dem Arrayelement gelöscht, samt nachfolgendem Beistrich
                    n = n.substring(n.indexOf(",") + 1);
                    // Um auch das letzte Attribut mitzunehmen, wird diese if-Abfrage benötigt, da vor diesem kein Beistruch mehr steht
                    if (d == beistrichAnzahl) {
                        att[attributNummer] = new Attribut(n, "");
                    }

                    attributNummer++;
                }


                // -- Positionierung --
                /*
                    Hier findet die Positionierung statt.
                    Dieser Prozess wird in der Funktion WindowResized wiederholt, 
                    dort wird jedoch statt 'i-entitaetenNummer' einfach 'i' eingesetzt.
                */
                if (screenSize < 1.3) {
                    if ((i - entitaetenNummer) > 4) {
                        myY[i - entitaetenNummer] = ch / 2 + ch / 4;
                        myX[i - entitaetenNummer] = cw / 10 + (entitaetenNummer - 5) * 100;
                    } else {
                        myY[i - entitaetenNummer] = ch / 5;
                        myX[i - entitaetenNummer] = cw / 10 + entitaetenNummer * 100;
                    }
                } else {
                    if ((i - entitaetenNummer) > 4) {
                        myY[i - entitaetenNummer] = ch / 2 + ch / 4;
                        myX[i - entitaetenNummer] = cw / 10 + (entitaetenNummer - 5) * 180;
                    } else {
                        myY[i - entitaetenNummer] = ch / 5;
                        myX[i - entitaetenNummer] = cw / 10 + entitaetenNummer * 180;
                    }
                }

                // -- Entitäten + Attribute --
                // Hier werden die Entitäten mit den dazugehörigen Attributen zusammengeführt
                // Je nachdem, wie viele Attribute es gab, wird der jeweilige Konstruktor ausgewählt.
                if (beistrichAnzahl == 0) {
                    entAtt[i - entitaetenNummer] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i - entitaetenNummer], att[anzahlAtts]);
                    anzahlAtts += 1;
                } else if (beistrichAnzahl == 1) {
                    entAtt[i - entitaetenNummer] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i - entitaetenNummer], att[anzahlAtts], att[anzahlAtts + 1]);
                    anzahlAtts += 2;
                } else if (beistrichAnzahl == 2) {
                    entAtt[i - entitaetenNummer] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i - entitaetenNummer], att[anzahlAtts], att[anzahlAtts + 1], att[anzahlAtts + 2]);
                    anzahlAtts += 3;
                } else if (beistrichAnzahl == 3) {
                    entAtt[i - entitaetenNummer] = new EntAtt(myX[i - entitaetenNummer], myY[i - entitaetenNummer], ent[i - entitaetenNummer], att[anzahlAtts], att[anzahlAtts + 1], att[anzahlAtts + 2], att[anzahlAtts + 3]);
                    anzahlAtts += 4;
                }
            }

            // Um eine gute Nummerierung einzuhalten, wird diese Variable jedes mal bei Erfüllung der Bedingung erhöht
            entitaetenNummer++;
        }
    }

    console.log(entAtt);
    console.log(ent);
    console.log(att);
}


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
    //Liefert die X Koordinate vom Zentrum der Fläche
    getRealX() {
        return x1 + (x2 - x1) / 2;
    }
    //Liefert die Y Koordinate vom Zentrum der Fläche
    getRealY() {
        return y1 + (y2 - y1) / 2;
    }
    //Verschiebt das Objekt an eine bestimmte Stelle
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    // Methode um es darzustellen
    show() {
        fill(color('white'));
        // Darstellung in einem Rechteck
        /*
        x1 = this.x - ellipseWidth / 2;
        y1 = this.y - ellipseWidth / 4 - attAbstand;
        x2 = this.x + entWidth + ellipseWidth / 2;
        y2 = this.y + entWidth / 2 + attAbstand + ellipseWidth / 4;
        line(x1, y1, x2, y1);
        line(x2, y1, x2, y2);
        line(x2, y2, x1, y2);
        line(x1, y2, x1, y1);
        */
        //Rechteck der Entität
        rect(this.x, this.y, entWidth, entWidth / 2);
        // Check ob der Entitätenname zu lang ist; falls ja, dann macht es einen Zeilenumbruch
        if (this.ent_Obj.entName.length > 8) {
            var oben = this.ent_Obj.entName.substr(0, 8);
            var unten = this.ent_Obj.entName.substring(8, this.ent_Obj.entName.length);
            fill(color('black'));
            textSize(attTextSize + 7 * screenSize);
            text(oben, this.x + entWidth / 10, this.y + attTextSize + entWidth / 10);
            text(unten, this.x + entWidth / 10, this.y + attTextSize + entWidth / 3.5);
        } else {
            fill(color('black'));
            textSize(entTextSize);
            text(this.ent_Obj.entName, this.x + entWidth / 10, this.y + entWidth / 3);
        }

        //***********
        // 1 Attribut 
        //***********

        if (this.attr_Obj1 != null && this.attr_Obj2 == null && this.attr_Obj3 == null && this.attr_Obj4 == null) {
            fill(color('white'));
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            fill(color('black'));
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
            fill(color('white'));
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            fill(color('black'));
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
            fill(color('white'));
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x, this.y + entWidth / 2 + attAbstand, ellipseWidth, ellipseWidth / 2);
            fill(color('black'));
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
            fill(color('white'));
            ellipse(this.x, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y - attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x, this.y + entWidth / 2 + attAbstand, ellipseWidth, ellipseWidth / 2);
            ellipse(this.x + entWidth, this.y + entWidth / 2 + attAbstand, ellipseWidth, ellipseWidth / 2);
            fill(color('black'));
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
    constructor(entName) {
        this.entName = entName;
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
