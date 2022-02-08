'use strict';

const COLLATOR = new Intl.Collator('ru');

/**
 * Comparison of two strings in the 'ru' locale
 * @param {string} value1
 * @param {string} value2
 * @returns {number} the result of the comparison in the form of a number (< 0 if value1 < value2, 0 if value1 == value2, > 0 else)
 */
const compare = (value1, value2) => {
    return COLLATOR.compare(value1, value2);
}

/**
 * Sorts the letters in words, and then the resulting words. In this case, the first
 * letter of each word is capitalized, the remaining letters are lowercase.
 * @param {string} str Input string
 * @returns {string} A string with sorted words and letters in them, separated by a space
 * @example sort('i love frontend');
 * returns 'Defnnort Elov I'
 */
const sort = (str) => {
    if (typeof str != 'string') {
        throw Error('The argument can only be a string');
    }

    return str.split(' ').reduce((prev, current, ind) => {
        const new_word = current.toLowerCase().split('').sort(compare).join('');
        prev.push(new_word[0].toUpperCase() + new_word.slice(1));
        return prev;
    }, []).sort(compare).join(' ');
}
