'use strict';

const anagram = function (words) {
    words.sort();

    let wordsWithSortedLetters = []
    for (let i = 0; i < words.length; i++) {
        wordsWithSortedLetters.push(sortLettersInWord(words[i]));
    }
    
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (wordsWithSortedLetters[i] == wordsWithSortedLetters[j]) {
                result.push([words[i], words[j]]);
        }
    }
}
    return result;
}

function sortLettersInWord(word) {
    return word.split('').sort().join('');
}
