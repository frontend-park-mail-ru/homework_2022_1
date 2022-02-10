"use strict";  /** modern mode connection */

/**
 * @function inverse
 * @template obj
 * @param {obj[]} arr - Array of elements.
 * @param {number} arg - Count of elements that don't need to be inversed.
 * @returns {obj[]}
 */

const inverse = (arr, arg = 0) => {
    /** find border of array for reverse */
    let left = Math.max(arg, 0);
    let right = Math.min(arr.length + arg, arr.length);

    /** reverse array */
    for (let i = left; i < (left + right) / 2; i++){
        /** swap elements */
        [arr[i], arr[right - (i - left) - 1]] = [arr[right - (i - left) - 1], arr[i]];
    }
    return arr;
}
