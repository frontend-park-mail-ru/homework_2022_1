'use strict';

const collator = new Intl.Collator('ru');

const compare = (value1, value2) => {
    return collator.compare(value1, value2);
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
        return '';
    }

    return str.split(' ').reduce((prev, current, ind) => {
        let new_word = current.toLowerCase().split('').sort(compare).join('');
        prev.push(new_word[0].toUpperCase() + new_word.slice(1));
        return prev;
    }, []).sort(compare).join(' ');
}
