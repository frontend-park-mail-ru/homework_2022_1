'use strict';

/**
 * Find GCD of natural numbers.
 * @function euclid
 * @param {...number} numbers - input array of natural numbers.
 * @returns {number}
 * @example
 * euclid(2);
 * // returns 2
 * @example
 * euclid(7, 14, 21);
 * // returns 7
 * @example
 * euclid(13, 26, 5);
 * // returns 1
 */

const euclid = (...numbers) => {
    if (numbers.length === 0) {
        throw Error('There are no arguments');
    }

    if (!numbers.every(check => Number.isInteger(check) && check > 0)) {
        throw Error('The arguments must be natural numbers');
    }

    let result = numbers[0];

    numbers.slice(1).forEach(number => {
        while (result && number) {
            result > number ? result %= number : number %= result;
        }

        result += number;
    });

    return result;
}