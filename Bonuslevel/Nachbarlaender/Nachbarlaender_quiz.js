//Random Zahlen

var outputnumBundes1 = document.getElementById("outputnumBundes1");

var outputnumBundes2 = document.getElementById("outputnumBundes2");

var outputnumBundes3 = document.getElementById("outputnumBundes3");

var outputnumBundes4 = document.getElementById("outputnumBundes4");

var outputnumBundes5 = document.getElementById("outputnumBundes5");

var outputnumBundes6 = document.getElementById("outputnumBundes6");

var outputnumBundes7 = document.getElementById("outputnumBundes7");

var outputnumBundes8 = document.getElementById("outputnumBundes8");



var numBundes1 = 0;

var numBundes2 = 0;

var numBundes3 = 0;

var numBundes4 = 0;

var numBundes5 = 0;

var numBundes6 = 0;

var numBundes7 = 0;

var numBundes8 = 0;




function startGame()
{

    numBundes1 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes1.innerHTML = numBundes1;

    numBundes2 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes2.innerHTML = numBundes2;

    numBundes3 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes3.innerHTML = numBundes3;

    numBundes4 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes4.innerHTML = numBundes4;

    numBundes5 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes5.innerHTML = numBundes5;

    numBundes6 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes6.innerHTML = numBundes6;

    numBundes7 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes7.innerHTML = numBundes7;

    numBundes8 = Math.floor((Math.random() * 8) + 1);

    outputnumBundes8.innerHTML = numBundes8;


    while((numBundes1 == numBundes2 || numBundes1 == numBundes3 || numBundes1 == numBundes4 || numBundes1 == numBundes5 || numBundes1 == numBundes6 || numBundes1 == numBundes7 || numBundes1 == numBundes8)){


        numBundes1 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes1.innerHTML = numBundes1;

    }

    while((numBundes2 == numBundes1 || numBundes2 == numBundes3 || numBundes2 == numBundes4 || numBundes2 == numBundes5 || numBundes2 == numBundes6 || numBundes2 == numBundes7 || numBundes2 == numBundes8)){

        numBundes2 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes2.innerHTML = numBundes2;
    }

    while((numBundes3 == numBundes1 || numBundes3 == numBundes2 || numBundes3 == numBundes4 || numBundes3 == numBundes5 || numBundes3 == numBundes6 || numBundes3 == numBundes7 || numBundes3 == numBundes8)){

        numBundes3 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes3.innerHTML = numBundes3;

    }

    while((numBundes4 == numBundes1 || numBundes4 == numBundes2 || numBundes4 == numBundes3 || numBundes4 == numBundes5 || numBundes4 == numBundes6 || numBundes4 == numBundes7 || numBundes4 == numBundes8)){

        numBundes4 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes4.innerHTML = numBundes4;
    }

    while((numBundes5 == numBundes1 || numBundes5 == numBundes2 || numBundes5 == numBundes3 || numBundes5 == numBundes4 || numBundes5 == numBundes6 || numBundes5 == numBundes7 || numBundes5 == numBundes8)){

        numBundes5 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes5.innerHTML = numBundes5;

    }

    while((numBundes6 == numBundes1 || numBundes6 == numBundes2 || numBundes6 == numBundes3 || numBundes6 == numBundes4 || numBundes6 == numBundes5 || numBundes6== numBundes7 || numBundes6 == numBundes8)){

        numBundes6 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes6.innerHTML = numBundes6;

    }

    while((numBundes7 == numBundes1 || numBundes7 == numBundes2 || numBundes7 == numBundes3 || numBundes7 == numBundes4 || numBundes7 == numBundes5 || numBundes7 == numBundes6 || numBundes7 == numBundes8)){

        numBundes7 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes7.innerHTML = numBundes7;

    }

    while((numBundes8 == numBundes1 || numBundes8 == numBundes2 || numBundes8 == numBundes3 || numBundes8 == numBundes4 || numBundes8 == numBundes5 || numBundes8 == numBundes6 || numBundes8 == numBundes7)){

        numBundes8 = Math.floor((Math.random() * 8) + 1);

        outputnumBundes8.innerHTML = numBundes8;

    }

}




//Eingabe �berpr�fen

