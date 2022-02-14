'use strict'

/**
 * The function implements repeat encoding (data compression), replacing repeated characters with one character and its number of repetitions
 * @param {string} str Is the string that you want to convert. For example: 'ABBCCCC'
 * @returns {string|null} the transformed string. For example: 'AB2C4'
 */
const rle = (str) => {
  if (typeof str !== 'string') {
    return null;
  }
  let counter = 1;

  return str.split('').reduce((resStr, currentCharacter, index) => {
    const previousCharacter = resStr[resStr.length - 1];

    if (previousCharacter === currentCharacter) {
      if (counter === 9) {
        counter = 1;
        return `${resStr}9${currentCharacter}`;
      }

      ++counter;
      if (index === str.length - 1) {
        return `${resStr}${counter}`;
      }
      return resStr;
    }

    if (counter === 1) {
      return `${resStr}${currentCharacter}`;
    }

    const counterResult = counter;
    counter = 1;
    return `${resStr}${counterResult}${currentCharacter}`;
  });
};
