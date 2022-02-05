'use strict'

const chess = function(size) {
    if(size == 1 || size == 0) return null;
    let result = '';
    for(let i = 0; i < size; i++) result += (i % 2 ? ' *' : '* ').repeat(Math.floor(size / 2) + 1).slice(0, size % 2 - 2) + '\n';
    return result;
};