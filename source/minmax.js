'use strict';

/**
 * find min and max value in string
 * @param {string} value
 * @returns {Array<number>[minValue, maxValue]}
 */
const minmax = (value) => {

    if (!(Object.prototype.toString.call(value) === '[object String]') || value === '') {
        return [undefined, undefined];
    }

    const splitValue = value.split(' ');

    let politeValue = {
        num: splitValue,
        parseStr() {
            this.num = this.num.map(string => parseFloat(string));
        },
        checkNaN() {
            this.num = this.num.filter((item) => !Number.isNaN(item));
        }
    }
    politeValue.parseStr();
    politeValue.checkNaN()
    return politeValue.num.reduce(([min= Infinity, max= -Infinity], current) => {
        if (min > current) {
            min = current;
        }
        if (max < current) {
            max = current;
        }
        return [min, max];
    }, [undefined, undefined])
}
