/* Klassenvariablen */
var anzahlEntitaeten = 0; //speichert die Anzahl der ausgewählten Entitäten
var entitaetenNamen; //speichert als Array die Namen der Entitäten
var anzahlAttribute; //speichert als Array die Anzahl der Attribute pro Entität 
var attributWerteNamen; //speichert als Array die Attributnamen 
var attributWertePK; //speichert als Array, ob ein Attribut ein PK ist
var entitaetStelle = 1; //diese Variable wird benötigt, um später die IDs der Attributs-Textfelder und Checkboxen zu vergeben. Dient als Art Gruppierung
var auswahl = false; //Variable um zu überprüfen ob eine Entität ausgewählt wurde

/* Diese Methode wird aufgerufen, wenn ein Entitätsbutton geklickt wurde 
 * Sie erzeugt die Textfelder, welche zur Einagbe der Namen benötigt werden
 * @param value des Buttons
 */
function names(anzahl) {
    auswahl = true;
    anzahlEntitaeten = anzahl;
    entitaetenNamen = new Array();
    document.getElementById("namensfelder").innerHTML = ""; //Löscht den Inhalt des DIVs. Wird benötigt damit Textfelder bei neuem Buttonclick neu erzeugt werden

    var ausgabe = 1; //Wird für das Label des Textfeldes benötigt

    if (anzahl % 2 == 0) { //prüft ob der Parameter gerade ist
        //Die for-Schleife läuft bis zur Hälfte der Anzahl, da immer 2 Textfelder mit einem Durchlauf erzeugt werden
        for (var i = 0; i < (anzahl / 2); i++) {
            document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   " + ausgabe + ". Entität: <input id='feld" + ausgabe + "' type='text'></div><div class='col'>   " + (ausgabe = ausgabe + 1) + ". Entität: <input id='feld" + ausgabe + "' type='text'></div></div><br>";
            ausgabe++;
        }
    } else {
        /*Die for-Schleife läuft bis zur Hälfte der Anzahl -1, da Doppel-Textfelder nur bis zur größten geraden Zahl läuft und nach der Schleife noch ein extra Feld angehängt wird*/
        for (var i = 0; i < ((anzahl / 2) - 1); i++) {
            document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   " + ausgabe + ". Entität: <input id='feld" + ausgabe + "' type='text'></div><div class='col'>   " + (ausgabe = ausgabe + 1) + ". Entität: <input id='feld" + ausgabe + "' type='text'></div></div><br>";
            ausgabe++;
        }
        //Extra-Textfeld
        document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   " + ausgabe + ". Entität: <input id='feld" + ausgabe + "' type='text'></div><div class='col'>&nbsp;</div></div>";
    }
}


/* Diese Methode wird aufgerufen, wenn der 'Weiter' Button von Schitt 1 gedrückt wurde
 * Sie überprüft die Werte der Textfelder auf doppelte oder fehlende Einträge und speichert diese, wenn alles korrekt ist, in das Array für die Entitätennamen 
 */
function namenSpeichern() {
    var fehler = false; //Variable ob ein Fehler bei den Namen existiert
    entitaetenNamen = new Array(); //neues Array angelegt

    //Diese for-Schleife schreibt die Namen in das Array 
    for (var i = 0; i < anzahlEntitaeten; i++) {
        //Diese if-Abfrage prüft, ob das Feld nicht leer gelassen wurde
        if (!(document.getElementById("feld" + (i + 1)).value == "" || document.getElementById("feld" + (i + 1)).value == null)) {
            //Diese if-Abfrage ruft die Methode namenPruefen auf mit dem Eingabewert als Parameter
            if (namenPruefen(document.getElementById("feld" + (i + 1)).value)) {
                //Doppelter Eintrag gefunden und entsprechende Fehlermeldung ausgeben
                document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Benutze keine doppelten Einträge!</p>";
                entitaetenNamen = new Array(); //Array neu initialiseren 
                fehler = true; //Fehlervariable auf true setzten, damit Schritt 2 nicht angezeigt wird
                break;
            } else { //Alle Werte der Textfelder sind korrekt
                document.getElementById("fehlermeldung").innerHTML = ""; //Löschen der vielleicht bestehenden Fehlereldung, und Korrektur vorgenommen wurde
                entitaetenNamen[i] = document.getElementById("feld" + (i + 1)).value; //Hineinschreiben der Werte in das Array
            }
        } else { //wenn das Feld leer gelassen wurde, entsprechende Fehlermeldung ausgeben
            document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Es wurden nicht alle Felder ausgefüllt!</p>";
            fehler = true; //Fehlervariable auf true setzten, damit Schritt 2 nicht angezeigt wird
            break;
        }
    }
    //Wenn die Fehlervariable weiterhin, wie bei der Initialisierung auf false ist, kann Schritt 2 angezeigt werden
    if (!fehler && auswahl) {
        attributes();
    }
}

