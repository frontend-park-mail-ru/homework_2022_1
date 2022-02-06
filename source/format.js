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

let format = (numbers, columns) => {
    if (isNaN(+columns)) {
        return undefined;
    }

    // подсчет ширины каждой колонки по наиболее длинному числу
    const countWidthsEveryColumn = (numbers, columns) => {
        const totalRows = Math.max(1, Math.round(numbers.length / columns));
        let widths = Array()
        for (let j = 0; j < columns; j++) {
            let width = 0;
            for (let i = 0; i < totalRows; i++) {
                const currentNumberWidth = (numbers[columns * i + j] ?? "").toString().length;
                width = Math.max(width, currentNumberWidth);
                if (0 !== currentNumberWidth && 0 !== j) {
                    width++;
                }
            }
            widths.push(width);
        }
        return widths;
    }

    // форматирование
    const toFormat = (numbers, columns, widths) => {
        let result = String();
        let formattedRow = String();
        let countNumbersInRow = 0;
        let lastNumber = numbers[numbers.length - 1];
        for (let number of numbers) {
            if (isNaN(number)) {
                return undefined;
            }
            if (countNumbersInRow < columns) {
                const numberStr = number.toString();
                let formattedNumber = ` `.repeat(widths[countNumbersInRow++] - numberStr.length) + numberStr;
                formattedRow += formattedNumber;
            }
            if (countNumbersInRow === columns) {
                result += formattedRow;
                formattedRow = String();
                countNumbersInRow = 0;
                if (number !== lastNumber) {
                    result += `\n`;
                }
            }
        }
        result += formattedRow;
        return result;
    }

    const widths = countWidthsEveryColumn(numbers, columns);
    return toFormat(numbers, columns, widths);
}
