'use strict';

/**
 * Returns plain-like object given an object with nested properties.
 * @param {Object} obj - Object with nested properties
 * @returns {Object} Plain-like object
 */
const plainify = (obj) => {
    if (typeof obj != 'object' || Array.isArray(obj) || obj == null) return obj;
    let res = {};
    for (const k in obj)
    {
        if (obj[k] != null && typeof obj[k] == 'object' && !Array.isArray(obj[k]))
        {
            const tmp = plainify(obj[k]);
            for (const k2 in tmp) res[k+'.'+k2] = tmp[k2];
        }
        else res[k] = obj[k];
    }
    return res
}