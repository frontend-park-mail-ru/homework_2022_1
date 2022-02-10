'use strict';

const TYPE_ERROR = 'Type Error';

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
    const dictIntToRoman = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    let res = '';

    while(inputNumber > 0) {
        for(let i of Object.keys(dictIntToRoman).reverse()) {
            if(inputNumber >= i) {
                res += dictIntToRoman[i];
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
    const dictRomanToInt = {
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

    let buffInputNumber = inputNumber.toUpperCase();
    let res = 0;

    for (let i = 0; i < buffInputNumber.length - 1; ++i) {
        if (dictRomanToInt[buffInputNumber[i]] < dictRomanToInt[buffInputNumber[i+1]]) {
            res -= dictRomanToInt[buffInputNumber[i]];
        } else {
            res += dictRomanToInt[buffInputNumber[i]];
        }
    }

    res += dictRomanToInt[buffInputNumber[buffInputNumber.length - 1]];
    return res;
}