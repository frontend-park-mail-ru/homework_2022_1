'use strict';

/**
 * find min and max value in string
 * @param {string} strNumbers - The string with numbers
 * @returns {[minValue, maxValue]} - The max and the min of input string
 */

const minmax = (strNumbers) => {
    strNumbers = strNumbers.replace(/[а-я\,\+]/gi, '');
    if (strNumbers.replace(/\s/g, '').length === 0) {
        return [undefined, undefined];
    }
    const numbers = strNumbers.split(' ');
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [min, max];
}
