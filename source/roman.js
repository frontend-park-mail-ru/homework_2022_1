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


const objectFlip = (obj) => {
    const ret = {};
    Object.keys(obj).forEach(key => {
        ret[obj[key]] = key;
    });
    return ret;
}

const DICT_INT_TO_ROMAN = objectFlip(DICT_ROMAN_TO_INT);

/**
 * @function Конвертирует число из десятичной системы счисления в римскую или наоборот.
 * @param {number|string} inputNumber - число в римской или десятичной системе сичсления.
 * @returns {number|string} Результат одной из двух конвертирующих функций.
 */
const roman = (inputNumber) => {
    if(typeof inputNumber === 'number') {
        return(convertIntToRoman(inputNumber));
    } else if(typeof inputNumber === 'string' && inputNumber !== '') {
        if(isNumber(inputNumber)) {
            return(convertIntToRoman(parseInt(inputNumber)));
        }
        return convertRomanToInt(inputNumber);
    } else {
        throw TypeError(TYPE_ERROR);
    }
}

/**
 * @function Проверяет состоит ли строка из одних лишь чисел.
 * @param {string} checkingString - строка которую проверяем на наличие чисел.
 * @returns {boolean} Булевый результат проверки.
 */
const isNumber = (checkingString) => {
    return !isNaN(parseFloat(checkingString)) && !isNaN(checkingString - 0)
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
 * @param {number} inputNumber - число в римской системе счесления.
 * @returns {string} Результат в десятичной системе счисления.
 */
const convertRomanToInt = (inputNumber) => {
    if(typeof inputNumber !== 'string') {
        throw TypeError(TYPE_ERROR);
    }

    let buffInputNumber = inputNumber.toUpperCase();
    let res = 0;

    for (let i = 0; i < buffInputNumber.length - 1; ++i) {
        if (DICT_ROMAN_TO_INT[buffInputNumber[i]] < DICT_ROMAN_TO_INT[buffInputNumber[i+1]]) {
            res -= DICT_ROMAN_TO_INT[buffInputNumber[i]];
        } else {
            res += DICT_ROMAN_TO_INT[buffInputNumber[i]];
        }
    }

    res += DICT_ROMAN_TO_INT[buffInputNumber[buffInputNumber.length - 1]];
    return res;
}