'use strict';

/**
 * Check if the type is correct.
 * @function isValidType
 * @param element
 * @returns {boolean}
 * @example
 * // returns false
 * isValidType("str");
 * @example
 * // returns true
 * isValidType(7);
 * @example
 * // returns true
 * isValidType(2n);
 */

const isValidType  = (element) => (Number.isInteger(element) || typeof element == 'bigint');

/**
 * Check if number is greater than zero
 * @function isAboveZero
 * @param element
 * @returns {boolean}
 * @example
 * // returns false
 * isAboveZero(-2);
 * @example
 * // returns true
 * isAboveZero(7);
 * @example
 * // returns true
 * isAboveZero(2n);
 */

const isAboveZero  = (element) => element > 0;

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
    if (!numbers.length) {
        throw new TypeError('There are no arguments');
    }

    if (!numbers.every(isValidType)) {
        throw new TypeError('The arguments must be natural numbers');
    }

    if (!numbers.every(isAboveZero)) {
        throw new RangeError('The arguments must be natural numbers');
    }

    const [initialValue, ...nextNumbers] = numbers;

    return nextNumbers.reduce((accumulator, currentValue) => {
        let buffCurrentValue = currentValue;
        while (accumulator && buffCurrentValue) {
            accumulator > buffCurrentValue ? accumulator %= buffCurrentValue : buffCurrentValue %= accumulator;
        }
        return (accumulator + buffCurrentValue);
    }, initialValue);
}
