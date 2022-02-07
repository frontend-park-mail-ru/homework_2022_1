'use strict'

/**
 * @function Рисует ASCII-шахматную доску из звёздочек
 * @param {*} size Размер шахматной доски
 * @returns {string} Шахматная доска из звёздочек
 */
const chess = (size) => {
    if (size == 1 || size == 0 || !isFinite(size)) {
        return null;
    }

    let result = '';

    for (let i = 0; i < size; i++) {
        result += (i % 2 ? ' *' : '* ')
                  .repeat(Math.floor(size / 2) + 1)
                  .slice(0, size % 2 - 2) + '\n';
    }

    return result;
};