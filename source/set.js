'use strict';

/**
 * Sets the value to the property of the object
 * @param {Object} obj - main object
 * @param {String} path - path to the property
 * @param {*} value - value of new property
 * @returns {object} - new object
 */
const set = (obj, path, value) => {
    if (!(obj instanceof Object)) {
        throw new Error('It s not an object');
    }

    /*if (typeof(path) !== 'string'){
        throw new Error('bad path');
    }*/
    /*if (Object.prototype.toString.call(path) !== '[object String]') {
        throw new Error('bad path');
    }*/

    if (!(path instanceof String) && typeof(path) !== 'string') {
        throw new Error('bad path');
    }

    const newPath = path.split('.');

    const newObj = newPath.slice(1, -1).reduce((list, key) => {
        if (list.hasOwnProperty(key)) {
            list[key] = list[key];
        } else {
            list[key] = {}
        }
        return list[key];
    }, obj);

    let last = newPath.at(-1);

    newObj[last] = value;
    return obj;
}
