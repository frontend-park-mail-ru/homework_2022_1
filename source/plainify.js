'use strict';

/**
 * Returns plain-like object given an object with nested properties.
 * @param {object} obj - Object with nested properties
 * @returns {object} Plain-like object
 */
const plainify = (obj) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || !obj) {
        throw new TypeError('Unsupported argument');
    }
    return Object.entries(obj).reduce((acc, prop) => {
        let [propKey, propVal] = prop;
        let res = {};
        if (propVal && typeof propVal === 'object' && !Array.isArray(propVal)) {
            Object.entries(plainify(propVal)).forEach((propDeep) => {
                res[propKey+'.'+propDeep[0]] = propDeep[1];
            });
        }
        else {
            res[propKey] = propVal;
        }
        return {...acc, ...res}
    }, {})
}
