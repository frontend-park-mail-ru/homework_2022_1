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

    let strWithBegin = "";
    let strWithoutBegin = "";

    for (let i = 0; i < size; i++) {
        if (i % 2) {
            strWithoutBegin += "*";
            strWithBegin += " ";
        } else {
            strWithoutBegin += " ";
            strWithBegin += "*";
        }
    }

    strWithBegin += "\n";
    strWithoutBegin += "\n";

    let outputStr = "";
    Array.from(Array(size)).forEach((iter, index) => {
        outputStr += (index % 2) ? strWithoutBegin : strWithBegin;
    })

    return outputStr;
}
