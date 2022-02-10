'use strict';

/**
 * Finding pairs of anagramms in array of strings
 * @function anagram
 * @param {object} words 
 * @returns {object} array of arrays with pairs of anagramms
 */
const anagram = (words) => {
    if (!isValidInput(words)) {
        return null;
    }
    words.sort();
    
    let map = new Map();
    let result = [];
    
    words.forEach((word) => {
        if (map.has(wordToKey(word))) {
            result.push([map.get(wordToKey(word)), word])
        }
        map.set(wordToKey(word), word);
    })
        
    return result.sort();
}

/**
 * Checking if input is correct (array of strings)
 * @function isValidInput
 * @param {object} words
 * @returns {boolean} the result of validation (true if input is correct, false if input is incorrect)
 */
const isValidInput = (words) => {
    if (typeof (words) != "object") {
        return false;
    }
    words.forEach((word) => {
        if (typeof (word) != "string") {
            return false
        }
    })
    return true;
}

/**
 * Creating a key from the word
 * @function wordToKey
 * @param {string} word
 * @returns {string} the key composed of sorted word characters
 * @example wordToKey(cadb);
 *          returns abcd
 */
const wordToKey = (word) => word.split('').sort().join('');
