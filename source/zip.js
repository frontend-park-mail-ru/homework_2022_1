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
    * zip(question: 'why?', question: 'who?');
    * // returns { question: 'why?' }
*/
const zip = (...objs) => objs.reduce((acc, cur) => ({ ...cur, ...acc }), {});
