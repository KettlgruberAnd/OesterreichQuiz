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


    var Oberoesterreich = "Oberösterreich";
    var Linz = "Linz";

    var Niederoesterreich = "Niederösterreich";
    var Stpoelten = "St.Pölten";

    var Wien = "Wien";

    var Burgenland = "Burgenland";
    var Eisenstadt = "Eisenstadt";

    var Steiermark = "Steiermark";
    var Graz = "Graz";

    var Salzburg = "Salzburg";

    var Kaernten = "Kärnten";
    var Klagenfurt = "Klagenfurt";

    var Tirol = "Tirol";
    var Innsbruck = "Innsbruck";

    var Voralberg = "Voralberg";
    var Bregenz = "Bregenz";




    var punkte = 0;
    var txtBundes1;
    var txtHaupt1;

    switch(numBundes1){
        case (1):
             txtBundes1 = Burgenland;
             txtHaupt1 = Eisenstadt;
            break;
        case (2):
             txtBundes1 = Kaernten;
             txtHaupt1 = Klagenfurt;
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
             txtBundes1 = Voralberg;
             txtHaupt1 = Bregenz;
            break;
        case (9):
             txtBundes1 = Wien;
             txtHaupt1 = Wien;
            break;
    }

    switch(numBundes2){
        case (numBundes2 == 1):
            var txtBundes2 = Burgenland;
            var txtHaupt2 = Eisenstadt;
            break;
        case (numBundes2 == 2):
            var txtBundes2 = Kärnten;
            var txtHaupt2 = Klagenfurt;
            break;
        case (numBundes2 == 3):
            var txtBundes2 = Niederösterreich;
            var txtHaupt2 = StPölten;
            break;
        case (numBundes2 == 4):
            var txtBundes2 = Oberösterreich;
            var txtHaupt2 = Linz;
            break;
        case (numBundes2 == 5):
            var txtBundes2 = Salzburg;
            var txtHaupt2 = Salzburg;
            break;
        case (numBundes2 == 6):
            var txtBundes2 = Steiermark;
            var txtHaupt2 = Graz;
            break;
        case (numBundes2 == 7):
            var txtBundes2 = Tirol;
            var txtHaupt2 = Innsbruck;
            break;
        case (numBundes2 == 8):
            var txtBundes2 = Voralberg;
            var txtHaupt2 = Bregenz;
            break;
        case (numBundes2 == 9):
            var txtBundes2 = Wien;
            var txtHaupt2 = Wien;
            break;
    }

    switch(numBundes3){
        case (numBundes3 == 1):
            var txtBundes3 = Burgenland;
            var txtHaupt3 = Eisenstadt;
            break;
        case (numBundes3 == 2):
            var txtBundes3 = Kärnten;
            var txtHaupt3 = Klagenfurt;
            break;
        case (numBundes3 == 3):
            var txtBundes3 = Niederösterreich;
            var txtHaupt3 = StPölten;
            break;
        case (numBundes3 == 4):
            var txtBundes3 = Oberösterreich;
            var txtHaupt3 = Linz;
            break;
        case (numBundes3 == 5):
            var txtBundes3 = Salzburg;
            var txtHaupt3 = Salzburg;
            break;
        case (numBundes3 == 6):
            var txtBundes3 = Steiermark;
            var txtHaupt3 = Graz;
            break;
        case (numBundes3 == 7):
            var txtBundes3 = Tirol;
            var txtHaupt3 = Innsbruck;
            break;
        case (numBundes3 == 8):
            var txtBundes3 = Voralberg;
            var txtHaupt3 = Bregenz;
            break;
        case (numBundes3 == 9):
            var txtBundes3 = Wien;
            var txtHaupt3 = Wien;
            break;
    }

    switch(numBundes4){
        case (numBundes4 == 1):
            var txtBundes4 = Burgenland;
            var txtHaupt4 = Eisenstadt;
            break;
        case (numBundes4 == 2):
            var txtBundes4 = Kärnten;
            var txtHaupt4 = Klagenfurt;
            break;
        case (numBundes4 == 3):
            var txtBundes4 = Niederösterreich;
            var txtHaupt4 = StPölten;
            break;
        case (numBundes4 == 4):
            var txtBundes4 = Oberösterreich;
            var txtHaupt4 = Linz;
            break;
        case (numBundes4 == 5):
            var txtBundes4 = Salzburg;
            var txtHaupt4 = Salzburg;
            break;
        case (numBundes4 == 6):
            var txtBundes4 = Steiermark;
            var txtHaupt4 = Graz;
            break;
        case (numBundes4 == 7):
            var txtBundes4 = Tirol;
            var txtHaupt4 = Innsbruck;
            break;
        case (numBundes4 == 8):
            var txtBundes4 = Voralberg;
            var txtHaupt4 = Bregenz;
            break;
        case (numBundes4 == 9):
            var txtBundes4 = Wien;
            var txtHaupt4 = Wien;
            break;
    }

    switch(numBundes5){
        case (numBundes5 == 1):
            var txtBundes5 = Burgenland;
            var txtHaupt5 = Eisenstadt;
            break;
        case (numBundes5 == 2):
            var txtBundes5 = Kärnten;
            var txtHaupt5 = Klagenfurt;
            break;
        case (numBundes5 == 3):
            var txtBundes5 = Niederösterreich;
            var txtHaupt5 = StPölten;
            break;
        case (numBundes5 == 4):
            var txtBundes5 = Oberösterreich;
            var txtHaupt5 = Linz;
            break;
        case (numBundes5 == 5):
            var txtBundes5 = Salzburg;
            var txtHaupt5 = Salzburg;
            break;
        case (numBundes5 == 6):
            var txtBundes5 = Steiermark;
            var txtHaupt5 = Graz;
            break;
        case (numBundes5 == 7):
            var txtBundes5 = Tirol;
            var txtHaupt5 = Innsbruck;
            break;
        case (numBundes5 == 8):
            var txtBundes5 = Voralberg;
            var txtHaupt5 = Bregenz;
            break;
        case (numBundes5 == 9):
            var txtBundes5 = Wien;
            var txtHaupt5 = Wien;
            break;
    }

    switch(numBundes6){
        case (numBundes6 == 1):
            var txtBundes6 = Burgenland;
            var txtHaupt6 = Eisenstadt;
            break;
        case (numBundes6 == 2):
            var txtBundes6 = Kärnten;
            var txtHaupt6 = Klagenfurt;
            break;
        case (numBundes6 == 3):
            var txtBundes6 = Niederösterreich;
            var txtHaupt6 = StPölten;
            break;
        case (numBundes6 == 4):
            var txtBundes6 = Oberösterreich;
            var txtHaupt6 = Linz;
            break;
        case (numBundes6 == 5):
            var txtBundes6 = Salzburg;
            var txtHaupt6 = Salzburg;
            break;
        case (numBundes6 == 6):
            var txtBundes6 = Steiermark;
            var txtHaupt6 = Graz;
            break;
        case (numBundes6 == 7):
            var txtBundes6 = Tirol;
            var txtHaupt6 = Innsbruck;
            break;
        case (numBundes6 == 8):
            var txtBundes6 = Voralberg;
            var txtHaupt6 = Bregenz;
            break;
        case (numBundes6 == 9):
            var txtBundes6 = Wien;
            var txtHaupt6 = Wien;
            break;
    }

    switch(numBundes7){
        case (numBundes7 == 1):
            var txtBundes7 = Burgenland;
            var txtHaupt7 = Eisenstadt;
            break;
        case (numBundes7 == 2):
            var txtBundes7 = Kärnten;
            var txtHaupt7 = Klagenfurt;
            break;
        case (numBundes7 == 3):
            var txtBundes7 = Niederösterreich;
            var txtHaupt7 = StPölten;
            break;
        case (numBundes7 == 4):
            var txtBundes7 = Oberösterreich;
            var txtHaupt7 = Linz;
            break;
        case (numBundes7 == 5):
            var txtBundes7 = Salzburg;
            var txtHaupt7 = Salzburg;
            break;
        case (numBundes7 == 6):
            var txtBundes7 = Steiermark;
            var txtHaupt7 = Graz;
            break;
        case (numBundes7 == 7):
            var txtBundes7 = Tirol;
            var txtHaupt7 = Innsbruck;
            break;
        case (numBundes7 == 8):
            var txtBundes7 = Voralberg;
            var txtHaupt7 = Bregenz;
            break;
        case (numBundes7 == 9):
            var txtBundes7 = Wien;
            var txtHaupt7 = Wien;
            break;
    }

    switch(numBundes8){
        case (numBundes8 == 1):
            var txtBundes8 = Burgenland;
            var txtHaupt8 = Eisenstadt;
            break;
        case (numBundes8 == 2):
            var txtBundes8 = Kärnten;
            var txtHaupt8 = Klagenfurt;
            break;
        case (numBundes8 == 3):
            var txtBundes8 = Niederösterreich;
            var txtHaupt8 = StPölten;
            break;
        case (numBundes8 == 4):
            var txtBundes8 = Oberösterreich;
            var txtHaupt8 = Linz;
            break;
        case (numBundes8 == 5):
            var txtBundes8 = Salzburg;
            var txtHaupt8 = Salzburg;
            break;
        case (numBundes8 == 6):
            var txtBundes8 = Steiermark;
            var txtHaupt8 = Graz;
            break;
        case (numBundes8 == 7):
            var txtBundes8 = Tirol;
            var txtHaupt8 = Innsbruck;
            break;
        case (numBundes8 == 8):
            var txtBundes8 = Voralberg;
            var txtHaupt8 = Bregenz;
            break;
        case (numBundes8 == 9):
            var txtBundes8 = Wien;
            var txtHaupt8 = Wien;
            break;
    }

    switch(numBundes9){
        case (numBundes9 == 1):
            var txtBundes9 = Burgenland;
            var txtHaupt9 = Eisenstadt;
            break;
        case (numBundes9 == 2):
            var txtBundes9 = Kärnten;
            var txtHaupt9 = Klagenfurt;
            break;
        case (numBundes9 == 3):
            var txtBundes9 = Niederösterreich;
            var txtHaupt9 = StPölten;
            break;
        case (numBundes9 == 4):
            var txtBundes9 = Oberösterreich;
            var txtHaupt9 = Linz;
            break;
        case (numBundes9 == 5):
            var txtBundes9 = Salzburg;
            var txtHaupt9 = Salzburg;
            break;
        case (numBundes9 == 6):
            var txtBundes9 = Steiermark;
            var txtHaupt9 = Graz;
            break;
        case (numBundes9 == 7):
            var txtBundes9 = Tirol;
            var txtHaupt9 = Innsbruck;
            break;
        case (numBundes9 == 8):
            var txtBundes9 = Voralberg;
            var txtHaupt9 = Bregenz;
            break;
        case (numBundes9 == 9):
            var txtBundes9 = Wien;
            var txtHaupt9 = Wien;
            break;
    }
    /*
        switch(numBundes2){
            case 1:
                var varBundes2 = document.getElementById("einBundes1").value;
                var varHaupt2 = document.getElementById("einHaupt1").value;
                break;
            case 2:
                var varBundes2 = document.getElementById("einBundes2").value;
                var varHaupt2 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes2 = document.getElementById("einBundes3").value;
                var varHaupt2 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes2 = document.getElementById("einBundes4").value;
                var varHaupt2 = document.getElementById("einHaupt4").value;
                break;
            case 5:
                var varBundes2 = document.getElementById("einBundes5").value;
                var varHaupt2 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes2 = document.getElementById("einBundes6").value;
                var varHaupt2 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes2 = document.getElementById("einBundes7").value;
                var varHaupt2 = document.getElementById("einHaupt7").value;
                break;
            case 8:
                var varBundes2 = document.getElementById("einBundes8").value;
                var varHaupt2 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes2 = document.getElementById("einBundes9").value;
                var varHaupt2 = document.getElementById("einHaupt9").value;
                break;
        }

         switch(numBundes3){
            case 1:
                var varBundes3 = document.getElementById("einBundes1").value;
                var varHaupt3 = document.getElementById("einHaupt1").value;
                 break;
            case 2:
                var varBundes3 = document.getElementById("einBundes2").value;
                var varHaupt3 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes3 = document.getElementById("einBundes3").value;
                var varHaupt3 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes3 = document.getElementById("einBundes4").value;
                var varHaupt3 = document.getElementById("einHaupt4").value;
                 break;
            case 5:
                var varBundes3 = document.getElementById("einBundes5").value;
                var varHaupt3 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes3 = document.getElementById("einBundes6").value;
                var varHaupt3 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes3 = document.getElementById("einBundes7").value;
                var varHaupt3 = document.getElementById("einHaupt7").value;
                 break;
            case 8:
                var varBundes3 = document.getElementById("einBundes8").value;
                var varHaupt3 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes3 = document.getElementById("einBundes9").value;
                var varHaupt3 = document.getElementById("einHaupt9").value;
                break;
        }

         switch(numBundes4){
            case 1:
                var varBundes4 = document.getElementById("einBundes1").value;
                var varHaupt4 = document.getElementById("einHaupt1").value;
                 break;
            case 2:
                var varBundes4 = document.getElementById("einBundes2").value;
                var varHaupt4 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes4 = document.getElementById("einBundes3").value;
                var varHaupt4 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes4 = document.getElementById("einBundes4").value;
                var varHaupt4 = document.getElementById("einHaupt4").value;
                 break;
            case 5:
                var varBundes4 = document.getElementById("einBundes5").value;
                var varHaupt4 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes4 = document.getElementById("einBundes6").value;
                var varHaupt4 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes4 = document.getElementById("einBundes7").value;
                var varHaupt4 = document.getElementById("einHaupt7").value;
                 break;
            case 8:
                var varBundes4 = document.getElementById("einBundes8").value;
                var varHaupt4 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes4 = document.getElementById("einBundes9").value;
                var varHaupt4 = document.getElementById("einHaupt9").value;
                break;
        }

         switch(numBundes5){
            case 1:
                var varBundes5 = document.getElementById("einBundes1").value;
                var varHaupt5 = document.getElementById("einHaupt1").value;
                 break;
            case 2:
                var varBundes5 = document.getElementById("einBundes2").value;
                var varHaupt5 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes5 = document.getElementById("einBundes3").value;
                var varHaupt5 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes5 = document.getElementById("einBundes4").value;
                var varHaupt5 = document.getElementById("einHaupt4").value;
                 break;
            case 5:
                var varBundes5 = document.getElementById("einBundes5").value;
                var varHaupt5 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes5 = document.getElementById("einBundes6").value;
                var varHaupt5 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes5 = document.getElementById("einBundes7").value;
                var varHaupt5 = document.getElementById("einHaupt7").value;
                 break;
            case 8:
                var varBundes5 = document.getElementById("einBundes8").value;
                var varHaupt5 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes5 = document.getElementById("einBundes9").value;
                var varHaupt5 = document.getElementById("einHaupt9").value;
                break;
        }

         switch(numBundes6){
            case 1:
                var varBundes6 = document.getElementById("einBundes1").value;
                var varHaupt6 = document.getElementById("einHaupt1").value;
                 break;
            case 2:
                var varBundes6 = document.getElementById("einBundes2").value;
                var varHaupt6 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes6 = document.getElementById("einBundes3").value;
                var varHaupt6 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes6 = document.getElementById("einBundes4").value;
                var varHaupt6 = document.getElementById("einHaupt4").value;
                 break;
            case 5:
                var varBundes6 = document.getElementById("einBundes5").value;
                var varHaupt6 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes6 = document.getElementById("einBundes6").value;
                var varHaupt6 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes6 = document.getElementById("einBundes7").value;
                var varHaupt6 = document.getElementById("einHaupt7").value;
                 break;
            case 8:
                var varBundes6 = document.getElementById("einBundes8").value;
                var varHaupt6 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes6 = document.getElementById("einBundes9").value;
                var varHaupt6 = document.getElementById("einHaupt9").value;
                break;
        }

         switch(numBundes7){
            case 1:
                var varBundes7 = document.getElementById("einBundes1").value;
                var varHaupt7 = document.getElementById("einHaupt1").value;
                 break;
            case 2:
                var varBundes7 = document.getElementById("einBundes2").value;
                var varHaupt7 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes7 = document.getElementById("einBundes3").value;
                var varHaupt7 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes7 = document.getElementById("einBundes4").value;
                var varHaupt7 = document.getElementById("einHaupt4").value;
                 break;
            case 5:
                var varBundes7 = document.getElementById("einBundes5").value;
                var varHaupt7 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes7 = document.getElementById("einBundes6").value;
                var varHaupt7 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes7 = document.getElementById("einBundes7").value;
                var varHaupt7 = document.getElementById("einHaupt7").value;
                 break;
            case 8:
                var varBundes7 = document.getElementById("einBundes8").value;
                var varHaupt7 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes7 = document.getElementById("einBundes9").value;
                var varHaupt7 = document.getElementById("einHaupt9").value;
                break;
        }

         switch(numBundes8){
            case 1:
                var varBundes8 = document.getElementById("einBundes1").value;
                var varHaupt8 = document.getElementById("einHaupt1").value;
                 break;
            case 2:
                var varBundes8 = document.getElementById("einBundes2").value;
                var varHaupt8 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes8 = document.getElementById("einBundes3").value;
                var varHaupt8 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes8 = document.getElementById("einBundes4").value;
                var varHaupt8 = document.getElementById("einHaupt4").value;
                 break;
            case 5:
                var varBundes8 = document.getElementById("einBundes5").value;
                var varHaupt8 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes8 = document.getElementById("einBundes6").value;
                var varHaupt8 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes8 = document.getElementById("einBundes7").value;
                var varHaupt8 = document.getElementById("einHaupt7").value;
                 break;
            case 8:
                var varBundes8 = document.getElementById("einBundes8").value;
                var varHaupt8 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes8 = document.getElementById("einBundes9").value;
                var varHaupt8 = document.getElementById("einHaupt9").value;
                break;
        }
         switch(numBundes9){
            case 1:
                var varBundes9 = document.getElementById("einBundes1").value;
                var varHaupt9 = document.getElementById("einHaupt1").value;
                 break;
            case 2:
                var varBundes9 = document.getElementById("einBundes2").value;
                var varHaupt9 = document.getElementById("einHaupt2").value;
                break;
            case 3:
                var varBundes9 = document.getElementById("einBundes3").value;
                var varHaupt9 = document.getElementById("einHaupt3").value;
                break;
            case 4:
                var varBundes9 = document.getElementById("einBundes4").value;
                var varHaupt9 = document.getElementById("einHaupt4").value;
                 break;
            case 5:
                var varBundes9 = document.getElementById("einBundes5").value;
                var varHaupt9 = document.getElementById("einHaupt5").value;
                break;
            case 6:
                var varBundes9 = document.getElementById("einBundes6").value;
                var varHaupt9 = document.getElementById("einHaupt6").value;
                break;
            case 7:
                var varBundes9 = document.getElementById("einBundes7").value;
                var varHaupt9 = document.getElementById("einHaupt7").value;
                 break;
            case 8:
                var varBundes9 = document.getElementById("einBundes8").value;
                var varHaupt9 = document.getElementById("einHaupt8").value;
                break;
            case 9:
                var varBundes9 = document.getElementById("einBundes9").value;
                var varHaupt9 = document.getElementById("einHaupt9").value;
                break;
        }
    */

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
    else if(numBundes8 == 3)
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


    alert(numBundes1 + " x " + varBundes1 + " x " + txtBundes1);

    if(punkte == 18)
        alert("Super! Du hast alle" + punkte + " Punkte.");
    else if(punkte > 9)
        alert("Nicht schlecht! Du hast " + punkte + " von 18 Punkte, das ist mehr als die Hälfte.");
    else if(punkte < 9)
        alert("Schade! Du hast nur " + punkte + " von 18 Punkten, das ist weniger als die Hälfte. Schau dir die Übung vielleicht nocheinmal an.");

}