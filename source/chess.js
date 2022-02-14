'use strict'

/**
 * @function Рисует ASCII-шахматную доску из звёздочек
 * @param {number} size Размер шахматной доски
 * @returns {string} Шахматная доска из звёздочек
 */
const chess = (size) => {
    let number = Number(size);
    let repeatCount = Math.floor(size / 2) + 1;
    let sliceUpperLimit = size % 2 - 2;
    if (!Number.isInteger(number) || number <= 1) {
        return null;
    }

    let result = '';

    for (let i = 0; i < size; i++) {
        result += `${(i % 2 ? ' *' : '* ')
                  .repeat(repeatCount)
                  .slice(0, sliceUpperLimit)}\n`
    }

    return result;
};
