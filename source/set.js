'use strict';

/**
 * Sets the value to the property of the object
 * @param {object} obj - main object
 * @param {string} path - path to the property
 * @param {*} value - value of new property
 * @returns {object} - new object
 */
const set = (obj, path, value) => {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('The first argument is not an object');
    }

    if (!(path instanceof String) && typeof path !== 'string') {
        throw new TypeError('The second argument is not a string');
    }

    if (!path || path[0] !== '.') {
        throw new TypeError('The path is wrong');
    }

    const newPath = path.split('.').filter((str)=> !!str);


    const newObj = newPath.slice(0, -1).reduce((list, key) => {
        if (!list.hasOwnProperty(key)) {
            list[key] = {};
        }
        return list[key];
    }, obj);


    newObj[newPath.at(-1)] = value;
    return obj;
}
