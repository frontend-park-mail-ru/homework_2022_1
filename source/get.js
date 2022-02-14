'use strict';

/**
 * Returns the value of object properties
 * Splitting a string into properties by dots
 * (Will not work if the property is
 * set like this: ["first_word second_word"])
 * @param {object} object - return a property of this object
 * @param {string} path - to object's property
 * @returns {* | undefined} - if path is correct than return value of property else return undefined
 */
const get = (object, path) => {
    if (typeof (object) !== 'object' || !object
        || !(path instanceof String) && typeof (path) !== 'string') {
        return;
    }
    const keys = path.split('.');
    keys.shift();
    let obj = object;
    keys.forEach(propertyValue => {
        if (obj && propertyValue) {
            obj = obj[propertyValue];
        }
    });
    return obj;
}

let obj = {
    name: "value"
}
get(obj, '.')