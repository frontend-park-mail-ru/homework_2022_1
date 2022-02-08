'use strict';

/** 
*  merging arrays into one
*
*  @params {Object[]} - nested(source) array 
*  @returns {Object[]} - plain array
*  @example
 * // returns [1,2,3]
 * plain([1,[2,[3]]]);
* 
*/

const plain = arr => arr.flat(Infinity);