/* Diese Methode wird von der namenSpeichern-Methode aufgerufen
 * Sie prüft auf doppelte Einträge
 * @param Wert des mitgegebenen Textfeldes
 * @return Name existiert bereits
 */
function namenPruefen(wert) {
    //Die Schleife läuft das bisher erstelle Array mit den Namen durch
    for (var i = 0; i < entitaetenNamen.length; i++) {
        //prütft ob der Wert schon vorhanden ist
        if (entitaetenNamen[i] == wert) {
            return true;
        }
    }
    return false;
}


/* Diese Methode wird aufgerufen, wenn alle Entitätennamen korrekt sind
 * Sie erstellt Schritt 2
 */
function attributes() {
    var a = 0; //Dieses Attribut wird benötigt um die IDs zu erstellen
    document.getElementById("attribute").innerHTML = ""; //Löscht den Inhalt des DIVs. Wird benötigt damit es überschrieben wird
    //Erzeugt die einzelnen Rows um die Anzahl der Attribute auszuwählen
    for (var i = 0; i < entitaetenNamen.length; i++) {
<<<<<<< HEAD
        document.getElementById("attribute").innerHTML += "<div class='row'><div class='col'>&nbsp;</div><div class='col'>" + entitaetenNamen[i] + "</div><div class='col'><img class='pfeil' src='IMG/pfeil.png'></div><div class='col'><div style='margin-top: -10px;' class='form-group'><select class='form-control' id='sel" + String(a) + "' onchange='dyn(this, plural" + i + ");'><option>1</option><option>2</option><option>3</option><option>4</option><option>0</option></select></div></div><div class='col' id='plural" + i + "'>Attribut</div><div class='col'>&nbsp;</div></div><br>";
=======
        document.getElementById("attribute").innerHTML += "<div class='row'><div class='col'>&nbsp;</div><div style='width: 100px; word-wrap: break-word;' class='col'>" + entitaetenNamen[i] + "</div><div class='col'><img class='pfeil' src='IMG/pfeil.png'></div><div class='col'><div style='margin-top: -10px;' class='form-group'><select class='form-control attributAuswahl' id='sel" + String(a) + "' onchange='dyn(this, plural" + i + ");'><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div><div class='col' id='plural" + i + "'>Attribut</div><div class='col'>&nbsp;</div></div><br>";
>>>>>>> 5b14d8cd1ca63e4351fda93ff313efaedaa67d7b
        a++;
    }
    document.getElementById("schritt2").style.visibility = "visible"; //Nach der Generierung, wird das DIV angezeigt
}

/* Diese Methode wird bei der Erzeugung der Dropdown-Felder für die Attribute aufgerufen
 * Sie schreibt je nach Anzahl der ausgewählten Attribute, die Ein bzw. Mehrzahl des Wortes
 */
function dyn(drop, schrift) {
    if (drop.value > 1) {
        schrift.innerHTML = "Attribute";
    } else if (drop.value == 1) {
        schrift.innerHTML = "Attribut";
    }
}

/* Diese Methode wird aufgerufen, wenn der 'Weiter'-Button von Schritt 2 gedrückt wurde
 * Sie ruft Methoden auf, um die Attribute zu speichern und die nächsten Steps für für Schritt 3 einzuleiten 
 */
