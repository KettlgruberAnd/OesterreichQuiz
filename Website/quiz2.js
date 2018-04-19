//Random Zahlen

var outputnumBundes1 = document.getElementById("outputnumBundes1");

var outputnumBundes2 = document.getElementById("outputnumBundes2");

var outputnumBundes3 = document.getElementById("outputnumBundes3");

var outputnumBundes4 = document.getElementById("outputnumBundes4");

var outputnumBundes5 = document.getElementById("outputnumBundes5");

var outputnumBundes6 = document.getElementById("outputnumBundes6");

var outputnumBundes7 = document.getElementById("outputnumBundes7");

var outputnumBundes8 = document.getElementById("outputnumBundes8");

var outputnumBundes9 = document.getElementById("outputnumBundes9");


var numBundes1 = 0;

var numBundes2 = 0;

var numBundes3 = 0;

var numBundes4 = 0;

var numBundes5 = 0;

var numBundes6 = 0;

var numBundes7 = 0;

var numBundes8 = 0;

var numBundes9 = 0;



function startGame()
{

    numBundes1 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes1.innerHTML = numBundes1;

    numBundes2 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes2.innerHTML = numBundes2;

    numBundes3 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes3.innerHTML = numBundes3;

    numBundes4 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes4.innerHTML = numBundes4;

    numBundes5 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes5.innerHTML = numBundes5;

    numBundes6 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes6.innerHTML = numBundes6;

    numBundes7 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes7.innerHTML = numBundes7;

    numBundes8 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes8.innerHTML = numBundes8;

    numBundes9 = Math.floor((Math.random() * 9) + 1);

    outputnumBundes9.innerHTML = numBundes9;

    while((numBundes1 == numBundes2 || numBundes1 == numBundes3 || numBundes1 == numBundes4 || numBundes1 == numBundes5 || numBundes1 == numBundes6 || numBundes1 == numBundes7 || numBundes1 == numBundes8 || numBundes1 == numBundes9)){


        numBundes1 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes1.innerHTML = numBundes1;

    }

    while((numBundes2 == numBundes1 || numBundes2 == numBundes3 || numBundes2 == numBundes4 || numBundes2 == numBundes5 || numBundes2 == numBundes6 || numBundes2 == numBundes7 || numBundes2 == numBundes8 || numBundes2 == numBundes9)){

        numBundes2 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes2.innerHTML = numBundes2;
    }

    while((numBundes3 == numBundes1 || numBundes3 == numBundes2 || numBundes3 == numBundes4 || numBundes3 == numBundes5 || numBundes3 == numBundes6 || numBundes3 == numBundes7 || numBundes3 == numBundes8 || numBundes3 == numBundes9)){

        numBundes3 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes3.innerHTML = numBundes3;

    }

    while((numBundes4 == numBundes1 || numBundes4 == numBundes2 || numBundes4 == numBundes3 || numBundes4 == numBundes5 || numBundes4 == numBundes6 || numBundes4 == numBundes7 || numBundes4 == numBundes8 || numBundes4 == numBundes9)){

        numBundes4 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes4.innerHTML = numBundes4;
    }

    while((numBundes5 == numBundes1 || numBundes5 == numBundes2 || numBundes5 == numBundes3 || numBundes5 == numBundes4 || numBundes5 == numBundes6 || numBundes5 == numBundes7 || numBundes5 == numBundes8 || numBundes5 == numBundes9)){

        numBundes5 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes5.innerHTML = numBundes5;

    }

    while((numBundes6 == numBundes1 || numBundes6 == numBundes2 || numBundes6 == numBundes3 || numBundes6 == numBundes4 || numBundes6 == numBundes5 || numBundes6== numBundes7 || numBundes6 == numBundes8 || numBundes6 == numBundes9)){

        numBundes6 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes6.innerHTML = numBundes6;

    }

    while((numBundes7 == numBundes1 || numBundes7 == numBundes2 || numBundes7 == numBundes3 || numBundes7 == numBundes4 || numBundes7 == numBundes5 || numBundes7 == numBundes6 || numBundes7 == numBundes8 || numBundes7 == numBundes9)){

        numBundes7 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes7.innerHTML = numBundes7;

    }

    while((numBundes8 == numBundes1 || numBundes8 == numBundes2 || numBundes8 == numBundes3 || numBundes8 == numBundes4 || numBundes8 == numBundes5 || numBundes8 == numBundes6 || numBundes8 == numBundes7 || numBundes8 == numBundes9)){

        numBundes8 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes8.innerHTML = numBundes8;

    }

    while((numBundes9 == numBundes1 || numBundes9 == numBundes2 || numBundes9 == numBundes3 || numBundes9 == numBundes4 || numBundes9 == numBundes5 || numBundes9 == numBundes6 || numBundes9 == numBundes7 || numBundes9 == numBundes8)){

        numBundes9 = Math.floor((Math.random() * 9) + 1);

        outputnumBundes9.innerHTML = numBundes9;

    }
}




