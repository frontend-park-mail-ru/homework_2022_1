'use strict';

/**
 * Generates chess table with *
 * @param {number | string} inputSize
 * @returns {string | null}
 */
const chess = (inputSize) => {
    let size = +inputSize;
    if (isNaN(size) || size <= 1) {
        return null;
    }

    let strWithBegin = '* '.repeat(size/2).concat((size % 2) ? '*\n' : '\n');
    let strWithoutBegin = ' *'.repeat(size/2).concat((size % 2) ? ' \n' : '\n');

    let outputStr = `${strWithBegin}${strWithoutBegin}`.repeat(size/2).concat((size % 2) ? strWithBegin : "");

    return outputStr;
}
