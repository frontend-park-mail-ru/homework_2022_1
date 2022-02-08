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
 * @function compare
 * @description it compares two strings in Russian or English .
 * @param {string} val1 first string to compare. 
 * @param {string} val2 second string to compare.
 * @returns {(1|0|-1)} 1 if val1 > val2, 0 if val1 = val2 or -1 if val1<val2.
 * @example compare('Qwerty', 'AbCd') => 1
 * @throws {InvalidArgumentException}
 */
const compare = (val1, val2) => {
    if (typeof val1 !== 'string' && !(val1 instanceof String) || typeof val2 !== 'string' && !(val2 instanceof String)) {
        throw InvalidArgumentException(ARG_IS_NOT_STRING_ERROR_MSG);
    }
    return collator.compare(val1, val2);
}

/**
 * @function sortLetters
 * @description it sorts the letters in words alphabetically and makes the first letter of each word uppercase and the rest lowercase.
 * @param {string} str input word to sort letters.
 * @returns {string} word with sorted letters within words, whith uppercase first letter .
 * @example sort('frONTend') => 'Defnnort'
 */
const sortLetters = word => {
    if (typeof word !== 'string' && !(word instanceof String)) {
        throw InvalidArgumentException(ARG_IS_NOT_STRING_ERROR_MSG);
    }
    const sorted = word.split('').sort(compare).join('');
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
    if (typeof str !== 'string' && !(str instanceof String)) {
        throw InvalidArgumentException(ARG_IS_NOT_STRING_ERROR_MSG);
    }

    return str.toLowerCase().split(' ')
        .map(sortLetters)
        .sort(compare).join(' ');
}
