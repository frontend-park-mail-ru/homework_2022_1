"use strict";

const zip = (...args) => {
    let result = {};
    for (let i = 0; i < args.length; ++i) {
        for (let key in args[i]) {
            if (!result.hasOwnProperty(key)) {
              result[key] = args[i][key];
            }
        }
    }
    return result;
};
