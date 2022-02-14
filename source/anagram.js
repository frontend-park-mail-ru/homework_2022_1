'use strict';

/**
 * Checking if input is correct (array of strings)
 * @param {Array} words - input data which requires validation for correct future usage
 * @returns {boolean} the result of validation (true if input is correct, false if input is incorrect)
 */
const isValidInput = (words) => {
    if (!Array.isArray(words)) {
        return false;
    }

    return !words.some(elem => typeof(elem) !== "string");
}

/**
 * Creating a key from the word
 * @param {string} word - the word from which we are genereting the key
 * @returns {string} the key composed of sorted word characters
 * @example sortWordByLetters('cadb');
 *          returns 'abcd'
 */
const sortWordByLetters = (word) => word.split('').sort().join('');

/**
 * Finding anagrams in array of strings
 * @param {Array} words - array of words(string) where we are searching anagrams
 * @returns {Array} sorted array of arrays with anagrams
 * @example anagram(['cadb', 'bdac', 'edf', 'abc', 'def']);
 *          returns [['bdac', 'cadb'], ['def', 'edf']]
 */
const anagram = (words) => {
    if (!isValidInput(words)) {
        throw "The input is incorrect!";
    }
    words.sort();

    const mapOfAnagrams = new Map();

    words.forEach((word) => {
        const wordSortedByLetters = sortWordByLetters(word);

        if (!mapOfAnagrams.has(wordSortedByLetters)) {
            mapOfAnagrams.set(wordSortedByLetters, new Array());
        }
        mapOfAnagrams.get(wordSortedByLetters).push(word);
    })

    return Array.from(mapOfAnagrams.values()).filter((elem) => elem.length > 1);
}
