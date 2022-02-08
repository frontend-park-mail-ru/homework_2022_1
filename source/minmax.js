'use strict';

/**
 * find min and max value in string
 * @param {string} value
 * @returns {Array<number>}
 */
const minmax = (value) => {
    let minmax = [undefined, undefined];
    if (value === '') {
        return minmax;
    }
    const splitValue = value.split(' ');

    splitValue.forEach((item) => {
        const number = Number(item);
        if (isNaN(number)) {
            return;
        }
        if (!minmax[0] || number === -Infinity || minmax[0] > number) {
            minmax[0] = number;
        }
        if (!minmax[1] || number === Infinity || minmax[1] < number) {
            minmax[1] = number;
        }
    });
    return minmax;
}
