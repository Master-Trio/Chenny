var anzahlEntitaeten = 0;
var entitaetenNamen;
var generateDropdown = "<div style='margin-top: -10px;' class='form-group'><select class='form-control' id='sel1'><option>1</option><option>2</option><option>3</option><option>4</option></select></div>";

function names(anzahl) {
    anzahlEntitaeten = anzahl;
    entitaetenNamen = new Array();
    document.getElementById("namensfelder").innerHTML = "";
    for (var i = 1; i < (parseInt(anzahl) + 1); i++) {
        document.getElementById("namensfelder").innerHTML += "   " + i + ". Name: <input id='feld" + i + "' type='text' style='text-align: center;'>";
        if (i == 5) {
            document.getElementById("namensfelder").innerHTML += "<br><br>";
        }
    }
}


function attributes() {
    document.getElementById("attribute").innerHTML = "";
    for (var i = 0; i < entitaetenNamen.length; i++) {
        document.getElementById("attribute").innerHTML += "<div class='row'><div class='col'>&nbsp;</div><div class='col'>" + entitaetenNamen[i] + "</div><div class='col'><img class='pfeil' src='IMG/pfeil.png'></div><div class='col'>" + generateDropdown + "</div><div class='col'>Attribut / Attribute</div><div class='col'>&nbsp;</div></div><br>";
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
    entitaetenNamen = new Array();
    /*Hineinschreiben der Entitätennamen in das Array
    Es wird auch bereits überprüft, ob alle Felder ausgefüllt wurden*/
    for (var i = 0; i < anzahlEntitaeten; i++) {
        if (!(document.getElementById("feld" + (i + 1)).value == "" || document.getElementById("feld" + (i + 1)).value == null)) {

            if (namenPruefen(document.getElementById("feld" + (i + 1)).value)) {
                document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Benutze keine doppelten Einträge!</p>";
                entitaetenNamen = new Array();
                break;
            } else {
                document.getElementById("fehlermeldung").innerHTML = "";
                entitaetenNamen[i] = document.getElementById("feld" + (i + 1)).value;
            }
        } else {
            document.getElementById("fehlermeldung").innerHTML = "<p style='color: red;'>Es wurden nicht alle Felder ausgefüllt!</p>";
            break;
        }
    }

    attributes();
}
