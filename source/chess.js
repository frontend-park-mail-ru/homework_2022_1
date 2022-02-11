'use strict';

/**
 * Generates repeated string with specified ending
 * @param {string}line String to be repeated
 * @param {number}repeatedNum Times to repeat string
 * @param {string}ending String to finish repeated string
 * @returns {string}
 */
const generateRepeatedStr = (line, repeatedNum, ending) => {
    return `${line.repeat(repeatedNum)}${ending}`;
}

/**
 * Generates chess table with *
 * @param {number | string} inputSize
 * @returns {string | null}
 */
const chess = (inputSize) => {
    const size = +inputSize;
    if (isNaN(size) || size <= 1) {
        return null;
    }
    const repeatedNum = size / 2;
    const isEndingNeeded = size % 2;

    const strWithBegin = generateRepeatedStr('* ', repeatedNum, isEndingNeeded ? '*\n' : '\n');
    const strWithoutBegin = generateRepeatedStr(' *', repeatedNum, isEndingNeeded ? ' \n' : '\n');

    const outputStr = generateRepeatedStr(strWithBegin + strWithoutBegin, repeatedNum,
        isEndingNeeded ? strWithBegin : '');

    return outputStr;
}
