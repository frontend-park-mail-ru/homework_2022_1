'use strict';

/**
    * Merges specified objects into one
    * @param {...Object}
    * objs - objects to merge
    * @returns {Object}
    * Returns merged object
    * @example
    * zip({ name: 'a'}, {age: 5 });
    * // returns { name: 'a', age: '5' }
    * @example
    * zip({});
    * // returns {}
    * @example
    * zip({}, question: 'why?');
    * // returns { question: 'why?' }
    * @example
    * zip({question: 'why?'}, {question: 'who?'});
    * // returns { question: 'why?' }
*/
const zip = (...objs) => {
    if (objs.length <= 0) {
        throw new Error("Nothing to merge");
    }
    if (
        !objs.every(
            (obj) =>
                obj !== undefined && obj !== null &&
                (obj.__proto__ === null || obj.__proto__.constructor === Object)
        )
    ) {
        throw new TypeError("Only pure objects can be merged");
    }

    return objs.reduce((acc, cur) => ({ ...cur, ...acc }), {});
};
