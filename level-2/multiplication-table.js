var multiplicationTable = function(maxValue) {

  var result = '';
  var n = 0;

  for (var i = 1; i <= maxValue * 2 + 1; i++) {

    if (i % 2 != 0) {

      for (var j = 1; j <= maxValue; j++) {
        if (maxValue < 4) {
          if (j == maxValue) {
            result += '+---+';
          } else {
            result += '+---';
          }
        } else if (maxValue < 10) {
          if (j == maxValue) {
            result += '+----+';
          } else {
            result += '+----';
          }
        } else {
          if (j == maxValue) {
            result += '+-----+';
          } else {
            result += '+-----';
          }
        }
      }
    } else {

      n = i / 2;

      for (var k = 1; k <= maxValue; k++) {

        if (maxValue < 4) {
          if (k == maxValue) {
            result += '| ' + (n * k) + ' |';
          } else {
            result += '| ' + (n * k) + ' ';
          }
        } else if (maxValue < 10) {
          if (k == maxValue) {
            if ((n * k) < 10) {
              result += '| ' + (n * k) + '  |';
            } else {
              result += '| ' + (n * k) + ' |';
            }
          } else {
            if ((n * k) < 10) {
              result += '| ' + (n * k) + '  ';
            } else {
              result += '| ' + (n * k) + ' ';
            }
          }
        } else {
          if (k == maxValue) {
            if ((n * k) < 10) {
              result += '| ' + (n * k) + '   |';
            } else if ((n * k) < 100) {
              result += '| ' + (n * k) + '  |';
            } else {
              result += '| ' + (n * k) + ' |';
            }
          } else {
            if ((n * k) < 10) {
              result += '| ' + (n * k) + '   ';
            } else if ((n * k) < 100) {
              result += '| ' + (n * k) + '  ';
            } else {
              result += '| ' + (n * k) + ' ';
            }
          }
        }
      }
    }

    result += '\n';
  }

  return result;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));