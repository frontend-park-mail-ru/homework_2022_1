'use strict';

/**
 * Sets the value to the property of the object
 * @param {Object} obj - main object
 * @param {String} path - path to the property
 * @param {*} value - value of new property
 * @returns {object} - new object
 */
const set = (obj, path, value) => {
    if (typeof(obj) !== 'object') {
        throw new TypeError('The first argument is not an object');
    }

    if (!(path instanceof String) && typeof(path) !== 'string') {
        throw new TypeError('bad path');
    }

    const newPath = path.split('.');

    const newObj = newPath.slice(1, -1).reduce((list, key) => {
        if (list.hasOwnProperty(key)) {
            list[key] = list[key];
        } else {
            list[key] = {};
        }
        return list[key];
    }, obj);


    newObj[newPath.at(-1)] = value;
    return obj;
}
