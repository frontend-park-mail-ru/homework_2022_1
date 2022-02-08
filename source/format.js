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
    const widthArray = new Array(columns).fill(0);
    numbers.reduce((_, currentNumber, index) => {
        const currentColumn = index % columns;
        const width = Math.max(currentNumber.toString().length, widthArray[currentColumn]);
        widthArray[currentColumn] = (currentColumn === 0) ? width : width + 1;
        return currentNumber;
    }, numbers[0]);

    return setFormat(numbers, columns, widthArray);
}

// форматирование
const setFormat = (numbers, columns, widths) => {
    let result = ``;
    let formattedRow = ``;
    let countNumbersInRow = 0;
    numbers.map((currentNumber) => {
        if (countNumbersInRow < columns) {
            const numberStr = currentNumber.toString();
            let formattedNumber = ' '.repeat(widths[countNumbersInRow++] - numberStr.length) + numberStr;
            formattedRow += formattedNumber;
        }
        if (countNumbersInRow === columns) {
            result += formattedRow;
            formattedRow = ``;
            countNumbersInRow = 0;
            if (number !== lastNumber) {
                result += `\n`;
            }
        }
    });
    result += formattedRow;
    return result;
}
