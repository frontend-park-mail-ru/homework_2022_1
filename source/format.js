'use strict'

/**
 * Print numerical array in user's format style.
 * @function format
 * @param {int[]} numbers - input numerical array.
 * @param {number} columnsAmount - number of columns in the table.
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

const format = (numbers, columnsAmount) => {
    if (
      !Array.isArray(numbers) ||
      !Number.isInteger(columnsAmount) ||
      numbers.some(number => !Number.isInteger(number))
    ) {
        throw new Error('Данные некорректны');
    }

    // подсчет ширины каждой колонки по наиболее длинному числу
    const widthArray = new Array(columnsAmount).fill(0);
    numbers.forEach((currentNumber, currentIndex) => {
        const currentColumn = currentIndex % columnsAmount;
        const width = Math.max(currentNumber.toString().length, widthArray[currentColumn]);
        widthArray[currentColumn] = (currentColumn === 0) ? width : width + 1;
    });

    return setFormat(numbers, columnsAmount, widthArray);
}

/**
 * Set format to array.
 * @function setFormat
 * @param {int[]} numbers - input numerical array.
 * @param {number} columnsAmount - number of columns in the table.
 * @param {object} widths - array where each element is width of each column.
 * @returns {string}
 */
const setFormat = (numbers, columnsAmount, widths) => {
    return numbers.map((currentNumber, currentIndex) => {
        const currentColumn = currentIndex % columnsAmount;
        const numberStr = currentNumber.toString();
        let format = `${' '.repeat(widths[currentColumn] - numberStr.length)}`.concat(`${numberStr}`);
        if (currentColumn === columnsAmount - 1 && currentIndex !== numbers.length - 1) {
            format += '\n';
        }
        return format;
    }).join('');
}
