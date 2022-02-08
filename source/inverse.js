'use strict';

/**
 * Inverse elements in array.
 * @param {Array<>} array - Array for inversing
 * @param {number} index - Index of unchangeable part of array (if negative, counts from end of array)
 */
const inverse = function (array, index = 0) {
    /** Check if index is default */
    if (index == 0) return array.reverse();

    if (index > 0)
    {
        /** 
         * If index is positive, reverse only rigth part
         * Get new array from unchangeable part.
         */
        let newArr = array.slice(0, index);
        /** Delete unchangeable part from origial array */
        array.splice(0, index);
        /** Reverse left part of array */
        array.reverse();
        /** Concatenate unchangeable part and reversed part of original array */
        array = newArr.concat(array);
        return array;
    }
    else
    {
        /**
         * If index is negative, reverse only left part
         * Get new array from unchangeable part.
        */
        let newArr = array.slice(index);
        /** Delete unchangeable part from origial array */
        array.splice(index);
        /** Reverse left part of array */
        array.reverse();
        /** Concatenate unchangeable part and reversed part of original array */
        array = array.concat(newArr);
        return array;
    }
}
