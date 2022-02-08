'use strict';

/**
 * Find Greatest Common Factor of natural numbers
 * @param {...numbers} - input array of natural numbers.
 * @returns {number}
 */

const euclid = function(...numbers){
   let x = numbers[0];
   for (let i = 1; i < numbers.length; i++){
       let y = numbers[i];
       while (x && y){
           x > y ? x %= y : y %= x;
       }
       x += y;
   }
   return x;
}
