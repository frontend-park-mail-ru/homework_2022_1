'use strict';

/**
 * find min and max value in string
 * @param {string} value
 * @returns {Array<number>[minValue, maxValue]}
 */
const minmax = (value) => {
    if (typeof (value) != 'string') {
        return [undefined, undefined];;
    }
    if (value === '') {
        return [undefined, undefined];;
    }

    const splitValue = value.split(' ');
    let politeValue = splitValue.filter((item) => !isNaN(Number(item)));
    politeValue = politeValue.map(string => parseFloat(string));

    return politeValue.reduce(([min, max], current) => {
        if (!min || min > current) {
            min = current;
        }
        if (!max || max < current) {
            max = current;
        }
        return [min, max];
    }, [undefined, undefined])
}
