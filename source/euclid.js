'use strict';

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