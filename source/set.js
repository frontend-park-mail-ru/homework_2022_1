'use strict';
/**
 * Changes the attribute of the object
 * @function set
 * @param {object} object - object for modifying.
 * @param {string} path - the path to attribute of the object.
 * @param {object} value - the value of the attribute to set.
 * @returns {object}
 * @example set({foo: 'bar'},'.foo','baz');
 * returns {foo: 'baz'}
 * @example set({}, '.deep.nested.field', null);
 * returns { deep: { nested: { field: null }}}
 */
const set = (object, path, value) => {
    let result = object
    path.split(".").slice(1).forEach((key, index, arr) => {
        if (index === arr.length - 1){ // last element exit loop
            result[key] = value
            return object
        }
        if (!result[key]){ // doesn't exists - create new object & switch pointer
            result[key] = {}
            result = result[key]
        }
        if (typeof result[key] == 'object'){ // check
            result = result[key]
        }
    })
    return object
}
