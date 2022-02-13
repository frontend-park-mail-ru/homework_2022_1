'use strict'

/**
 * The function implements repeat encoding (data compression), replacing repeated characters with one character and its number of repetitions
 * @param {string} str Is the string that you want to convert. For example: 'ABBCCCC'
 * @returns {string|null} the transformed string. For example: 'AB2C4'
 */
const rle = function (str) {
  if (typeof str !== 'string' || arguments.length !== 1) {
    return null;
  }
  let counter = 1;
  let arrayStr = str.split('');

  arrayStr = arrayStr.reduce((resStr, currentCharacter) => {
    const previousCharacter = resStr[resStr.length - 1];

    if (previousCharacter === currentCharacter) {
      if (counter === 9) {
        counter = 1;
        return `${resStr}9${currentCharacter}`;
      }

      ++counter;
      return resStr;
    }

    if (counter === 1) {
      return `${resStr}${currentCharacter}`;
    }

    const counterResult = counter;
    counter = 1;
    return `${resStr}${counterResult}${currentCharacter}`;
  });

  arrayStr = String(arrayStr);
  if (counter > 1) {
    arrayStr += counter;
  }
  return (arrayStr);
};
