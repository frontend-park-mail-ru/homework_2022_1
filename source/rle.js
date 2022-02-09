'use strict';

/** @global
 *  @constant
 *  @type {string}
 *  @default
 */

/**
 * The function prints the character and the number of repetitions,
 * if the length exceeds 9, the function will print several times "X9" and at the end,
 * if necessary, "XN", where N is the remainder of the sequence length divided by 9.
 * @param {string} m  Sequence of identical characters
 * @param {string} c  The symbol that makes up the sequence
 * @returns {string} A string that replaces the original sequence
 */
function printCharacterAndLength(m, c) {
  if (m.length > 1 && m.length < 10) {
    return c + m.length;
  }
  if (m.length >= 10) {
    let ninesCounter = (m.length - (m.length % 9)) / 9;
    let result = '';
    for (let i = 0; i < ninesCounter; ++i) {
      result += c + '9';
    }
    if (m.length % 9 != 0) {
      result += c + String(m.length % 9);
      return result;
    }
    return result;
  }
  return c;
}

/**
 * The function implements repeat encoding (data compression), replacing repeated characters with one character and its number of repetitions
 * @param {string} str Is the string that you want to convert. For example: 'ABBCCCC'
 * @returns {string} the transformed string. For example: 'AB2C4'
 */
const rle = function (str) {
  if (typeof str !== 'string') {
    return null;
  }
  str = str.replace(/(.)\1*/g, printCharacterAndLength);
  return str;
};
