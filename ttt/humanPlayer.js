function HumanPlayer(reader) {
  this.reader = reader
};

HumanPlayer.prototype.makeMove = function (callback) {
  this.reader.question("Where would you like to move? (ex: 0,1)\n", function (answer) {
    var pos = answer.split(",");
    callback(pos);
  });
};

module.exports = HumanPlayer;