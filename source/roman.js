'use strict';

const TYPE_ERROR = 'Type Error';

const roman = (inputNumber) => {
    if(typeof inputNumber === 'number') {
        return(int_to_roman(inputNumber));
    } else if(typeof inputNumber === 'string' && inputNumber !== '') {
        if(isNumber(inputNumber)) {
            return(int_to_roman(inputNumber));
        }
        return roman_to_int(inputNumber);
    } else {
        throw TypeError(TYPE_ERROR);
    }
}

const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

const int_to_roman = (inputNumber) => {
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

const roman_to_int = (inputNumber) => {
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
    inputNumber = inputNumber.toUpperCase()
    let res = 0;

    for (let i = 0; i < inputNumber.length - 1; ++i) {
        if (dictRomanToInt[inputNumber[i]] < dictRomanToInt[inputNumber[i+1]]) {
            res -= dictRomanToInt[inputNumber[i]];
        } else {
            res += dictRomanToInt[inputNumber[i]];
        }
    }

    res += dictRomanToInt[inputNumber[inputNumber.length - 1]];
    return res;
}