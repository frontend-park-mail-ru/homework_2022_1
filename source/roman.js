'use strict';

/**
 * @author Naumenko A.A.
 * @param {number, string} number - Переводимое число
 * @description Функция приобразования из римских цифр в десятичную систему и обратно
 */


const roman = (number) => {
    const dataSet = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }

    if (typeof (number) === "number") {
        return numToRom(dataSet, number);
    }
    if (typeof (number) === "string") {
        return strToRes(dataSet, number);
    }
    return '';
}


/**
 * @author Naumenko A.A.
 * @param dataSet - Таблица переводов
 * @param {string} number - Переводимое число
 * @description Функция приобразования строки в десятичное число или в римское
 */

const strToRes = (dataSet, number) => {
    const reInt = /^[0-9]+$/;
    const reRoman = /^[MDCLXVI]+$/;
    const upNumber = number.toUpperCase();

    if (reInt.test(upNumber)) {
        return numToRom(dataSet, number);
    }
    if (reRoman.test(upNumber)) {
        return romToNum(dataSet, upNumber);
    }
    return ''
}

/**
 * @author Naumenko A.A.
 * @param dataSet - Таблица переводов
 * @param {string} upNumber - Переводимое число
 * @description Функция приобразования строки римских чисел в десятичное число (int)
 */

const romToNum = (dataSet, upNumber) => {
    let result = 0;
    let prevNum = dataSet[upNumber.charAt(0)];

    for (let i = 1; i < upNumber.length; i++) {
        const currentNum = dataSet[upNumber.charAt(i)];
        result += currentNum <= prevNum ? prevNum : -prevNum;
        prevNum = currentNum;
    }
    result += prevNum;
    return result;
}

/**
 * @author Naumenko A.A.
 * @param dataSet - Таблица переводов
 * @param {string} number - Переводимое число
 * @description Функция приобразования строки цифр в римское число (int)
 */

const numToRom = (dataSet, number) => {
    return Object.keys(dataSet).reduce((acc, key) => {
        const currentNum = Math.floor(number / dataSet[key]);
        number -= currentNum * dataSet[key];
        return acc + key.repeat(currentNum);
    }, "");
}
