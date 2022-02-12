"use strict";


/**
* @function
* @author Similization
* @name zip
* @description
*
* with reduce function we can sort out every element of an array
* function inside reduce (function) return an object (
*    where 1st element - fields and values of next element
*    where 2nd elemnet - fields and values of resulted object
* ) because of such order we can save first values of old fields and add new fields and values safely
*
* @param {...*} objects  - any number of objects to merge
* @returns {Object} Object with merged fields
*/
const zip = (...objects) => objects.reduce((prevObj, nextObj) => ({...nextObj, ...prevObj}), {});
