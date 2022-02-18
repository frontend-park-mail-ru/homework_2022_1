'use strict';

/**
 * Returns plain-like object given an object with nested properties.
 * @param {object} obj - Object with nested properties
 * @returns {object} Plain-like object
 */
const plainify = (obj) => {
    if (typeof obj !== 'object' || Array.isArray(obj) || !obj)
    {
        throw new TypeError('Unsupported argument');
    }
    return Object.entries(obj).reduce((acc, prop) => {
        var [prop_key, prop_val] = prop;
        let res = {};
        if (prop_val && typeof prop_val === 'object' && !Array.isArray(prop_val))
        {
            Object.entries(plainify(prop_val)).forEach((prop_deep) => {
                res[prop_key+'.'+prop_deep[0]] = prop_deep[1];
            });
        }
        else
        {
            res[prop_key] = prop_val;
        }
        return {...acc, ...res}
    }, {})
}
