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
}


var pascal = function(input) {
  var words = input.split(" ");
  var output = [];

  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i][0].toUpperCase();
    output.push(words[i]);
    output[i] = output[i].toLowerCase().replace(output[i][0], firstLetter);
  }
  return output.join('');
}


var snake = function(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      output += '_';
    } else {
      output += input[i];
    }

  }
  return output;
}


var kebab = function(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) {
    if (input[i] == ' ') {
      output += '-';
    } else {
      output += input[i];
    }

  }
  return output;
}


var title = function(input) {
  var words = input.split(" ");
  var output = [];

  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i][0].toUpperCase();
    output.push(words[i]);
    output[i] = output[i].toLowerCase().replace(output[i][0], firstLetter);
  }
  return output.join(" ");
}


var vowel = function(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) {
    var upperCase = input[i].toUpperCase();
    if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u') {
      output += input[i].replace(input[i], upperCase);
    } else {
      output += input[i];
    }
  }
  return output;
}


var consonant = function(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) {
    var upperCase = input[i].toUpperCase();
    if (input[i] != 'a' && input[i] != 'e' && input[i] != 'i' && input[i] != 'o' && input[i] != 'u') {
      output += input[i].replace(input[i], upperCase);
    } else {
      output += input[i];
    }
  }
  return output;
}


var upper = function(input) {
  return input.toUpperCase();
}

var lower = function(input) {
  return input.toLowerCase();
}


var makeCase = function(text, type) {
  var output;

  var cases = {
    'camel': camelCase(),
    'pascal': pascal(),
    'snake': snake(),
    'kebab': kebab(),
    'title': title(),
    'vowel': vowel(),
    'consonant': consonant(),
    'upper': upper(),
    'lower': lower()
  };

  for (key in cases) {
    if (key == type) {
      output =
    }
}
/*
  if (Array.isArray(type) == false) {
    switch (type) {
      case 'camel':
        output = camelCase(text);
        break;
      case 'pascal':
        output = pascal(text);
        break;
      case 'snake':
        output = snake(text);
        break;
      case 'kebab':
        output = kebab(text);
        break;
      case 'title':
        output = title(text);
        break;
      case 'vowel':
        output = vowel(text);
        break;
      case 'consonant':
        output = consonant(text);
        break;
      case 'upper':
        output = upper(text);
        break;
      case 'lower':
        output = lower(text);
        break;
    }
  }
  return output;
}
*/
console.log(makeCase("this is a string", ['camel']));





