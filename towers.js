

function HanoiGame() {
  this.stacks = [[3, 2, 1], [], []];
}

HanoiGame.prototype.isWon = function () {
  if (this.stacks[1].length === 3 || this.stacks[2].length === 3) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];
  // var discToMove = startTower[startTower.length - 1];
  // var discToCover = endTower[endTower.length - 1];
  if ((startTower[startTower.length - 1] !== undefined && endTower[endTower.length - 1] === undefined) || startTower[startTower.length - 1] < endTower[endTower.length - 1]) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    (this.stacks[endTowerIdx]).push(this.stacks[startTowerIdx].pop());
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function (callback) {
  var that = this;

  this.print.apply(that);

  reader.question("From where and to where do you want to move (ex: 1,2)?\n", function (answer) {
    var ansArr = answer.split(",");

    return callback.apply(that, ansArr);
  });
};

HanoiGame.prototype.run = function (completionCallback) {
  var that = this;

  that.promptMove(function (startTowerIdx, endTowerIdx) {

    var moveSuccess = this.move(startTowerIdx, endTowerIdx);
    if (moveSuccess === false) {
      console.log("Move failed");
    }
    if (this.isWon()) {
      console.log("You win!");
      completionCallback();

    } else {
      this.run(completionCallback);
    }
  });
};

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new HanoiGame();
game.run( function () { reader.close(); });
