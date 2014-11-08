var Board = require("./board");
var HumanPlayer = require("./humanPlayer");
var ComputerPlayer = require("./computerPlayer");

function Game(reader) {
  this.board = new Board();
  this.xPlayer = new ComputerPlayer();
  this.oPlayer = new ComputerPlayer();
  this.reader = reader;
  this.currentPlayer = "X";
};

Game.prototype.run = function (completionCallback) {
  var that = this;
  var winner = this.board.won();
  var player = (this.currentPlayer === "X" ? this.xPlayer : this.oPlayer );
  if (winner) {
    this.board.print();
    console.log(winner);
    completionCallback();
  } else if (this.board.tie()) {
    this.board.print();
    console.log("The only winning move is not to play");
    completionCallback();
  } else {
    this.board.print();
    console.log(this.currentPlayer + " turn\n");
    player.makeMove (function (pos) {
      var moveMade = this.board.placeMark(pos, this.currentPlayer);
      if (moveMade) {
        this.currentPlayer = (this.currentPlayer === "X" ? "O" : "X");
      }
      this.run(completionCallback);
    }.bind(that));
  }
};

module.exports = Game;