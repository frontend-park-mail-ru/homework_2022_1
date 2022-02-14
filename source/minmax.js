'use strict';

/**
 * find min and max value in string
 * @param {string} strNumbers
 * @return {[minValue, maxValue]}
 */

const minmax = (strNumbers) => {
    strNumbers = strNumbers.replace(/[а-я\,\+]/gi, '');
    if (strNumbers.replace(/\s/g, '').length == 0)
        return [undefined, undefined];
    let numbers = strNumbers.split(' ');
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return [min, max];
}
