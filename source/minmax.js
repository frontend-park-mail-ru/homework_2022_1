'use strict';

/**
 * find min and max value in string
 * @param {string} strNumbers - The string with numbers
 * @returns {[minValue, maxValue]} - The max and the min of input string
 */

const minmax = (strNumbers) => {
    const numbers = strNumbers.split(' ').map(parseFloat);
    let arr_digits = [];
    numbers.forEach((item) => {
        if (!isNaN(item)) {
            arr_digits.push(item);
        }
    });
    if (arr_digits.length) {
        return [Math.min.apply(null, arr_digits),
            Math.max.apply(null, arr_digits)];
    }
    return [undefined, undefined];
}
