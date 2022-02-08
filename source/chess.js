'use strict';

/**
 * Generates chess table with *
 * @param {number | string} inputSize
 * @returns {string | null}
 */
const chess = (inputSize) => {
    inputSize = +inputSize;
    if (inputSize <= 1) {
        return null;
    }

    let strWithBegin = "";
    let strWithoutBegin = "";

    for (let i = 0; i < inputSize; i++) {
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
    for (let i = 0; i < inputSize; i++) {
        if (i % 2) {
            outputStr += strWithoutBegin;
        } else {
            outputStr += strWithBegin;
        }
    }

    return outputStr;
}