function weiterAttribute() {
    speicherAnzahlAttribute(); //speichert 
    document.getElementById("schritt3").style.visibility = "visible"; //zeigt das DIV von Schritt 3 an
    writeTable(); //erzeugt die Tabelle für Schritt 3
}

/* Diese Methode von der weiterAttribute-Methode aufgerufen
 * Sie speichert die Anzahl der Attribute in das vorgesehene Array
 */
function speicherAnzahlAttribute() {
    anzahlAttribute = new Array(entitaetenNamen.length);
    for (var i = 0; i < anzahlAttribute.length; i++) {
        anzahlAttribute[i] = document.getElementById("sel" + i).value;
    }
}


/* Diese Methode wird von der weiterAttribute-Methode aufgerufen
 * Sie erzeugt die Tabelle wo die Entitäten aufgelistet werden mit einer Anzahl an Textfelder je nach dem wie viele Attribute pro Entität ausgewählt wurden. Es wird
 * auch eine Spalte erzeugt, wo man auswählen kann ob es sich um einen PK handelt
 */
function writeTable() {
    //Erzeugung des Grundgerüsts
    var anfang = "<table class='table tabOwn' id='tabelle'><thead><tr><th scope='col'>Entität</th><th scope='col'>Attributnamen</th><th scope='col'>Primary-Key</th></tr></thead><tbody id='tabellenbody'>";

    var content = ""; //Inhalt der Tabelle

    //Diese for-Schleife läuft durch das Array der Entitäten
    for (var i = 0; i < entitaetenNamen.length; i++) {
        var textFelder = erzeugeTextfelder(i); //hier wird die Methode aufgerufen um die Textfelder zu erzeugen
        var PKFelder = erzeugePKFelder(i); //hier wird die Methode aufgerufen, die die Checkboxen erstellt

        //Hinzufügen der Felder und Boxen 
        content += "<tr><th scope='row'>" + entitaetenNamen[i] + "</th><td>" + textFelder + "</td><td>" + PKFelder + "</td></tr>";
    }

    var ende = "</tbody></table>"; //Ende der Tabelle
    var gesamt = anfang + content + ende; //Gesamtstring der Tabelle

    document.getElementById("tabDiv").innerHTML = gesamt; //Tabelle wird ins DIV geschrieben
}

/* Diese Methode wird von der writeTable-Methode aufgerufen
 * Sie erzeugt die Anzahl der Textfelder pro Entität
 * @param   Aktueller Wert der for-Schleife von der writeTable-Methode. Wird benötigt, um die Anzahl der Attribute pro aktueller Entität herauszufinden
 * @return  Gesamtstring mit allen Textfeldern
 */
function erzeugeTextfelder(j) {
    var str = "";

    //Diese for-Schleife läuft das Array mit der Anzahl der Attribute durch, an der Stelle die im Parameter übergeben wird
    for (var i = 0; i < anzahlAttribute[j]; i++) {
        str += "<input id='textfeld" + entitaetStelle + (i + 1) + "' type='text' style='margin-bottom: 10px;'><br>";
    }
    entitaetStelle++;

    return str;
}

/* Diese Methode wird von der writeTable-Methode aufgerufen
 * Sie erzeugt die Anzahl der Checkboxen pro Entität
 * @param   Aktueller Wert der for-Schleife von der writeTable-Methode. Wird benötigt, um die Anzahl der Attribute pro aktueller Entität herauszufinden
 * @return  Gesamtstring mit allen Checkboxen
 */
function erzeugePKFelder(j) {
    var str = "";

    //Diese for-Schleife läuft das Array mit der Anzahl der Attribute durch, an der Stelle die im Parameter übergeben wird
    for (var i = 0; i < anzahlAttribute[j]; i++) {
        //Abfrage, ob nur ein Attrbut bei einer Entität gespeichert ist
        if (anzahlAttribute[j] == 1) {
            //Checkbox vorselekttiert und nicht mehr änderbar
            str = "<input id='checkbox" + (entitaetStelle - 1) + (i + 1) + "' type='checkbox' style='margin-bottom: 10px;' checked='checked' onclick='return false;'><br>";
        } else {
            str += "<input id='checkbox" + (entitaetStelle - 1) + (i + 1) + "' type='checkbox' style='margin-bottom: 10px;'><br>";
        }
    }
    return str;
}


