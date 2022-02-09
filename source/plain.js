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

    let arrMerg = [];

    for (let i = 0; i < arr.length; ++i) {

        if (Array.isArray(arr[i])) {

            arrMerg = arrMerg.concat(plain(arr[i]));

        } else {

            arrMerg.push(arr[i]);

        }
    }

    return arrMerg;
}