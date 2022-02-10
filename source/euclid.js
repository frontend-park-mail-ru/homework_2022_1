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

const isValidType  = (element) => (Number.isInteger(element) || typeof element === 'bigint');
const isAboveZero  = (element) => element > 0;

const euclid = (...numbers) => {
    if (numbers.length === 0) {
        throw new TypeError('There are no arguments');
    }

    if (!numbers.every(isValidType)) {
        throw new TypeError('The arguments must be natural numbers');
    }

    if (!numbers.every(isAboveZero)) {
        throw new RangeError('The arguments must be natural numbers');
    }

    const [initialValue , ...nextNumbers] = numbers

    return nextNumbers.reduce((accumulator, currentValue) => {
        while (accumulator && currentValue) {
            accumulator > currentValue ? accumulator %= currentValue : currentValue %= accumulator;
        }
        return (accumulator + currentValue);
    }, initialValue);
}
