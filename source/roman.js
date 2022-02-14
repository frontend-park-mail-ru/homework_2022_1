'use strict';

const DATASET = {
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

/**
 * @author Naumenko A.A.
 * @param {number, string} number - Переводимое число
 * @description Функция приобразования из римских цифр в десятичную систему и обратно
 */

const roman = (number) => {
    if (typeof (number) === "number") {
        return numToRom(number);
    }
    if (typeof (number) === "string") {
        return strToRes(number);
    }
    return '';
}


/**
 * @author Naumenko A.A.
 * @param {string} number - Переводимое число
 * @description Функция приобразования строки в десятичное число или в римское
 */

const strToRes = (number) => {
    const reInt = /^[0-9]+$/;
    const reRoman = /^[MDCLXVI]+$/;
    const upNumber = number.toUpperCase();

    if (reInt.test(upNumber)) {
        return numToRom(number);
    }
    if (reRoman.test(upNumber)) {
        return romToNum(upNumber);
    }
    return ''
}

/**
 * @author Naumenko A.A.
 * @param {string} upNumber - Переводимое число
 * @description Функция приобразования строки римских чисел в десятичное число (int)
 */

const romToNum = (upNumber) => {
    let result = 0;
    let prevNum = DATASET[upNumber.charAt(0)];

    for (let i = 1; i < upNumber.length; i++) {
        const currentNum = DATASET[upNumber.charAt(i)];
        result += currentNum <= prevNum ? prevNum : -prevNum;
        prevNum = currentNum;
    }
    result += prevNum;
    return result;
}

/**
 * @author Naumenko A.A.
 * @param {string, number} number - Переводимое число
 * @description Функция приобразования строки цифр в римское число
 */

const numToRom = (number) => {
    let numberNew = number;
    return Object.keys(DATASET).reduce((acc, key) => {
        const currentNum = Math.floor(numberNew / DATASET[key]);
        numberNew -= currentNum * DATASET[key];
        return acc + key.repeat(currentNum);
    }, "");
}
