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
        numbers.reduce((previosValue, currentValue, currenIndex, array) => {
            if (currenIndex === j || (currenIndex % columnNumbers) === j) {
                highestIndent = (currentValue.toString().length > highestIndent)? currentValue.toString().length : highestIndent; 
            }
        }, 0);

        highestMultiIndent[j] = highestIndent;
    }

    for (let i = 0; i < numbers.length; i += columnNumbers) {
        for (let j = 0; j < columnNumbers; j++) {
                if (numbers[i + j] !== undefined) {
                    let borderCase = (j == 0)? 0 : 1;
                    output += ' '.repeat(highestMultiIndent[j] + borderCase - numbers[i + j].toString().length) + numbers[i + j];
                }
        }
        if ((i + columnNumbers) < numbers.length) {
            output += '\n';
        }
    }
    
    return output;
}