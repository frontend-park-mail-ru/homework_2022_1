'use strict';

/**
 *  Converting a multidimensional array to a single array
 *
 *  @params {Array} - multidimensional array
 *  @returns {Array} - a one-dimensional array with all the values ​​of the original
 */

const plain = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            if (Array.isArray(arr[i])) {
                arr.splice(i, 1, ...arr[i]);
                i--;
            }
        } else {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}
