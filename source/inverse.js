"use strict";

const inverse = function(arr, arg = 0) {
    let left = Math.max(arg, 0);
    let right = Math.min(arr.length + arg, arr.length);
    for (let i = left; i < (left + right) / 2; i++){
        [arr[i], arr[right - (i - left) - 1]] = [arr[right - (i - left) - 1], arr[i]]  //swap
    }
    return arr;
}