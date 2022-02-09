'use strict';
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
 * @param {...*} obj objects to check.
 * @throws {InvalidArgumentException}
 */
const assertString = (...args) => {
    for (let arg of args) {
        if (typeof arg !== 'string' && !(arg instanceof String)) {
            throw InvalidArgumentException(ARG_IS_NOT_STRING_ERROR_MSG);
        }
    }
}

/**
 * @function compare
 * @description it compares two strings in Russian or English .
 * @param {string} val1 first string to compare. 
 * @param {string} val2 second string to compare.
 * @returns {(1|0|-1)} 1 if val1 > val2, 0 if val1 = val2 or -1 if val1<val2.
 * @example compare('Qwerty', 'AbCd') => 1
 * @throws {InvalidArgumentException}
 */
const compare = (val1, val2) => {
    assertString(val1, val2);
    return collator.compare(val1, val2);
}

/**
 * @function sortLetters
 * @description it sorts the letters in words alphabetically and makes the first letter of word uppercase and the rest lowercase.
 * @param {string} str input word to sort letters.
 * @returns {string} word with sorted letters within words, whith uppercase first letter .
 * @example sort('frONTend') => 'Defnnort'
 */
const sortLetters = word => {
    assertString(word);
    const sorted = word.toLowerCase().split('').sort(compare).join('');
    return sorted[0].toUpperCase() + sorted.slice(1)
}

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
    assertString(str);
    return str.split(' ')
        .map(sortLetters)
        .sort(compare).join(' ');
}
