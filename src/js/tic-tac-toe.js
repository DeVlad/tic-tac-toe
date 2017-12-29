// Tic Tac Toe

function ticTacToe() {    
    this.moves = [];     
    this.player = 'X';
    this.computer = '0';
    this.initEvents();
}

ticTacToe.prototype.displayMove = function (position, player) {
    //console.log('Display Move:', position, player);
    document.getElementById(position).innerHTML = player;
};

ticTacToe.prototype.initEvents = function (buttons) {    
    document.getElementById("pos-1").addEventListener("click", this.displayMove.bind(this, "pos-1", this.player));
    document.getElementById("pos-2").addEventListener("click", this.displayMove.bind(this, "pos-2", this.player));
    document.getElementById("pos-3").addEventListener("click", this.displayMove.bind(this, "pos-3", this.player));
    document.getElementById("pos-4").addEventListener("click", this.displayMove.bind(this, "pos-4", this.player));
    document.getElementById("pos-5").addEventListener("click", this.displayMove.bind(this, "pos-5", this.player));
    document.getElementById("pos-6").addEventListener("click", this.displayMove.bind(this, "pos-6", this.player));
    document.getElementById("pos-7").addEventListener("click", this.displayMove.bind(this, "pos-7", this.player));
    document.getElementById("pos-8").addEventListener("click", this.displayMove.bind(this, "pos-8", this.player));
    document.getElementById("pos-9").addEventListener("click", this.displayMove.bind(this, "pos-9", this.player));
};

var game = new ticTacToe();

