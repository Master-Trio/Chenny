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
        var str = document.getElementById("feld" + (i + 1)).value;
        if (str.search(":") != -1) {
            document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Bitte keine Doppelpukte eingeben!</p>";
            fehler = true;
            break;
        }
        else if (str.search("/") != -1) {
            document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Bitte keine Schrägstriche eingeben!</p>";
            fehler = true;
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

        document.getElementById("attribute").innerHTML += "<div class='row'><div class='col'>&nbsp;</div><div style='width: 100px; word-wrap: break-word;' class='col'>" + entitaetenNamen[i] + "</div><div class='col'><img class='pfeil' src='IMG/pfeil.png'></div><div class='col'><div style='margin-top: -10px;' class='form-group'><select class='form-control attributAuswahl' id='sel" + String(a) + "' onchange='dyn(this, plural" + i + ");'><option>1</option><option>2</option><option>3</option><option>4</option><option>0</option></select></div></div><div class='col' id='plural" + i + "'>Attribut</div><div class='col'>&nbsp;</div></div><br>";
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
        content += "<tr><th scope='row' style='word-break: break-all;'>" + entitaetenNamen[i] + "</th><td>" + textFelder + "</td><td>" + PKFelder + "</td></tr>";
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

            //Überprüfung, ob ein Doppelpunkt eingegben wurde
            var str = document.getElementById("textfeld" + platz + (i + 1)).value;
            if (str.search(":") != -1) {
                document.getElementById("fehlermeldung3").innerHTML = "";
                document.getElementById("fehlermeldung3").innerHTML = "<p style='color: red;'>Bitte keine Doppelpunkte eingeben!</p>";
                fehler = true;
            }
            
            //Überprüfung, ob ein Schrägstrich eingegeben wurde
            if (str.search("/") != -1) {
                document.getElementById("fehlermeldung3").innerHTML = "";
                document.getElementById("fehlermeldung3").innerHTML = "<p style='color: red;'>Bitte keine Schrägstriche eingeben!</p>";
                fehler = true;
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

    //Überprüfung, ob keine doppelten Attributnamen vergeben wurden
    var pruefArr = pruefeDoppelteAttribute(attributWerteNamen);
    if (pruefArr.length < attributWerteNamen.length) {
        document.getElementById("fehlermeldung3").innerHTML = "<p style='color: red;'>Keine doppelten Einträge!</p>";
        fehler = true;
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

/*
 * Diese Methode prüft, ob ein doppelter Wert in einem Array vorhanden ist
 */
function pruefeDoppelteAttribute(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = {};

    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}


function erzeugeSchritt4() {
    mapEntitaetenMitAttributen();
    mapAttributeMitPK();
    createRow1();
    createRow2();
    createRow3();
}

var mappedEmitA = new Array();

function mapEntitaetenMitAttributen() {
    var arr = new Array();

    for (var i = 0; i < anzahlAttribute.length; i++) {
        for (var j = 0; j < anzahlAttribute[i]; j++) {
            arr.push(attributWerteNamen[j]);
        }
        for (var a = 0; a < anzahlAttribute[i]; a++) {
            attributWerteNamen.shift();
        }
        mappedEmitA.push(arr);
        arr = new Array();
    }
}

var mappedAmitPK = new Array();

function mapAttributeMitPK() {
    var arr = new Array();

    for (var i = 0; i < anzahlAttribute.length; i++) {
        for (var j = 0; j < anzahlAttribute[i]; j++) {
            arr.push(attributWertePK[j]);
        }
        for (var a = 0; a < anzahlAttribute[i]; a++) {
            attributWertePK.shift();
        }
        mappedAmitPK.push(arr);
        arr = new Array();
    }
}



function createRow1() {

    var dropLeft = drops("dropLeft");
    var dropRight = drops("dropRight");

    document.getElementById("rowEins").innerHTML = "<div class='row'><div class='col'>" + dropLeft + "</div><div class='col'><img src='IMG/zu.png' style='width: 40px; margin-bottom: 15px; margin-left: 10px; margin-right: 10px;'></div><div class='col'>" + dropRight + "</div></div>";
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
    document.getElementById("beziehungsName").value = "";
    document.getElementById("beziehungsName").disabled = false;
    document.getElementById("weak").disabled = false;
    if (entitaetenNamen.length < 3) {
        document.getElementById("fehlermeldung4").innerHTML = "<p style='color: red;'>Es wurden zu wenige Entitäten für eine M:N-Beziehung angegeben!</p>";
    } else {
        beziehungsArt = "m";
        document.getElementById("sec").innerHTML = drops("second");
    }
}

var beziehungsArt = "";

function art(typ) {
    if (typ == "ist") {
        document.getElementById("beziehungsName").value = "ist-ein";
        document.getElementById("beziehungsName").disabled = true;
        document.getElementById("weak").disabled = true;
    } else {
        document.getElementById("beziehungsName").value = "";
        document.getElementById("beziehungsName").disabled = false;
        document.getElementById("weak").disabled = false;
    }
    document.getElementById("sec").innerHTML = "";
    beziehungsArt = typ;
}

function createRow3() {

    var nameUndWeak = "<input type='text' id='beziehungsName' placeholder='Name der Beziehung' style='margin-right: 30px;'><input id='weak' type='checkbox'><label class='helleSchrift' style='margin-left: 3px;'>Weak</label>";
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

        var fehler = beziehungenPruefen(document.getElementById("dropLeft").value, document.getElementById("dropRight").value, beziehungsArt);
        try {
            if (!fehler) {
                beziehungen.push(document.getElementById("dropLeft").value + "|" + document.getElementById("beziehungsName").value + "|" + document.getElementById("dropRight").value + "|" + beziehungsArt + "|" + document.getElementById("weak").value + "|" + document.getElementById("second").value);
            }
        } catch (err) {
            if (!fehler) {
                beziehungen.push(document.getElementById("dropLeft").value + "|" + document.getElementById("beziehungsName").value + "|" + document.getElementById("dropRight").value + "|" + beziehungsArt + "|" + document.getElementById("weak").value);
            }
        }

        //prüfen auf doppelte Einträg
        var doppelt = pruefeDoppelteBeziehungen(document.getElementById("dropLeft").value, document.getElementById("dropRight").value, beziehungsArt);

        //prüfen auf Doppelpunkte
        var str = document.getElementById("beziehungsName").value;
        if (str.search(":") != -1) {
            document.getElementById("fehlermeldung4").innerHTML = "";
            document.getElementById("fehlermeldung4").innerHTML = "<p style='color: red;'>Bitte keine Doppelpunkte eingeben!</p>"
            doppelt = true;
        }
        
        //prüfen auf Schrägstrich
        if (str.search("/") != -1) {
            document.getElementById("fehlermeldung4").innerHTML = "";
            document.getElementById("fehlermeldung4").innerHTML = "<p style='color: red;'>Bitte keine Schrägstriche eingeben!</p>"
            doppelt = true;
        }

        if (!doppelt) {
            document.getElementById("fehlermeldung4").innerHTML = "";
            updateListe();
        } else {
            beziehungen.pop();
        }
    } else {
        document.getElementById("fehlermeldung4").innerHTML = "<p style='color: red;'>Es wurden nicht alle benötigten Daten angegeben!</p>";
    }
}


function pruefeDoppelteBeziehungen(e1, e2, type) {
    var arr = new Array();

    for (var i = 0; i < beziehungen.length; i++) {
        arr.push(beziehungen[i].split("|", 6));
    }

    var zaehlen = 0;
    for (var j = 0; j < arr.length; j++) {
        if (e1 == arr[j][0] && e2 == arr[j][2] && type == arr[j][3]) {
            zaehlen++;
        } else if (e1 == arr[j][2] && e2 == arr[j][0] && type == arr[j][3]) {
            zaehlen++;
        }
    }

    return (zaehlen > 1);
}

function updateListe() {
    var inhaltListe = "";
    var arr = new Array();

    if (beziehungen.length == 0) {
        document.getElementById("auflistungBeziehungen").innerHTML = "";
    }

    for (var i = 0; i < beziehungen.length; i++) {
        arr = beziehungen[i].split("|", 6);
        var bez = "";
        var wk = "";
        switch (arr[3]) {
            case "ist":
                bez = "ist-ein";
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
            inhaltListe += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + arr[0] + "</td><td>" + arr[1] + "</td><td>" + arr[2] + "</td><td>" + bez + " mit " + arr[5] + "</td><td>" + wk + "</td><td><button type='button' class='btn weiter2' onclick='delBeziehung(\"" + arr[0] + "\",\"" + arr[1] + "\",\"" + arr[2] + "\");'>Löschen</button></td></tr>";
        } else {
            inhaltListe += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + arr[0] + "</td><td>" + arr[1] + "</td><td>" + arr[2] + "</td><td>" + bez + "</td><td>" + wk + "</td><td><button type='button' class='btn weiter2' onclick='delBeziehung(\"" + arr[0] + "\",\"" + arr[1] + "\",\"" + arr[2] + "\");'>Löschen</button></td></tr>";
        }
        document.getElementById("auflistungBeziehungen").innerHTML = "<div class='wic myTable'><table class='table myTable' style='text-align: center;'><thead class='thead-dark'><tr><th scope='col'>#</th><th scope='col'>1. Entität</th><th scope='col'>Name</th><th scope='col'>2. Entität</th><th scope='col'>Art</th><th scope='col'>Weak</th><th scope='col'>Löschen</th></tr></thead><tbody style='color: #eeeeee;'>" + inhaltListe + "</tbody></table></div>";
    }
}

function beziehungenPruefen(e1, e2, typ) {
    if ((e1 == e2) && typ == "ist") {
        return true;
    }
    if (typ == "m" && (document.getElementById("second").value == e1 || document.getElementById("second").value == e2)) {
        return true;
    }
    return false;
}

function delBeziehung(e1, name, e2) {
    var stelle;
    for (var i = 0; i < beziehungen.length; i++) {
        var str = beziehungen[i].split("|", 6);
        if (str[0] == e1 && str[1] == name && str[2] == e2) {
            stelle = i;
            break;
        }
    }
    beziehungen.splice(stelle, 1);
    updateListe();
}


var format = "";

function createCookie() {

    var erzeuge = true;

    if (document.getElementById("hoch").value == "on") {
        erzeuge = true;
        document.getElementById("fehlermeldung4").innerHTML = "";
        format = "h";
    } else if (document.getElementById("quer").value == "on") {
        erzeuge = true;
        document.getElementById("fehlermeldung4").innerHTML = "";
        format = "q";
    } else {
        document.getElementById("fehlermeldung4").innerHTML = "<p style='color: red;'>Bitte wähle ein Bildformat aus!</p>";
        erzeuge = false;
    }

    if (erzeuge) {
        var zeile1 = "";
        for (var i = 0; i < entitaetenNamen.length; i++) {
            zeile1 += entitaetenNamen[i] + "|";
        }

        var weakArr = new Array();
        var arr = new Array();
        for (var x = 0; x < beziehungen.length; x++) {
            var strArr = beziehungen[x].split("|");
            if (strArr[4] == "on") {
                for (var i = 0; i < entitaetenNamen.length; i++) {
                    if (strArr[2] == entitaetenNamen[i]) {
                        arr.push("weak");
                    } else {
                        arr.push("x");
                    }
                }
                weakArr.push(arr);
                arr = new Array();
            }
        }

        try {
            for (var i = 0; i < weakArr.length; i++) {
                for (var j = 0; j < weakArr[i].length; j++) {
                    if (weakArr[i][j] == "weak") {
                        for (var o = 0; o < mappedEmitA[j].length; o++) {
                            if (mappedAmitPK[j][o] == "on") {
                                if (mappedEmitA[j][o].search("w") == -1) {
                                    mappedEmitA[j][o] += "w";
                                }
                            }
                        }
                    }
                }
            }
        } catch (err) {}
        zeile1Arr = [zeile1];



        var zeile2 = "";
        for (var j = 0; j < mappedEmitA.length; j++) {
            for (var a = 0; a < mappedEmitA[j].length; a++) {
                if (mappedAmitPK[j][a] == "on") {
                    zeile2 += "p" + mappedEmitA[j][a] + ",";
                } else {
                    zeile2 += mappedEmitA[j][a] + ",";
                }
            }
            zeile2 = zeile2.substr(0, zeile2.length - 1);
            zeile2 += "|";
        }
        zeile2 = zeile2.substr(0, zeile2.length - 1);
        zeile2Arr = [zeile2];

        var zeile3 = "";
        for (var i = 0; i < beziehungen.length; i++) {
            var bezStr = beziehungen[i].split("|");
            var weak = "";
            if (bezStr[4] == "on") {
                weak = "w";
            } else {
                weak = "#";
            }
            if (bezStr[3] != "m") {
                zeile3 += bezStr[0] + "/" + bezStr[2] + "/" + bezStr[1] + "/" + bezStr[3] + "/" + weak + "|";
            } else {
                zeile3 += bezStr[0] + "/" + bezStr[5] + "/" + bezStr[2] + "/" + bezStr[1] + "/" + bezStr[3] + "/" + weak + "|";
            }
        }
        zeile3 = zeile3.substr(0, zeile3.length - 1);
        zeile3Arr = [zeile3];

        var zeile4 = format;
        zeile4Arr = [zeile4];
        document.cookie = zeile1Arr + ":" + zeile2Arr + ":" + zeile3Arr + ":" + zeile4Arr;

    }
}
