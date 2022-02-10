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
const plain = arr => {
    return Array.isArray(arr) ? arr.reduce((arrMerg, curr) => arrMerg.concat(plain(curr)), []) : arr;
};
