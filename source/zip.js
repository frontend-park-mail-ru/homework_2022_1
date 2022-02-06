'use strict';

/**
    * Merges specified objects into one
    * @params
    * objs - objects to merge
    * @example
    * // returns { name: 'a', age: '5' }
    * zip({ name: 'a', age: 5 });
    * @example
    * // returns {}
    * zip({});
    * @example
    * // returns { question: 'why?' }
    * zip({}, question: 'why?');
    * @example
    * // returns { question: 'why?' }
    * zip(question: 'why?', question: 'who?');
    * @returns Returns merged object
*/
const zip = (...objs) => objs.reduce((acc, cur) => ({ ...cur, ...acc }), {});
