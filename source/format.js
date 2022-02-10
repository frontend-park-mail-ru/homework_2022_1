'use strict';

/**
 * Formatting the given array (numbers) into several (columnNumbers) columns  
 * @param {array} numbers - The numbers to be formatted.
 * @param {number} columnNumbers - The ammount of columns for formatting.
 * @returns {string} - The formated string.
 */
const format = (numbers, columnNumbers) => {
    let highestMultiIndent = [];
    let output = '';

    for (let j = 0; j < columnNumbers; j++) {
        let highestIndent = 0;
        for (let i = (0 + j); i < numbers.length; i += columnNumbers) {
            highestIndent = (`${numbers[i]}`.length > highestIndent)? `${numbers[i]}`.length : highestIndent; 
        }
        highestMultiIndent[j] = highestIndent;
    }

    for (let i = 0; i < numbers.length; i += columnNumbers) {
        for (let j = 0; j < columnNumbers; j++) {
            if (numbers[i + j] !== undefined) {
                output += ((j == 0)? (' '.repeat(highestMultiIndent[j]  - `${numbers[i + j]}`.length) + numbers[i + j]) : (' '.repeat(highestMultiIndent[j] + 1 - `${numbers[i + j]}`.length) + numbers[i + j]));
            }
        }
        if ((i + columnNumbers) < numbers.length) {
            output += '\n';
        }
    }
    
    return (output);
}
