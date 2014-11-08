function Board() {
  this.grid = [[null, null, null], [null, null, null], [null, null, null]],
  this.xPositions = [],
  this.oPositions = [];
}

Board.GRIDVALUES = [[4, 3, 8], [9, 5, 1], [2, 7, 6]];

Board.prototype.placeMark = function (pos, mark) {
  if (this.validMove(pos)) {
    this.grid[pos[0]][pos[1]] = mark;
    if (mark === "X") {
      this.xPositions.push(Board.GRIDVALUES[pos[0]][pos[1]]);
    } else {
      this.oPositions.push(Board.GRIDVALUES[pos[0]][pos[1]]);
    }
    return true;
  } else {
    return false;
  }
};

Board.prototype.validMove = function (pos) {
  if (this.grid[pos[0]][pos[1]] === null) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.winner = function (xVal) {
  for(var i = 0; i < xVal.length; i++) {
    for (var j = i + 1; j < xVal.length; j++) {
      for (var k = j + 1; k < xVal.length; k++) {
        if( xVal[i] + xVal[j] + xVal[k] === 15 ) {
          return true;
        }
      }
    }
  }
  return false;
};

Board.prototype.won = function () {
  if ( this.winner(this.xPositions) ) {
    return "X wins!";
  } else if ( this.winner(this.oPositions) ) {
    return "O wins!";
  } else {
    return false;
  }
};

Board.prototype.print = function () {
  this.grid.forEach( function (el) {
    console.log(JSON.stringify(el));
  });
};

Board.prototype.tie = function () {
  if ((this.xPositions.length + this.oPositions.length) === 9) {
    return true;
  } else {
    return false;
  }
};

module.exports = Board;
