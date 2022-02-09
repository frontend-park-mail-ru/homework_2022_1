'use strict';

let set = function (obj, path, value) {

    if (typeof(path) !== 'string'){
        throw new Error('bad path');
    }

    let newPath = path.split('.');

    let newObj = newPath.slice(1, -1).reduce((list, key) => {
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