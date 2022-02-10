'use strict';

/**
 * Returns the value of object properties
 * @param {any} object - return a property of this object
 * @param {string} path - to object's property
 * @returns {any | undefined} - if path is correct than return value of property else return undefined
 */
const get = (object, path) => {
    // Разбиваем строку на свойства по точкам
    // (Не будет работать, если свойство
    // задано в таком виде: ["first_word second_word"])
    if (!object || typeof (path) !== 'string') { return undefined }
    let keys = path.split('.');
    let obj = object;
    keys.forEach(propertyValue => {
        if (obj !== undefined) {
            obj = obj[propertyValue];
        } else {
            return undefined;
        }
    });
    return obj;
}
