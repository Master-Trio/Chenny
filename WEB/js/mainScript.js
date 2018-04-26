var anzahlEntitaeten = 0; 
var entitaetenNamen;
var anzahlAttribute;
var attributWerteNamen;
var attributWertePK;
var entitaetStelle = 1;


function names(anzahl) {
    anzahlEntitaeten = anzahl;
    entitaetenNamen = new Array();
    document.getElementById("namensfelder").innerHTML = "";


    var ausgabe = 1;

    if (anzahl % 2 == 0) {
        for (var i = 0; i < (anzahl / 2); i++) {
            document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   " + ausgabe + ". Entität: <input id='feld" + ausgabe + "' type='text'></div><div class='col'>   " + (ausgabe = ausgabe + 1) + ". Entität: <input id='feld" + ausgabe + "' type='text'></div></div><br>";
            ausgabe++;
        }
    } else {
        for (var i = 0; i < ((anzahl / 2) - 1); i++) {
            document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   " + ausgabe + ". Entität: <input id='feld" + ausgabe + "' type='text'></div><div class='col'>   " + (ausgabe = ausgabe + 1) + ". Entität: <input id='feld" + ausgabe + "' type='text'></div></div><br>";
            ausgabe++;
        }
        document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   " + ausgabe + ". Entität: <input id='feld" + ausgabe + "' type='text'></div><div class='col'>&nbsp;</div></div>";
    }


}


function attributes(anzeige) {
    if (anzeige) {
        var a = 0;
        document.getElementById("attribute").innerHTML = "";
        for (var i = 0; i < entitaetenNamen.length; i++) {
            document.getElementById("attribute").innerHTML += "<div class='row'><div class='col'>&nbsp;</div><div class='col'>" + entitaetenNamen[i] + "</div><div class='col'><img class='pfeil' src='IMG/pfeil.png'></div><div class='col'><div style='margin-top: -10px;' class='form-group'><select class='form-control' id='sel" + String(a) + "' onchange='dyn(this, plural" + i + ");'><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div><div class='col' id='plural" + i + "'>Attribut</div><div class='col'>&nbsp;</div></div><br>";
            a++;
        }
        document.getElementById("schritt2").style.visibility = "visible";
    }
}

function namenPruefen(wert) {
    for (var i = 0; i < entitaetenNamen.length; i++) {
        if (entitaetenNamen[i] == wert) {
            return true;
        }
    }
    return false;
}

function namenSpeichern() {
    document.getElementById("schritt2").style.visibility = "hidden";
    var fehler = false;
    entitaetenNamen = new Array();
    /*Hineinschreiben der Entitätennamen in das Array
    Es wird auch bereits überprüft, ob alle Felder ausgefüllt wurden*/
    for (var i = 0; i < anzahlEntitaeten; i++) {
        if (!(document.getElementById("feld" + (i + 1)).value == "" || document.getElementById("feld" + (i + 1)).value == null)) {
            if (namenPruefen(document.getElementById("feld" + (i + 1)).value)) {
                document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Benutze keine doppelten Einträge!</p>";
                entitaetenNamen = new Array();
                fehler = true;
                break;
            } else {
                document.getElementById("fehlermeldung").innerHTML = "";
                entitaetenNamen[i] = document.getElementById("feld" + (i + 1)).value;
            }
        } else {
            document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Es wurden nicht alle Felder ausgefüllt!</p>";
            fehler = true;
            break;
        }
    }
    if (!fehler && weiterAtrribute) {
        attributes(true);
    }
}


function dyn(drop, schrift) {
    if (drop.value > 1) {
        schrift.innerHTML = "Attribute";
    } else if (drop.value == 1) {
        schrift.innerHTML = "Attribut";
    }
}

function speicherAnzahlAttribute() {
    anzahlAttribute = new Array(entitaetenNamen.length);
    for (var i = 0; i < anzahlAttribute.length; i++) {
        anzahlAttribute[i] = document.getElementById("sel" + i).value;
    }
}

function weiterAttribute() {
    speicherAnzahlAttribute();
    document.getElementById("schritt3").style.visibility = "visible";
    writeTable();
}


function erzeugeTextfelder(j) {
    var str = "";

    for (var i = 0; i < anzahlAttribute[j]; i++) {
        str += "<input id='textfeld" + entitaetStelle + (i + 1) + "' type='text' style='margin-bottom: 10px;'><br>";
    }
    entitaetStelle++;

    return str;
}

function erzeugePKFelder(j) {
    var str = "";
    for (var i = 0; i < anzahlAttribute[j]; i++) {
          if (anzahlAttribute[j] == 1) {
            str = "<input id='checkbox" + (entitaetStelle-1) + (i + 1) + "' type='checkbox' style='margin-bottom: 10px;' checked='checked' onclick='return false;'><br>";
          } else {
            str += "<input id='checkbox" + (entitaetStelle-1) + (i + 1) + "' type='checkbox' style='margin-bottom: 10px;'><br>";
          }
    }
    return str;
}


function writeTable() {
    var anfang = "<table class='table tabOwn' id='tabelle'><thead><tr><th scope='col'>Entität</th><th scope='col'>Attributnamen</th><th scope='col'>Primary-Key</th></tr></thead><tbody id='tabellenbody'>";

    var content = "";
    for (var i = 0; i < entitaetenNamen.length; i++) {
        var textFelder = erzeugeTextfelder(i);
        var PKFelder = erzeugePKFelder(i);

        content += "<tr><th scope='row'>" + entitaetenNamen[i] + "</th><td>" + textFelder + "</td><td>" + PKFelder + "</td></tr>";
    }

    var ende = "</tbody></table>";
    var gesamt = anfang + content + ende;

    document.getElementById("tabDiv").innerHTML = gesamt;
}

function weiterAttributWerte() {
    attributWerteNamen = new Array();
    attributWertePK = new Array();

    var platz = 1;

    for (var a = 0; a < anzahlAttribute.length; a++) {
        for (var i = 0; i < anzahlAttribute[a]; i++) {
            attributWerteNamen.push(document.getElementById("textfeld" + platz + (i + 1)).value);
            if (document.getElementById("checkbox" + platz + (i + 1)).checked) {
                attributWertePK.push(document.getElementById("checkbox" + platz + (i + 1)).value);
            }
            else {
                attributWertePK.push("off");
            }
        }
        platz++;
    }
}



























