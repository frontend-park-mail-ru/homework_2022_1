'use strict';

/**
 * find min and max value in string
 * @param {string} strNumbers - The string with numbers
 * @returns {[minValue, maxValue]} - The max and the min of input string
 */

const minmax = (strNumbers) => {
    if (typeof strNumbers !== 'string') {
        return [undefined, undefined];
    }
    const numbers = strNumbers.split(' ').map(parseFloat);
    const arrDigits = [];
    numbers.forEach((number) => {
        if (!isNaN(number)) {
            arrDigits.push(number);
        }
    });
    if (arrDigits.length) {
        return [
            Math.min(...arrDigits),
            Math.max(...arrDigits)
        ];
    }
    return [undefined, undefined];
};
