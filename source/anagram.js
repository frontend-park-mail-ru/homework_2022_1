'use strict';

/**
 * Checking if input is correct (array of strings)
 * @function isValidInput
 * @param {*} words
 * @returns {boolean} the result of validation (true if input is correct, false if input is incorrect)
 */
const isValidInput = (words) => {
    if (!Array.isArray(words)) {
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

/**
 * Finding anagrams in array of strings
 * @function anagram
 * @param {string[]} words 
 * @returns {object} array of arrays with anagrams
 */
const anagram = (words) => {
    if (!isValidInput(words)) {
        throw "The input is incorrect!";
    }
    words.sort();
    
    let map = new Map();
    let result = [];
    
    words.forEach((word) => {
        if (!map.has(wordToKey(word))) {
            map.set(wordToKey(word), new Array())
        }
        map.get(wordToKey(word)).push(word);
    })
    
    return Array.from(map.values()).filter((elem) => elem.length > 1);
}
