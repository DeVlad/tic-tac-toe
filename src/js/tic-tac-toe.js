// Tic Tac Toe


function ticTacToe() {    
    this.moves = [];
    this.initEvents();    
}


ticTacToe.prototype.initEvents = function (buttons) {
    //console.log(settings);
    document.getElementById("pos-1").addEventListener("click", function () {   
        console.log('pos1 clicked');
    });
    document.getElementById("pos-2").addEventListener("click", function () {   
        console.log('pos2 clicked');
    });
    document.getElementById("pos-3").addEventListener("click", function () {   
        console.log('pos3 clicked');
    });
    document.getElementById("pos-4").addEventListener("click", function () {   
        console.log('pos4 clicked');
    });
    document.getElementById("pos-5").addEventListener("click", function () {   
        console.log('pos5 clicked');
    });
    document.getElementById("pos-6").addEventListener("click", function () {   
        console.log('pos6 clicked');       
    });
    document.getElementById("pos-7").addEventListener("click", function () {   
        console.log('pos7 clicked');
    });
    document.getElementById("pos-8").addEventListener("click", function () {   
        console.log('pos8 clicked');
    });
    document.getElementById("pos-9").addEventListener("click", function () {   
        console.log('pos9 clicked');       
    });    
}

var game = new ticTacToe();

