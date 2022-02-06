'use strict';

const collator = new Intl.Collator('ru');

function upperFirstSym(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function compare(value1, value2) {
    return collator.compare(value1, value2);
}

/**
 * Sorts the letters in words, and then the resulting words. In this case, the first
 * letter of each word is capitalized, the remaining letters are lowercase.
 * @param str Input string
 * @returns {string} A string with sorted words and letters in them, separated by a space
 * @example sort('i love frontend');
 * returns 'Defnnort Elov I'
 */
const sort = (str) => {
    let words = str.split(' ');
    let new_words = [];

    words.forEach((word) => {
        let new_word = word.toLowerCase().split('').sort(compare).join('');
        new_word = upperFirstSym(new_word);
        new_words.push(new_word);
    });

    return new_words.sort(compare).join(' ');
}