/* Diese Methode wird aufgerufen, wenn der 'Weiter' Button bei Schritt 3 gedrückt wurde
 * Sie speichert nach einer Überprüfung auf Korrektheit die Attributnamen und die Werte der Checkboxen in die entsprechenden Arrays
 * Weiters zeigt sie Schritt 4 am Ende an und ruft die entsprechenden Methoden auf 
 */
function weiterAttributWerte() {
    var zaehlen = 0; //Diese Variable zählt mit, wie viele PKs ausgewählt sind. Wird für die Fehlermeldung benötigt
    attributWerteNamen = new Array();
    attributWertePK = new Array();
    var fehler = false; //Wird auf true gesetzt, wenn ein Fehler vorhanden ist. Nur wenn es auf false bleibt, wird Schritt 4 angezeigt

    var platz = 1; //Variable die Benötigt wird um die Gruppierung herauszufinden

    //Diese for-Schleife läuft das Array der Attributanzahlen durch  
    for (var a = 0; a < anzahlAttribute.length; a++) {
        //Diese for-Schleife läuft den Arrayeintrag durch
        if (anzahlAttribute[a] == 0) {
            zaehlen++;
        }
        for (var i = 0; i < anzahlAttribute[a]; i++) {

            //Überprüfung ob ein Textfeld leer gelassen wurde
            if (document.getElementById("textfeld" + platz + (i + 1)).value == "") {
                document.getElementById("fehlermeldung3").innerHTML = "";
                document.getElementById("fehlermeldung3").innerHTML = "<p style='color: red;'>Es wurden nicht alle Felder ausgefüllt!</p>";
                fehler = true;
            } else {
                attributWerteNamen.push(document.getElementById("textfeld" + platz + (i + 1)).value);
            }

            if (document.getElementById("checkbox" + platz + (i + 1)).checked) {
                attributWertePK.push(document.getElementById("checkbox" + platz + (i + 1)).value);
                zaehlen++;

            } else {
                attributWertePK.push("off");
            }
        }
        platz++;
    }

    //Überprüfung, ob genug PKs ausgewählt wurden. Mindestens einer pro Entität
    if (zaehlen < entitaetenNamen.length) {
        document.getElementById("fehlermeldung3").innerHTML = "";
        document.getElementById("fehlermeldung3").innerHTML += "<p style='color: red;'>Es wurden nicht genug PKs ausgewählt!</p>";
        fehler = true;
    }

    //Ausgabe von Schritt 4, wenn keine Fehler bestehen
    if (!fehler) {
        document.getElementById("fehlermeldung3").innerHTML = "";
        document.getElementById("schritt4").style.visibility = "visible";
        erzeugeSchritt4();
    }
}



function erzeugeSchritt4() {
    createRow1();
    createRow2();
    createRow3();
}

function createRow1() {

    var dropLeft = drops("dropLeft");
    var dropRight = drops("dropRight");

    document.getElementById("rowEins").innerHTML = "<div class='row'><div class='col'>" + dropLeft + "</div><div class='col'><-- zu --></div><div class='col'>" + dropRight + "</div></div>";
}

function drops(where) {
    var str = "<div class='form-group' style='width: 250px;'><select id='" + where + "' class='form-control'>";
    for (var i = 0; i < entitaetenNamen.length; i++) {
        str += "<option>" + entitaetenNamen[i] + "</option>";
    }
    return str + "</select></div>";
}


