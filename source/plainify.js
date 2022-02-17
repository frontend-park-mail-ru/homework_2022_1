'use strict';

/**
 * Returns plain-like object given an object with nested properties.
 * @param {object} obj - Object with nested properties
 * @returns {object} Plain-like object
 */
const plainify = (obj, ks = []) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || !obj)
    {
        throw new TypeError("Unsupported argument");
    }
    return Object.keys(obj).reduce((acc, k1) => {
        return Object.assign(acc,
            (obj[k1] && typeof obj[k1] === 'object' && !Array.isArray(obj[k1]))
            ? plainify(obj[k1], ks.concat(k1))
            : {[ks.concat(k1).join('.')]: obj[k1]}
        )}, {})
}
