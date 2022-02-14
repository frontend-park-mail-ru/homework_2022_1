'use strict';

/**
 *  merging arrays into one
 *
 *  @params {Array} - arr - nested(source) array
 *  @returns {Array} - arrMerg - plain array
 *  @example
 * // returns [1,2,3]
 * plain([1,[2,[3]]]);
 *
 */
const plain = (arr) => {
    let stackBuf = [];
    let arrMerg = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length || stackBuf.length; ++i) {
        if (Array.isArray(arr[i])) {
            stackBuf.push([arr, i]);
            arr = arr[i];
            i = -1;
        } else if (i >= arr.length) {
            [arr, i] = stackBuf.pop();
        } else {
            arrMerg.push(arr[i]);
        }
    }

    return arrMerg;
}