function createRow2() {
    var beziehungen = "<div class='btn-group' role='group'><button type='button' class='btn btn-secondary' style='width: 80px;' onclick='art(\"ist\");'>ist-ein</button><button type='button' class='btn btn-secondary' style='width: 80px;' onclick='art(\"eins\");'>1:1</button><button type='button' class='btn btn-secondary' style='width: 80px;' onclick='art(\"n\");'>1:N</button><button type='button' class='btn btn-secondary' style='width: 80px;' onclick='secondDrop();'>M:N</button></div>";

    document.getElementById("rowZwei").innerHTML = "<div class='row'><div class='col'>&nbsp;</div><div class='col'>" + beziehungen + "</div><div class='col' id='sec'></div></div>";
}


function secondDrop() {
    beziehungsArt = "m";
    document.getElementById("sec").innerHTML = drops("second");
}

var beziehungsArt = "";

function art(typ) {
    document.getElementById("sec").innerHTML = "";
    beziehungsArt = typ;
}

function createRow3() {

    var nameUndWeak = "<input type='text' id='beziehungsName' placeholder='Name der Beziehung' style='margin-right: 30px;'><input id='weak' type='checkbox'><label style='margin-left: 3px;'>Weak</label>";
    document.getElementById("rowDrei").innerHTML = "<div class='row'><div class='col'>&nbsp;</div><div class='col'>" + nameUndWeak + "</div><div class='col'>&nbsp;</div></div>";
}

var beziehungen = new Array();

function writeBeziehung() {
    if (beziehungsArt != "" && document.getElementById("beziehungsName").value != "") {
        if (document.getElementById("weak").checked) {
            document.getElementById("weak").value = "on";
        } else {
            document.getElementById("weak").value = "off";
        }
        try {
            beziehungen.push(document.getElementById("dropLeft").value + "|" + document.getElementById("beziehungsName").value + "|" + document.getElementById("dropRight").value + "|" + beziehungsArt + "|" + document.getElementById("weak").value + "|" + document.getElementById("second").value);
        } catch (err) {
            beziehungen.push(document.getElementById("dropLeft").value + "|" + document.getElementById("beziehungsName").value + "|" + document.getElementById("dropRight").value + "|" + beziehungsArt + "|" + document.getElementById("weak").value + "|no");
        }

        document.getElementById("fehlermeldung4").innerHTML = "";
        updateListe();
    } else {
        document.getElementById("fehlermeldung4").innerHTML = "<p style='color: red;'>Es wurden nicht alle benötigten Daten angegeben!</p>";
    }
}

function updateListe() {
    var inhaltListe = "";

    for (var i = 0; i < beziehungen.length; i++) {
        var arr = beziehungen[i].split("|", 6);
        var bez = "";
        var wk = "";
        switch (arr[3]) {
            case "ist":
                bez = "ist-ein";
                arr[1] = "---";
                break;
            case "eins":
                bez = "1:1";
                break;
            case "n":
                bez = "1:N";
                break;
            case "m":
                bez = "M:N";
                break;
        }

        if (arr[4] == "on") {
            wk = "<img src='IMG/check.png' width='25' height='auto' alt='yes'>";
        } else {
            wk = "<img src='IMG/X.png' width='20' height='auto' alt='no'>";
        }
        if (bez == "M:N") {
            inhaltListe += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + arr[0] + "</td><td>" + arr[1] + "</td><td>" + arr[2] + "</td><td>" + bez + " mit " + arr[5] + "</td><td>" + wk + "</td><td><button type='button' class='btn weiter2' onclick=''>Löschen</button></td></tr>";
        } else {
            inhaltListe += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + arr[0] + "</td><td>" + arr[1] + "</td><td>" + arr[2] + "</td><td>" + bez + "</td><td>" + wk + "</td><td><button type='button' class='btn weiter2' onclick=''>Löschen</button></td></tr>";
        }
    }


    document.getElementById("auflistungBeziehungen").innerHTML = "<table class='table' style='text-align: center;'><thead class='thead-dark'><tr><th scope='col'>#</th><th scope='col'>1. Entität</th><th scope='col'>Name</th><th scope='col'>2. Entität</th><th scope='col'>Art</th><th scope='col'>Weak</th><th scope='col'>Löschen</th></tr></thead><tbody style='color: #eeeeee;'>" + inhaltListe + "</tbody></table>";
}
