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
    if (Number.isNaN(+columns)) {
        return undefined;
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

    // подсчет ширины каждой колонки по наиболее длинному числу
    const widths = new Array(columns).fill(0);
    numbers.reduce(function (prevValue, currentValue, currentValueIndex) {
        let currentWidth = (currentValue ?? "").toString().length + 1;
        widths[currentValueIndex % columns] = Math.max(currentWidth, widths[currentValueIndex % columns]);
        return currentValue;
    })
    widths[0] = (numbers[0].toString().length > widths[0]) ? numbers[0].toString().length : --widths[0];
    return toFormat(numbers, columns, widths);
}
