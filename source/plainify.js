'use strict';

/**
 * Returns plain-like object given an object with nested properties.
 * @param {object} obj - Object with nested properties
 * @returns {object} Plain-like object
 */
const plainify = (obj) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || !obj)
    {
        throw new Error("Unsupported argument");
    }
    let res = {};
    Object.keys(obj).forEach((k1) => {
        if (obj[k1] && typeof obj[k1] === 'object' && !Array.isArray(obj[k1]))
        {
            const tmp = plainify(obj[k1]);
            Object.keys(tmp).forEach((k2) => {
                res[k1+'.'+k2] = tmp[k2];
            });
        }
        else res[k1] = obj[k1];
    });
    return res;
}
