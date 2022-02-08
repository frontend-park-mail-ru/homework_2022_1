'use strict';

function roman(input_number) {
    if(typeof input_number === 'number') {
        return(int_to_roman(input_number));
    } else if(typeof input_number === 'string') {
        if(isNumber(input_number)) {
            return(int_to_roman(input_number));
        }
        return roman_to_int(input_number);
    } else {
        throw TypeError('type error');
    }

}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

function int_to_roman(input_number) {
    let int_to_roman = {
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

    while(input_number > 0) {
        for(let i of Object.keys(int_to_roman).reverse()) {
            if(input_number >= i) {
                res += int_to_roman[i];
                input_number -= i;
                break;
            }
        }
    }

    return res;
}

function roman_to_int(input_number) {
    let roman_to_int = {
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
    input_number = input_number.toUpperCase()
    let res = 0;

    for (let i = 0; i < input_number.length - 1; ++i) {
        if (roman_to_int[input_number[i]] < roman_to_int[input_number[i+1]])
            res -= roman_to_int[input_number[i]];
        else
            res += roman_to_int[input_number[i]];
    }

    res += roman_to_int[input_number[input_number.length - 1]];
    return res;
}