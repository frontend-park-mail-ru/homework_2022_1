'use strict';

const TYPE_ERROR = 'Type Error';

const DICT_ROMAN_TO_INT = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

/**
 * @function Меняет key и value в словаре.
 * @param {object} obj - принимает словарь.
 * @returns {object} Реверснутый словарь.
 */
const objectFlip = (obj) => {
    return Object.keys(obj).reduce((REVERSE_DICT, key) => {
        REVERSE_DICT[obj[key]] = key;
        return REVERSE_DICT;
    }, {})
}

const DICT_INT_TO_ROMAN = objectFlip(DICT_ROMAN_TO_INT);

/**
 * @function Конвертирует число из десятичной системы счисления в римскую или наоборот.
 * @param {number|string} inputNumber - число в римской или десятичной системе счисления.
 * @returns {number|string} Результат одной из двух конвертирующих функций.
 */
const roman = (inputNumber) => {
    if(typeof inputNumber === 'number' || !isNaN(parseFloat(inputNumber))) {
        return convertIntToRoman(Number(inputNumber));
    }
    if(typeof inputNumber === 'string' && inputNumber !== '') {
        return convertRomanToInt(inputNumber);
    }
    throw TypeError(TYPE_ERROR);
}

/**
 * @function Переводит число из десятичной в римскую систему счисления.
 * @param {number} inputNumber - число в десятичной системе счесления.
 * @returns {string} Результат в римской системе счисления.
 */
const convertIntToRoman = (inputNumber) => {
    if(typeof inputNumber !== 'number') {
        throw TypeError(TYPE_ERROR);
    }

    let res = '';

    while(inputNumber > 0) {
        for(let i of Object.keys(DICT_INT_TO_ROMAN).reverse()) {
            if(inputNumber >= i) {
                res += DICT_INT_TO_ROMAN[i];
                inputNumber -= i;
                break;
            }
        }
    }

    return res;
}

/**
 * @function Переводит число из римской в десятичную систему счисления.
 * @param {string} inputNumber - число в римской системе счесления.
 * @returns {number} Результат в десятичной системе счисления.
 */
const convertRomanToInt = (inputNumber) => {
    if(typeof inputNumber !== 'string') {
        throw TypeError(TYPE_ERROR);
    }

    let buffInputNumber = inputNumber.toUpperCase();

    return buffInputNumber.split('').reduce(function(res, currentValue, i) {
        if (DICT_ROMAN_TO_INT[currentValue] < DICT_ROMAN_TO_INT[buffInputNumber[i+1]]) {
            res -= DICT_ROMAN_TO_INT[currentValue];
        } else {
            res += DICT_ROMAN_TO_INT[currentValue];
        }
        return res
    },0)
}