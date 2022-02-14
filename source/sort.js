// @ts-check

/** @global
 *  @constant
 *  @type {string}
 *  @default
*/
const ARG_IS_NOT_STRING_ERROR_MSG = 'The argument must be string';

/** @global
 *  @constant
 *  @type {object}
 *  @default
*/
const collator = new Intl.Collator('ru');

/**
 * @function assertString
 * @description it throws exceptions if at least for one argument, its type is not 'string' and it is not instance of String.
 * @param {...*} args objects to check.
 * @throws {InvalidArgumentException}
 */
const assertStrings = (...args) => {
  if (args.some((arg) => (typeof arg !== 'string' && !(arg instanceof String)))) {
    throw InvalidArgumentException(ARG_IS_NOT_STRING_ERROR_MSG);
  }
};

/**
 * @function compareStrings
 * @description it compares two strings in Russian or English .
 * @param {string} str1 first string to compare.
 * @param {string} str2 second string to compare.
 * @returns {(1|0|-1)} 1 if val1 > val2, 0 if val1 = val2 or -1 if val1<val2.
 * @example compare('Qwerty', 'AbCd') => 1
 * @throws {InvalidArgumentException}
 */
const compareStrings = (str1, str2) => {
  assertStrings(str1, str2);
  return collator.compare(str1, str2);
};

/**
 * @function sortLetters
 * @description it sorts the letters in words alphabetically and makes the first letter of word uppercase and the rest lowercase.
 * @param {string} word input word to sort letters.
 * @returns {string} word with sorted letters within words, whith uppercase first letter .
 * @example sort('frONTend') => 'Defnnort'
 */
const sortLetters = (word) => {
  assertStrings(word);
  const sorted = word.toLowerCase().split('').sort(compareStrings).join('');
  return sorted[0].toUpperCase() + sorted.slice(1);
};

/**
 * @function sort
 * @description it sorts the letters in words alphabetically and then sorts the resulting words in a sentence.
 * Makes the first letter of each word uppercase and the rest lowercase
 * @param {string} str input string to process.
 * @returns {string} string with sorted letters within words, sorted words in a sentence,
 *                    where the first letter of each word is uppercase and the rest are lowercase.
 * @throws {InvalidArgumentException}
 * @example sort('i love frontend') => 'Defnnort Elov I'
 */
const sort = (str) => {
  assertStrings(str);
  return str.split(' ')
    .map(sortLetters)
    .sort(compareStrings)
    .join(' ');
};
