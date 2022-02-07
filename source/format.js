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
    if (typeof (numbers) !== typeof ([]) || Number.isNaN(+columns)) {
        return undefined;
    }

    // подсчет ширины каждой колонки по наиболее длинному числу
    const widths = new Array(columns).fill(0);
    let okStatus = true;
    numbers.reduce(function (prevNumber, currentNumber, currentNumberIndex) {
        // alert(`check values: ${prevNumber} - ${currentNumber}`);
        if (Number.isNaN(+prevNumber) || Number.isNaN(+currentNumber)) {
            okStatus = false;
            return undefined;
        }
        const currentColumn = currentNumberIndex % columns;
        const width = (currentNumber ?? ``).toString().length + 1;
        widths[currentColumn] = Math.max(width, widths[currentColumn]);
        okStatus = true;
        return currentNumber;
    });
    const firstNumber = numbers[0].toString() ?? ``;
    widths[0] = (firstNumber.length > widths[0]) ? firstNumber.length : --widths[0];

    return (okStatus) ? setFormat(numbers, columns, widths) : undefined;
}

// форматирование
const setFormat = (numbers, columns, widths) => {
    let result = ``;
    let formattedRow = ``;
    let countNumbersInRow = 0;
    let lastNumber = numbers[numbers.length - 1];
    for (let number of numbers) {
        if (countNumbersInRow < columns) {
            const numberStr = number.toString();
            let formattedNumber = ` `.repeat(widths[countNumbersInRow++] - numberStr.length) + numberStr;
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
    }
    result += formattedRow;
    return result;
}
