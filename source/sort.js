'use strict';

/**
 * it sorts the letters in words alphabetically and then sorts the resulting words in a sentence. 
 * Makes the first letter of each word uppercase and the rest lowercase
 * @param {string} str -- input string to process
 * @returns {string}a string with sorted letters within words, sorted words in a sentence, 
 * 					  where the first letter of each word is uppercase and the rest are lowercase
 * @example sort('i love frontend');
 * returns 'Defnnort Elov I'
 */

const collator = new Intl.Collator('ru');

const compare = (val1, val2) => { return collator.compare(val1, val2); }

const sort = (str) => {
    if (typeof str !== 'string' && !(str instanceof String)) {
        throw Error('The argument must be string');
    }

    return str.toLowerCase().split(' ')
        .map(word => { const sorted = word.split('').sort(compare).join(''); return sorted[0].toUpperCase() + sorted.slice(1) })
        .sort(compare).join(' ');
}
