'use strict'

/**
 * Print numerical array in user's format style.
 * @function format
 * @param {object} numbers - input numerical array.
 * @param {number} columns - number of columns in the table.
 * @returns {string}
 * @example format([1, 2, 3], 1);
 * returns 1
 *         2
 *         3;
 * @example format([1, 2, 3], 2);
 * returns 1 2
 *         3;
 * @example format([-1, 2, 3], 2);
 * returns -1 2
 *          3;
 * @example format([100, 2, 3, 4], 2);
 * returns 100 2
 *           3 4;
 */

const format = (numbers, columns) => {
    if (typeof (numbers) !== 'object' || Number.isNaN(+columns) ||
        !numbers.every(number => typeof number === 'number')) {
        throw new SyntaxError('Данные некорректны');
    }

    // подсчет ширины каждой колонки по наиболее длинному числу
    const widthArray = new Array(columns).fill(0).map((currentColumnWidth, currentColumnIndex) => {
        return numbers.reduce((maxWidth, currentNumber, currentNumberIndex) => {
             if (currentNumberIndex % columns === currentColumnIndex) {
                let currentNumberWidth = currentNumber.toString().length;
                currentNumberWidth = (currentColumnIndex === 0) ? currentNumberWidth : currentNumberWidth + 1;
                return Math.max(maxWidth, currentNumberWidth);
            }
             return maxWidth;
        }, currentColumnWidth);
    });

    return setFormat(numbers, columns, widthArray);
}

/**
 * Set format to array.
 * @function setFormat
 * @param {object} numbers - input numerical array.
 * @param {number} columns - number of columns in the table.
 * @param {object} widths - array where each element is width of each column.
 * @returns {string}
 * @example format([1, 2, 3], 1);
 * returns 1
 *         2
 *         3;
 * @example format([1, 2, 3], 2);
 * returns 1 2
 *         3;
 * @example format([-1, 2, 3], 2);
 * returns -1 2
 *          3;
 * @example format([100, 2, 3, 4], 2);
 * returns 100 2
 *           3 4;
 */
const setFormat = (numbers, columns, widths) => {
    let result = '';
    let formattedRow = '';
    let countNumbersInRow = 0;
    numbers.map((currentNumber) => {
        if (countNumbersInRow < columns) {
            const numberStr = currentNumber.toString();
            let formattedNumber = ' '.repeat(widths[countNumbersInRow++] - numberStr.length) + numberStr;
            formattedRow += formattedNumber;
        }
        if (countNumbersInRow === columns) {
            result += formattedRow;
            formattedRow = '';
            countNumbersInRow = 0;
            if (currentNumber !== numbers[numbers.length - 1]) {
                result += '\n';
            }
        }
    });
    result += formattedRow;
    return result;
}
