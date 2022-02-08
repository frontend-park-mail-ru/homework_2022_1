'use strict';


function roman(number) {
  let dataset = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }

  let result = "";
  if (typeof(number) == "number"){
    for (var key of Object.keys(dataset)) {
      var temp = Math.floor(number / dataset[key]);
      number -= temp * dataset[key];
      result += key.repeat(temp);
    }
  }
  else if(typeof(number) == "string"){
    const re = /\d+/;
    number = number.toUpperCase();
    if (number.match(re)) {
      for (var key of Object.keys(dataset)) {
        var temp = Math.floor(number / dataset[key]);
        number -= temp * dataset[key];
        result += key.repeat(temp);
      }
    }
    else {
      var res = 0;
      var prevnum = dataset[number.charAt(0)];
      for (var i = 1; i < number.length; i++) {
        var temp = dataset[number.charAt(i)];
        if (temp <= prevnum)
          res += prevnum;
        else
          res -= prevnum;
        prevnum = temp;
      }
      res += prevnum;
      return res;
    }
  }
  return result;
}
