'use strict';

/**
 * find min and max value in string
 * @param {string} strNumbers - The string with numbers
 * @returns {[minValue, maxValue]} - The max and the min of input string
 */

const minmax = (strNumbers) => {
    if (!(typeof strNumbers === 'string')) {
        return [undefined, undefined];
    }
    const numbers = strNumbers.split(' ').map(parseFloat);
    const arrDigits = [];
    numbers.forEach((item) => {
        if (!isNaN(item)) {
            arrDigits.push(item);
        }
    });
    if (arrDigits.length) {
        return [
            Math.min.apply(null, arrDigits),
            Math.max.apply(null, arrDigits)
        ];
    }
    return [undefined, undefined];
}
