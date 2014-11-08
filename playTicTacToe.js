var ttt = require("./ttt");
console.log(ttt);

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new ttt.Game(reader);
game.run(function () {
  console.log("Game over!");
  reader.close();
});