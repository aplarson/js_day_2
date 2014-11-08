function ComputerPlayer() {
}

ComputerPlayer.prototype.makeMove = function (callback) {
  var pos = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
  callback(pos);
}

module.exports = ComputerPlayer;