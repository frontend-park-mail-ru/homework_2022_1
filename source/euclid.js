'use strict';

/**
 * Find Greatest Common Factor of natural numbers
 * @param {...number} - input array of natural numbers.
 * @returns {number}
 */

const euclid = function(...numbers){
   let x = numbers[0];
   let result = numbers.reduce(function(x, b) {
        let y = b;
        console.log(y);
        while (x && y){
            x > y ? x %= y : y %= x;
        }
        x += y;
        return x;
   });
   return result;
}
