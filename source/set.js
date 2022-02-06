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
    if(!object)
        object = {};
    let buff = object;
    if (typeof path !== 'string')
        return object;
    path.split('.').slice(1).forEach((key, index, arr) => {
        if (index === arr.length - 1){ // last element exit loop
            buff[key] = value
            return object
        }
        if (!buff.hasOwnProperty(key)){ // doesn't exist - create new object & switch pointer
            buff[key] = {}
            buff = buff[key]
        }
        if (typeof buff[key] === 'object'){ // check if attribute is pointer
            buff = buff[key]
        }
    })
    return object
}
