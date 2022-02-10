'use strict';

const plain = arr => {
    return arr.reduce((acc, el) => Array.isArray(el) ? [...acc, ...plain(el)] : [...acc, el], []);
}
