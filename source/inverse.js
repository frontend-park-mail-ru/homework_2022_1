'use strict';

/**
 * Inverse elements in array.
 * @param {Array<>} inputArray - Array for inversing
 * @param {number} offsetIndex - Index of unchangeable part of array (if negative, counts from end of array)
 */
const inverse = (inputArray, offsetIndex = 0) => {
    if (!inputArray) return inputArray;
    
    /** Check if index is default or invalid */
    if (!offsetIndex) return inputArray.reverse();

    if (offsetIndex > 0)
    {
        let unchangalbeArrPart = inputArray.splice(0, offsetIndex);
        inputArray.reverse();
        return unchangalbeArrPart.concat(inputArray);
    }
    else
    {
        let unchangalbeArrPart = inputArray.splice(offsetIndex);
        inputArray.reverse();
        return inputArray.concat(unchangalbeArrPart);
    }
}
