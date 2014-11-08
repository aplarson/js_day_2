function Clock() {
  this.time = null;
}

Clock.TICK = 5000;

Clock.printTime = function () {
  console.log(new Date())
};

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  var hours = this.time.getHours();
  var minutes = this.time.getMinutes();
  var seconds = this.time.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);
};

Clock.prototype.run = function () {
  var that = this;
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  this.time = new Date();
  that.printTime();
  // that.apply(that.printTime());
  // while (true){
    window.setTimeout(function() {
      that._tick.bind(that);
    }, Clock.TICK);
  // }
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
  var that = this;
  var sec = this.time.getSeconds() + 5;
  this.time.setSeconds(sec);
  this.printTime();
  window.setTimeout(function() {
    that._tick.bind(that);
  }, Clock.TICK);
  // window.setInterval(that._tick.bind(that), that.TICK);
};

// var clock = new Clock();
// clock.run();
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft > 0) {
    reader.question("Enter a number\n", function (answer) {
    var num = parseInt(answer, 10);
    sum += num;
    addNumbers(sum, (numsLeft - 1), completionCallback);
  });
  
  } else {
    reader.close();
    completionCallback(sum);
  }
}

// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });

function askIfLessThan(el1, el2, callback) {
  reader.question(("Is " + el1 + " greater than " + el2 + "? (t/f)\n"), 
        function (answer) {
    if (answer === "t") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i < (arr.length - 1)) {
    askIfLessThan(arr[i], arr[i + 1], function (isLessThan) {
      if (isLessThan) {
        madeAnySwaps = true;
        var first = arr[i];
        var second = arr[i + 1];
        arr[i] = second;
        arr[i + 1] = first;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  
  outerBubbleSortLoop(true);
}

Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    return fn.apply(context);
  };
};

// function Dog(name) {
//   this.name = name;
// }

var sayName = function() {
  return "Woof! My name is " + this.name;
}
var teddy = { name: "Teddy" }

var boundSayName = sayName.myBind(teddy);
var statement = boundSayName;

console.log(statement);
