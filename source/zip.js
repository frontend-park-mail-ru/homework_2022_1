'use strict';

/**
    * Merges specified objects into one
    * with saving property descriptors
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
    * @ returns Returns merged object
*/
function zip(...objs) {
    return objs.reduceRight(
        (acc, cur) =>
            Object.defineProperties(
                acc,
                Object.getOwnPropertyDescriptors(cur),
            ),
        {},
    );
}
