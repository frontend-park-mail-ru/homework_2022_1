'use strict';

/**
 * Find Greatest Common Factor of natural numbers
 * @param {...number} - input array of natural numbers.
 * @returns {number}
 */

const euclid = function(...numbers){
   let result = numbers.reduce(function(x, y) {
        while (x && y){
            x > y ? x %= y : y %= x;
        }
        return x + y;
   });
   return result;
}
