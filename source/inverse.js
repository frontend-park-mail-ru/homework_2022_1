"use strict";  /** modern mode connection */

/** @function inverse */
const inverse = function(arr, arg = 0) {
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
