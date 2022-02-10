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


let letters = (str, mode) => {
    let arr = str.split('');

    if (mode !== undefined) {
        const indexMethod =  mode ? "indexOf" : "lastIndexOf";
        arr = arr.filter((item, index) => arr[indexMethod](item) === index);

        str = arr.join('');

        return str;
    }

    let counter = {};

    for (let item of arr) {
        (item in counter) ? counter[item]++ : counter[item] = 1;
    }

    let result = [];

    arr.map((item) => {
        if (counter[item] === 1) {
            result.push(item);
        }
    });

    str = result.join('');

    return str;
};
