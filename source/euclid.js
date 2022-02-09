'use strict';

/**
 * Find GCD of natural numbers.
 * @function euclid
 * @param {...number} numbers - input array of natural numbers.
 * @returns {number}
 * @example
 * // returns 2
 * euclid(2);
 * @example
 * // returns 7
 * euclid(7, 14, 21);
 * @example
 * // returns 1
 * euclid(13, 26, 5);
 */

const euclid = (...numbers) => {
    if (numbers.length === 0) {
        throw Error('There are no arguments');
    }

    if (!numbers.every(check => (Number.isInteger(check) || typeof check === 'bigint') && check > 0)) {
        throw Error('The arguments must be natural numbers');
    }

    let nextNumbers;
    let initialValue;

    [initialValue , ...nextNumbers] = numbers

    return nextNumbers.reduce(function (accumulator, currentValue) {
        while (accumulator && currentValue) {
            accumulator > currentValue ? accumulator %= currentValue : currentValue %= accumulator;
        }
        console.log(currentValue, accumulator + currentValue);
        return (accumulator + currentValue);
    }, initialValue);
}
