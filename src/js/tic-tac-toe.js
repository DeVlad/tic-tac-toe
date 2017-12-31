// Tic Tac Toe

function ticTacToe() {
    this.moves = [];
    this.player = 'X';
    this.computer = 'O';
    this.initEvents();
}

ticTacToe.prototype.displayMove = function (position) {
    //console.log('Display Move:', position, player);
    document.getElementById(position).innerHTML = this.player;
};

ticTacToe.prototype.initEvents = function () {
    document.getElementById("btn-start").addEventListener("click", this.resetBoard.bind(this));
    document.getElementById("pos-1").addEventListener("click", this.displayMove.bind(this, "pos-1"));
    document.getElementById("pos-2").addEventListener("click", this.displayMove.bind(this, "pos-2"));
    document.getElementById("pos-3").addEventListener("click", this.displayMove.bind(this, "pos-3"));
    document.getElementById("pos-4").addEventListener("click", this.displayMove.bind(this, "pos-4"));
    document.getElementById("pos-5").addEventListener("click", this.displayMove.bind(this, "pos-5"));
    document.getElementById("pos-6").addEventListener("click", this.displayMove.bind(this, "pos-6"));
    document.getElementById("pos-7").addEventListener("click", this.displayMove.bind(this, "pos-7"));
    document.getElementById("pos-8").addEventListener("click", this.displayMove.bind(this, "pos-8"));
    document.getElementById("pos-9").addEventListener("click", this.displayMove.bind(this, "pos-9"));
    document.getElementById("player-X").addEventListener("click", this.choosePlayer.bind(this, 'X'));
    document.getElementById("player-0").addEventListener("click", this.choosePlayer.bind(this, '0'));
};

ticTacToe.prototype.resetBoard = function () {
    console.log('reset board');
    var space = "&nbsp;";
    var elements = document.getElementsByClassName("square");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = space;
    }
};

ticTacToe.prototype.choosePlayer = function (choice) {
    // TODO: check if game in progress
    if (choice === 'X') {
        this.player = 'X';
        this.computer = '0';
    } else {
        this.player = '0';
        this.computer = 'X';
    }
};

var game = new ticTacToe();
