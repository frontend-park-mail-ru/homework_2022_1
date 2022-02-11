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


const letters = (str, mode) => {
    const arr = str.split('');

    if (mode !== undefined) {
        const indexMethod =  mode ? "indexOf" : "lastIndexOf";

        return arr.filter((item, index) => arr[indexMethod](item) === index).join('');
    }
    let counter = {};

    arr.forEach((item) =>  (item in counter) ? counter[item]++ : counter[item] = 1);

    return arr.reduce((result, item) => {
        if (counter[item] === 1) {
            result.push(item);
        }

        return result;
    }, []).join('');
};
