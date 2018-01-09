var camelCase = function(input) {
  var words = input.split(" ");
  var output = [];

  words[0] = words[0].toLowerCase();
  output.push(words[0]);

  for (var i = 1; i < words.length; i++) {
    var firstLetter = words[i][0].toUpperCase();
    output.push(words[i]);
    output[i] = output[i].toLowerCase().replace(output[i][0], firstLetter);
  }
  return output.join('');
  //return words;
}

console.log(camelCase('THIS is a stRIng'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