function test() {


    var Deutschland = "Deutschland";
    var Berlin = "Berlin";

    var Schweiz = "Schweiz";
    var Bern = "Bern";

    var Italien = "Italien";
    var Rom = "Rom";

    var Ungarn = "Ungarn";
    var Budapest = "Budapest";

    var Lichtenstein = "Lichtenstein";

    var Slowenien = "Slowenien";
    var Ljubljana = "Ljubljana";

    var Slowakei = "Slowakei";
    var Bratislava = "Bratislava";


    var Tschechien = "Tschechien";
    var Prag = "Prag";


    var punkte = 0;
    
    var txtBundes1;
    var txtHaupt1;
    
    var txtBundes2;
    var txtHaupt2;
    
    var txtBundes3;
    var txtHaupt3;
    
    var txtBundes4;
    var txtHaupt4;
    
    var txtBundes5;
    var txtHaupt5;
    
    var txtBundes6;
    var txtHaupt6;
    
    var txtBundes7;
    var txtHaupt7;
    
    var txtBundes8;
    var txtHaupt8;

    

    switch(numBundes1){
        case (1):
             txtBundes1 = Italien;
             txtHaupt1 = Rom;
            break;
        case (2):
             txtBundes2 = Slowenien;
             txtHaupt2 = Ljubljana;
            break;
        case (3):
             txtBundes1 = Schweiz;
             txtHaupt1 = Bern;
            break;
        case (4):
             txtBundes1 = Deutschland;
             txtHaupt1 = Berlin;
            break;
        case (5):
             txtBundes1 = Lichtenstein;
             txtHaupt1 = Lichtenstein;
            break;
        case (6):
             txtBundes1 = Ungarn;
             txtHaupt1 = Budapest;
            break;
        case (7):
             txtBundes1 = Slowakei;
             txtHaupt1 = Bratislava;
            break;
        case (8):
             txtBundes1 = Tschechien;
             txtHaupt1 = Prag;
            break;

    }

    switch(numBundes2){
        case (1):
             txtBundes2 = Italien;
             txtHaupt2 = Rom;
            break;
        case (2):
             txtBundes2 = Slowenien;
             txtHaupt2 = Ljubljana;
            break;
        case (3):
             txtBundes2 = Schweiz;
             txtHaupt2 = Bern;
            break;
        case (4):
             txtBundes2 = Deutschland;
             txtHaupt2 = Berlin;
            break;
        case (5):
             txtBundes2 = Lichtenstein;
             txtHaupt2 = Lichtenstein;
            break;
        case (6):
             txtBundes2 = Ungarn;
             txtHaupt2 = Budapest;
            break;
        case (7):
             txtBundes2 = Slowakei;
             txtHaupt2 = Bratislava;
            break;
        case (8):
             txtBundes2 = Tschechien;
             txtHaupt2 = Prag;
            break;

    }

    switch(numBundes3){
        case (1):
             txtBundes3 = Italien;
             txtHaupt3 = Rom;
            break;
        case (2):
             txtBundes3 = Slowenien;
             txtHaupt3 = Ljubljana;
            break;
        case (3):
             txtBundes3 = Schweiz;
             txtHaupt3 = Bern;
            break;
        case (4):
             txtBundes3 = Deutschland;
             txtHaupt3 = Berlin;
            break;
        case (5):
             txtBundes3 = Lichtenstein;
             txtHaupt3 = Lichtenstein;
            break;
        case (6):
             txtBundes3 = Ungarn;
             txtHaupt3 = Budapest;
            break;
        case (7):
             txtBundes3 = Slowakei;
             txtHaupt3 = Bratislava;
            break;
        case (8):
             txtBundes3 = Tschechien;
             txtHaupt3 = Prag;
            break;
    }

    switch(numBundes4){
        case (1):
             txtBundes4 = Italien;
             txtHaupt4 = Rom;
            break;
        case (2):
             txtBundes4 = Slowenien;
             txtHaupt4 = Ljubljana;
            break;
        case (3):
             txtBundes4 = Schweiz;
             txtHaupt4 = Bern;
            break;
        case (4):
             txtBundes4 = Deutschland;
             txtHaupt4 = Berlin;
            break;
        case (5):
             txtBundes4 = Lichtenstein;
             txtHaupt4 = Lichtenstein;
            break;
        case (6):
             txtBundes4 = Ungarn;
             txtHaupt4 = Budapest;
            break;
        case (7):
             txtBundes4 = Slowakei;
             txtHaupt4 = Bratislava;
            break;
        case (8):
             txtBundes4 = Tschechien;
             txtHaupt4 = Prag;
            break;

    }

    switch(numBundes5){
        case (1):
             txtBundes5 = Italien;
             txtHaupt5 = Rom;
            break;
        case (2):
             txtBundes5 = Slowenien;
             txtHaupt5 = Ljubljana;
            break;
        case (3):
             txtBundes5 = Schweiz;
             txtHaupt5 = Bern;
            break;
        case (4):
             txtBundes5 = Deutschland;
             txtHaupt5 = Berlin;
            break;
        case (5):
             txtBundes5 = Lichtenstein;
             txtHaupt5 = Lichtenstein;
            break;
        case (6):
             txtBundes5 = Ungarn;
             txtHaupt5 = Budapest;
            break;
        case (7):
             txtBundes5 = Slowakei;
             txtHaupt5 = Bratislava;
            break;
        case (8):
             txtBundes5 = Tschechien;
             txtHaupt5 = Prag;
            break;
    }

    switch(numBundes6){
        case (1):
             txtBundes6 = Italien;
             txtHaupt6 = Rom;
            break;
        case (2):
             txtBundes6 = Slowenien;
             txtHaupt6 = Ljubljana;
            break;
        case (3):
             txtBundes6 = Schweiz;
             txtHaupt6 = Bern;
            break;
        case (4):
             txtBundes6 = Deutschland;
             txtHaupt6 = Berlin;
            break;
        case (5):
             txtBundes6 = Lichtenstein;
             txtHaupt6 = Lichtenstein;
            break;
        case (6):
             txtBundes6 = Ungarn;
             txtHaupt6 = Budapest;
            break;
        case (7):
             txtBundes6 = Slowakei;
             txtHaupt6 = Bratislava;
            break;
        case (8):
             txtBundes6 = Tschechien;
             txtHaupt6 = Prag;
            break;

    }

    switch(numBundes7){
        case (1):
             txtBundes7 = Italien;
             txtHaupt7 = Rom;
            break;
        case (2):
             txtBundes7 = Slowenien;
             txtHaupt7 = Ljubljana;
            break;
        case (3):
             txtBundes7 = Schweiz;
             txtHaupt7 = Bern;
            break;
        case (4):
             txtBundes7 = Deutschland;
             txtHaupt7 = Berlin;
            break;
        case (5):
             txtBundes7 = Lichtenstein;
             txtHaupt7 = Lichtenstein;
            break;
        case (6):
             txtBundes7 = Ungarn;
             txtHaupt7 = Budapest;
            break;
        case (7):
             txtBundes7 = Slowakei;
             txtHaupt7 = Bratislava;
            break;
        case (8):
             txtBundes7 = Tschechien;
             txtHaupt7 = Prag;
            break;

    }

    switch(numBundes8){
        case (1):
             txtBundes8 = Italien;
             txtHaupt8 = Rom;
            break;
        case (2):
             txtBundes8 = Slowenien;
             txtHaupt8 = Ljubljana;
            break;
        case (3):
             txtBundes8 = Schweiz;
             txtHaupt8 = Bern;
            break;
        case (4):
             txtBundes8 = Deutschland;
             txtHaupt8 = Berlin;
            break;
        case (5):
             txtBundes8 = Lichtenstein;
             txtHaupt8 = Lichtenstein;
            break;
        case (6):
             txtBundes8 = Ungarn;
             txtHaupt8 = Budapest;
            break;
        case (7):
             txtBundes8 = Slowakei;
             txtHaupt8 = Bratislava;
            break;
        case (8):
             txtBundes8 = Tschechien;
             txtHaupt8 = Prag;
            break;

    }

   

    var varBundes1 = document.getElementById("einBundes1").value;
    var varHaupt1 = document.getElementById("einHaupt1").value;

    var varBundes2 = document.getElementById("einBundes2").value;
    var varHaupt2 = document.getElementById("einHaupt2").value;

    var varBundes3 = document.getElementById("einBundes3").value;
    var varHaupt3 = document.getElementById("einHaupt3").value;

    var varBundes4 = document.getElementById("einBundes4").value;
    var varHaupt4 = document.getElementById("einHaupt4").value;

    var varBundes5 = document.getElementById("einBundes5").value;
    var varHaupt5 = document.getElementById("einHaupt5").value;

    var varBundes6 = document.getElementById("einBundes6").value;
    var varHaupt6 = document.getElementById("einHaupt6").value;

    var varBundes7 = document.getElementById("einBundes7").value;
    var varHaupt7 = document.getElementById("einHaupt7").value;

    var varBundes8 = document.getElementById("einBundes8").value;
    var varHaupt8 = document.getElementById("einHaupt8").value;


    if(numBundes1 == 1)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 2)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 3)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 4)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 5)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 6)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 7)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 8)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }
    else if(numBundes1 == 9)
    {
        if(varBundes1 == txtBundes1)
            punkte++;
        if(varHaupt1 == txtHaupt1)
            punkte++;
    }



    if(numBundes2 == 1)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 2)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 3)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 4)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 5)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 6)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 7)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 8)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }
    else if(numBundes2 == 9)
    {
        if(varBundes2 == txtBundes2)
            punkte++;
        if(varHaupt2 == txtHaupt2)
            punkte++;
    }




    if(numBundes3 == 1)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 2)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 3)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 4)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 5)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 6)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 7)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 8)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }
    else if(numBundes3 == 9)
    {
        if(varBundes3 == txtBundes3)
            punkte++;
        if(varHaupt3 == txtHaupt3)
            punkte++;
    }




    if(numBundes4 == 1)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 2)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 3)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 4)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 5)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 6)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 7)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 8)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }
    else if(numBundes4 == 9)
    {
        if(varBundes4 == txtBundes4)
            punkte++;
        if(varHaupt4 == txtHaupt4)
            punkte++;
    }




    if(numBundes5 == 1)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 2)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 3)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 4)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 5)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 6)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 7)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 8)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }
    else if(numBundes5 == 9)
    {
        if(varBundes5 == txtBundes5)
            punkte++;
        if(varHaupt5 == txtHaupt5)
            punkte++;
    }




    if(numBundes6 == 1)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 2)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 3)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 4)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 5)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 6)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 7)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 8)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }
    else if(numBundes6 == 9)
    {
        if(varBundes6 == txtBundes6)
            punkte++;
        if(varHaupt6 == txtHaupt6)
            punkte++;
    }




    if(numBundes7 == 1)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 2)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 3)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 4)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 5)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 6)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 7)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 8)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }
    else if(numBundes7 == 9)
    {
        if(varBundes7 == txtBundes7)
            punkte++;
        if(varHaupt7 == txtHaupt7)
            punkte++;
    }




    if(numBundes == 1)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes == 2)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes == 3)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes8 == 4)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes8 == 5)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes8 == 6)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes8 == 7)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes8 == 8)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes8 == 9)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }


    if(punkte == 16)
        alert("Super ! Du hast alle " + punkte + " Punkte.");
    else if(punkte > 8)
        alert("Nicht schlecht! Du hast " + punkte + " von 16 Punkte, das ist mehr als die H�lfte.");
    else if((punkte < 8) && (punkte > 0))
        alert("Schade ! Du hast nur " + punkte + " von 16 Punkten, das ist weniger als die H�lfte. Schau dir die �bung vielleicht nocheinmal an.");
    else if(punkte == 0)
        alert("Auweier !! Du hast " + punkte + " Punkte."); 
    

}
function init() {
    var buttonEins = document.getElementById('eins');
    buttonEins.addEventListener('click', fensterOeffnen);
}

function fensterOeffnen() {
    var text =
        '<a href="javascript:window.close()"> <button>zur�ck</button></a>' + '<br><button id="zwei">Hilfe</button>' + '<br><a href="Menue1.html"><button>Zum Hauptmen�</button></a>';
    var MeinFenster = window.open("about:blank", "Zweitfenster",
        "fullscreen");
    MeinFenster.document.write(text);
    MeinFenster.focus();
}
window.addEventListener('DOMContentLoaded', init);
