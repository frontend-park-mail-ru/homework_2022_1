'use strict';

/**
 * The function prints the character and the number of repetitions,
 * if the length exceeds 9, the function will print several times "X9" and at the end,
 * if necessary, "XN", where N is the remainder of the sequence length divided by 9.
 * @param {string} charSequence  sequence of identical characters
 * @param {string} character  the symbol that makes up the sequence
 * @returns {string} a string that replaces the original sequence
 */
function replaceSequence(charSequence, character) {
  const sequenceLength = charSequence.length;
  if (sequenceLength > 1 && sequenceLength < 10) {
    return character + sequenceLength;
  }

  const ninesCounter = (sequenceLength - (sequenceLength % 9)) / 9;
  let resultString = '';

  for (let i = 0; i < ninesCounter; ++i) {
    resultString += `${character}9`;
  }

  if (sequenceLength >= 10) {
    if (sequenceLength % 9 === 1) {
      resultString += character;
    }

    if (sequenceLength % 9 > 1) {
      resultString += `${character}${sequenceLength % 9}`;
    }

    return resultString;
  }
  return character;
}

/**
 * The function implements repeat encoding (data compression), replacing repeated characters with one character and its number of repetitions
 * @param {string} str is the string that you want to convert. For example: 'ABBCCCC'
 * @returns {string} transformed string or null if the function is fed with a non-strings argument or several arguments. For example: 'AB2C4'
 */
const rle = function (str) {
  if (typeof str !== 'string' || arguments.length !== 1) {
    return null;
  }
  str = str.replace(/(.)\1*/g, replaceSequence);
  return str;
};
