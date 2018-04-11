
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
