'use strict';

/**
 *  Converting a multidimensional array to a single array
 *
 *  @params {Array} - multidimensional array
 *  @returns {Array} - a one-dimensional array with all the values ​​of the original
 */

const plain = (arr) => {
    return arr.reduce((acc, el) => Array.isArray(el) ? [...acc, ...plain(el)] : [...acc, el], []);
}
