function init() {
    var buttonEins = document.getElementById('eins');
    buttonEins.addEventListener('click', fensterOeffnen);
}

function fensterOeffnen() {
    var text =
        '<center><p style="text-align: left; background-color: deepskyblue; border: 1px solid black; width: 90%; font-family: Arial; font-size: 18px;">Hilfe: <br>' +
        '<br>' +
        'Auf der Österreich-Karte sind Nummern zu sehen. Diese Nummern sollen der Tabelle auf der rechten Seite korrekt zugeordnet werden. <br>' +
        'Sobald man alle Zahlen in die Felder eingetragen hat, kann man diese überprüfen lassen, indem man auf den "Überprüfen" Button klickt. Sind die Eingaben falsch, so werden diese markiert.<br></p></center>';
    var MeinFenster = window.open("about:blank", "Zweitfenster",
        "width=500,height=250");
    MeinFenster.document.write(text);
    MeinFenster.focus();
}
window.addEventListener('DOMContentLoaded', init);