//Eingabe überprüfen

function test() {


    var Burgenland = "Burgenland";
    var Eisenstadt = "Eisenstadt";
    
    var Kaernten = "Kärnten";
    var Klagenfurt = "Klagenfurt";
    
    var Niederoesterreich = "Niederösterreich";
    var Stpoelten = "St.Pölten";

    var Oberoesterreich = "Oberösterreich";
    var Linz = "Linz";
    
    var Salzburg = "Salzburg";
    
    var Steiermark = "Steiermark";
    var Graz = "Graz";

    var Tirol = "Tirol";
    var Innsbruck = "Innsbruck";

    var Voralberg = "Vorarlberg";
    var Bregenz = "Bregenz";
    
    var Wien = "Wien";


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
    
    var txtBundes9;
    var txtHaupt9;
    

    switch(numBundes1){
        case (1):
             txtBundes1 = Burgenland;
             txtHaupt1 = Eisenstadt;
            break;
        case (2):
             txtBundes2 = Kaernten;
             txtHaupt2 = Klagenfurt;
            break;
        case (3):
             txtBundes1 = Niederoesterreich;
             txtHaupt1 = Stpoelten;
            break;
        case (4):
             txtBundes1 = Oberoesterreich;
             txtHaupt1 = Linz;
            break;
        case (5):
             txtBundes1 = Salzburg;
             txtHaupt1 = Salzburg;
            break;
        case (6):
             txtBundes1 = Steiermark;
             txtHaupt1 = Graz;
            break;
        case (7):
             txtBundes1 = Tirol;
             txtHaupt1 = Innsbruck;
            break;
        case (8):
             txtBundes1 = Vorarlberg;
             txtHaupt1 = Bregenz;
            break;
        case (9):
             txtBundes1 = Wien;
             txtHaupt1 = Wien;
            break;
    }

    switch(numBundes2){
        case (1):
             txtBundes2 = Burgenland;
             txtHaupt2 = Eisenstadt;
            break;
        case (2):
             txtBundes2 = Kaernten;
             txtHaupt2 = Klagenfurt;
            break;
        case (3):
             txtBundes2 = Niederoesterreich;
             txtHaupt2 = Stpoelten;
            break;
        case (4):
             txtBundes2 = Oberoesterreich;
             txtHaupt2 = Linz;
            break;
        case (5):
             txtBundes2 = Salzburg;
             txtHaupt2 = Salzburg;
            break;
        case (6):
             txtBundes2 = Steiermark;
             txtHaupt2 = Graz;
            break;
        case (7):
             txtBundes2 = Tirol;
             txtHaupt2 = Innsbruck;
            break;
        case (8):
             txtBundes2 = Voralberg;
             txtHaupt2 = Bregenz;
            break;
        case (9):
             txtBundes2 = Wien;
             txtHaupt2 = Wien;
            break;
    }

    switch(numBundes3){
        case (1):
             txtBundes3 = Burgenland;
             txtHaupt3 = Eisenstadt;
            break;
        case (2):
             txtBundes3 = Kaernten;
             txtHaupt3 = Klagenfurt;
            break;
        case (3):
             txtBundes3 = Niederoesterreich;
             txtHaupt3 = Stpoelten;
            break;
        case (4):
             txtBundes3 = Oberoesterreich;
             txtHaupt3 = Linz;
            break;
        case (5):
             txtBundes3 = Salzburg;
             txtHaupt3 = Salzburg;
            break;
        case (6):
             txtBundes3 = Steiermark;
             txtHaupt3 = Graz;
            break;
        case (7):
             txtBundes3 = Tirol;
             txtHaupt3 = Innsbruck;
            break;
        case (8):
             txtBundes3 = Voralberg;
             txtHaupt3 = Bregenz;
            break;
        case (9):
             txtBundes3 = Wien;
             txtHaupt3 = Wien;
            break;
    }

    switch(numBundes4){
        case (1):
             txtBundes4 = Burgenland;
             txtHaupt4 = Eisenstadt;
            break;
        case (2):
             txtBundes4 = Kaernten;
             txtHaupt4 = Klagenfurt;
            break;
        case (3):
             txtBundes4 = Niederoesterreich;
             txtHaupt4 = Stpoelten;
            break;
        case (4):
             txtBundes4 = Oberoesterreich;
             txtHaupt4 = Linz;
            break;
        case (5):
             txtBundes4 = Salzburg;
             txtHaupt4 = Salzburg;
            break;
        case (6):
             txtBundes4 = Steiermark;
             txtHaupt4 = Graz;
            break;
        case (7):
             txtBundes4 = Tirol;
             txtHaupt4 = Innsbruck;
            break;
        case (8):
             txtBundes4 = Voralberg;
             txtHaupt4 = Bregenz;
            break;
        case (9):
             txtBundes4 = Wien;
             txtHaupt4 = Wien;
            break;
    }

    switch(numBundes5){
        case (1):
             txtBundes5 = Burgenland;
             txtHaupt5 = Eisenstadt;
            break;
        case (2):
             txtBundes5 = Kaernten;
             txtHaupt5 = Klagenfurt;
            break;
        case (3):
             txtBundes5 = Niederoesterreich;
             txtHaupt5 = Stpoelten;
            break;
        case (4):
             txtBundes5 = Oberoesterreich;
             txtHaupt5 = Linz;
            break;
        case (5):
             txtBundes5 = Salzburg;
             txtHaupt5 = Salzburg;
            break;
        case (6):
             txtBundes5 = Steiermark;
             txtHaupt5 = Graz;
            break;
        case (7):
             txtBundes5 = Tirol;
             txtHaupt5 = Innsbruck;
            break;
        case (8):
             txtBundes5 = Voralberg;
             txtHaupt5 = Bregenz;
            break;
        case (9):
             txtBundes5 = Wien;
             txtHaupt5 = Wien;
            break;
    }

    switch(numBundes6){
        case (1):
             txtBundes6 = Burgenland;
             txtHaupt6 = Eisenstadt;
            break;
        case (2):
             txtBundes6 = Kaernten;
             txtHaupt6 = Klagenfurt;
            break;
        case (3):
             txtBundes6 = Niederoesterreich;
             txtHaupt6 = Stpoelten;
            break;
        case (4):
             txtBundes6 = Oberoesterreich;
             txtHaupt6 = Linz;
            break;
        case (5):
             txtBundes6 = Salzburg;
             txtHaupt6 = Salzburg;
            break;
        case (6):
             txtBundes6 = Steiermark;
             txtHaupt6 = Graz;
            break;
        case (7):
             txtBundes6 = Tirol;
             txtHaupt6 = Innsbruck;
            break;
        case (8):
             txtBundes6 = Voralberg;
             txtHaupt6 = Bregenz;
            break;
        case (9):
             txtBundes6 = Wien;
             txtHaupt6 = Wien;
            break;
    }

    switch(numBundes7){
        case (1):
             txtBundes7 = Burgenland;
             txtHaupt7 = Eisenstadt;
            break;
        case (2):
             txtBundes7 = Kaernten;
             txtHaupt7 = Klagenfurt;
            break;
        case (3):
             txtBundes7 = Niederoesterreich;
             txtHaupt7 = Stpoelten;
            break;
        case (4):
             txtBundes7 = Oberoesterreich;
             txtHaupt7 = Linz;
            break;
        case (5):
             txtBundes7 = Salzburg;
             txtHaupt7 = Salzburg;
            break;
        case (6):
             txtBundes7 = Steiermark;
             txtHaupt7 = Graz;
            break;
        case (7):
             txtBundes7 = Tirol;
             txtHaupt7 = Innsbruck;
            break;
        case (8):
             txtBundes7 = Voralberg;
             txtHaupt7 = Bregenz;
            break;
        case (9):
             txtBundes7 = Wien;
             txtHaupt7 = Wien;
            break;
    }

    switch(numBundes8){
        case (1):
             txtBundes8 = Burgenland;
             txtHaupt8 = Eisenstadt;
            break;
        case (2):
             txtBundes8 = Kaernten;
             txtHaupt8 = Klagenfurt;
            break;
        case (3):
             txtBundes8 = Niederoesterreich;
             txtHaupt8 = Stpoelten;
            break;
        case (4):
             txtBundes8 = Oberoesterreich;
             txtHaupt8 = Linz;
            break;
        case (5):
             txtBundes8 = Salzburg;
             txtHaupt8 = Salzburg;
            break;
        case (6):
             txtBundes8 = Steiermark;
             txtHaupt8 = Graz;
            break;
        case (7):
             txtBundes8 = Tirol;
             txtHaupt8 = Innsbruck;
            break;
        case (8):
             txtBundes8 = Voralberg;
             txtHaupt8 = Bregenz;
            break;
        case (9):
             txtBundes8 = Wien;
             txtHaupt8 = Wien;
            break;
    }

    switch(numBundes9){
        case (1):
             txtBundes9 = Burgenland;
             txtHaupt9 = Eisenstadt;
            break;
        case (2):
             txtBundes9 = Kaernten;
             txtHaupt9 = Klagenfurt;
            break;
        case (3):
             txtBundes9 = Niederoesterreich;
             txtHaupt9 = Stpoelten;
            break;
        case (4):
             txtBundes9 = Oberoesterreich;
             txtHaupt9 = Linz;
            break;
        case (5):
             txtBundes9 = Salzburg;
             txtHaupt9 = Salzburg;
            break;
        case (6):
             txtBundes9 = Steiermark;
             txtHaupt9 = Graz;
            break;
        case (7):
             txtBundes9 = Tirol;
             txtHaupt9 = Innsbruck;
            break;
        case (8):
             txtBundes9 = Voralberg;
             txtHaupt9 = Bregenz;
            break;
        case (9):
             txtBundes9 = Wien;
             txtHaupt9 = Wien;
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

    var varBundes9 = document.getElementById("einBundes9").value;
    var varHaupt9 = document.getElementById("einHaupt9").value;


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




    if(numBundes8 == 1)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(numBundes8 == 2)
    {
        if(varBundes8 == txtBundes8)
            punkte++;
        if(varHaupt8 == txtHaupt8)
            punkte++;
    }
    else if(3)
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




    if(numBundes9 == 1)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 2)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 3)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 4)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 5)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 6)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 7)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 8)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }
    else if(numBundes9 == 9)
    {
        if(varBundes9 == txtBundes9)
            punkte++;
        if(varHaupt9 == txtHaupt9)
            punkte++;
    }

    if(punkte == 18)
        alert("Super ! Du hast alle " + punkte + " Punkte. 👍 😄");
    else if(punkte > 9)
        alert("Nicht schlecht! Du hast " + punkte + " von 18 Punkte, das ist mehr als die Hälfte. 😉");
    else if((punkte < 9) && (punkte > 0))
        alert("Schade ! Du hast nur " + punkte + " von 18 Punkten, das ist weniger als die Hälfte. Schau dir die Übung vielleicht nocheinmal an. 😖");
    else if(punkte == 0)
        alert("Auweier !! Du hast " + punkte + " Punkte. 😰"); 
    

}
