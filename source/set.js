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
 * returns { deep: { nested: { field: null }}};
 * @example set({foo: 'bar'}, 4, null);
 * returns Error;
 */
const set = (object, path, value) => {
    if(!object){
        object = {};
    }

    if (typeof path !== 'string'){
        throw new Error('wrong path type!');
    }

    const keys = path.split('.');

    if (keys.at(-1) === '' || keys.length === 1){
        throw new Error('invalid path!');
    }

    const buffObject = keys.slice(1,-1).reduce((accumulator,key) => {
        accumulator[key] = accumulator.hasOwnProperty(key) ? accumulator[key] : {}
        return accumulator[key];
    }, object);

    buffObject[keys.at(-1)] = value;

    return object
}
