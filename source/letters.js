'use strict';

/**
 * В зависимости от режима работы функция может оставить первую букву, а остальные повторяющие удалить, либо
 * оставить последнюю, а остальные повторяющие удалить, либо удалить все повторяющиеся букв
 *
 * @function letters
 * @param {string} str строка, из которой мы удаляем элементы
 * @param {boolean} mode режим работы функции
 * @returns {string}
 * */


function letters(str, mode) {
    let arr = str.split('');

    if (mode === true) {
        arr = arr.filter((item, index) => arr.indexOf(item) === index);
        str = arr.join('');
    } else if (mode === false) {
        arr = arr.filter((item, index) => arr.lastIndexOf(item) === index);
        str = arr.join('');
    } else {
        let result = [];
        let stack = [];

        for (let i = 0; i < arr.length; ++i) {
            for (let j = i + 1; j < arr.length; ++j) {
                if (arr[i] === arr[j]) {
                    stack.push(arr[i])
                }
            }

            if (stack.find(item => item === arr[i]) === undefined) {
                console.log(arr[i])
                result.push(arr[i]);
            }
        }

        str = result.join('');
    }

    return str;
}