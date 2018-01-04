var repeatNumbers = function(data) {
  var numbers = "";

  for (var i = 0; i < data.length; i++) {
    if (i > 0) {
      numbers += ", ";
    }
    for (var j = 1; j <= data[i][1]; j++) {
      numbers += data[i][0];
    }
  }
  return numbers;
}

console.log(repeatNumbers([[1, 10]]))
console.log(repeatNumbers([[1, 2], [2, 3]]))
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))
console.log(repeatNumbers([[5, 3], [1, 1], [2, 10], [7, 3]]))
