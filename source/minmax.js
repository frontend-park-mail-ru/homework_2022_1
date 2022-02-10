'use strict';

/**
 * find min and max value in string
 * @param {string} value
 * @returns {Array<number>[minValue, maxValue]}
 */
const minmax = (value) => {
    let minmax = [undefined, undefined];
    if (value === '') {
        return minmax;
    }
    if (Array.isArray(value)) {
        return minmax;
    }

    const splitValue = value.split(' ');
    let politeValue = splitValue.filter((item) => !isNaN(Number(item)));

    minmax = politeValue.reduce(([min, max], current) => {
        let numberCurrent = Number(current);
        if (!min || numberCurrent === -Infinity || min > numberCurrent) {
            min = numberCurrent;
        }
        if (!max || numberCurrent === Infinity || max < numberCurrent) {
            max = numberCurrent;
        }
        return [min, max];
    }, [undefined, undefined])

    return minmax;
}
