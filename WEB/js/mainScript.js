var anzahlEntitaeten = 0;
var entitaetenNamen;

function names(anzahl) {
    anzahlEntitaeten = anzahl;
    entitaetenNamen = new Array();
    document.getElementById("namensfelder").innerHTML = "";
    
    
    var ausgabe = 1;
    
    if (anzahl % 2 == 0) {
        for (var i = 0; i < (anzahl/2); i++) {
            document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   "+ausgabe+". Entität: <input id='feld"+ausgabe+"' type='text'></div><div class='col'>   "+(ausgabe = ausgabe+1)+". Entität: <input id='feld"+ausgabe+"' type='text'></div></div><br>";
            ausgabe++;
        }
    }
    else {
        for (var i = 0; i < ((anzahl/2)-1); i++) {
            document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   "+ausgabe+". Entität: <input id='feld"+ausgabe+"' type='text'></div><div class='col'>   "+(ausgabe = ausgabe+1)+". Entität: <input id='feld"+ausgabe+"' type='text'></div></div><br>";   
            ausgabe++;
        }
        document.getElementById("namensfelder").innerHTML += "<div class='row'><div class='col'>   "+ausgabe+". Entität: <input id='feld"+ausgabe+"' type='text'></div><div class='col'>&nbsp;</div></div>";
    }

    
}


function attributes() {
    var a = 0;
    document.getElementById("attribute").innerHTML = "";
    
    for (var i = 0; i < entitaetenNamen.length; i++) {
        document.getElementById("attribute").innerHTML += "<div class='row'><div class='col'>&nbsp;</div><div class='col'>" + entitaetenNamen[i] + "</div><div class='col'><img class='pfeil' src='IMG/pfeil.png'></div><div class='col'><div style='margin-top: -10px;' class='form-group'><select class='form-control' id='sel"+String(a)+"' onchange='dyn(this, plural"+i+");'><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div><div class='col' id='plural"+i+"'>Attribut</div><div class='col'>&nbsp;</div></div><br>";
        a++;
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


function dyn (drop, schrift) {
    if (drop.value > 1) {
        schrift.innerHTML = "Attribute";
    }
    else if (drop.value == 1) {
        schrift.innerHTML = "Attribut"; 
    }
}
