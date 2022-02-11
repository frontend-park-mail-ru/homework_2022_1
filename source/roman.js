'use strict';

/**
 * @author Naumenko A.A.
 * @param {number, string} number - Переводимое число
 * @description Функция приобразования из римских цифр в десятичную систему и обратно
 */


let roman = (number) => {
    const dataset = {
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

    return (typeof (number) == "number") ? numtorom(dataset, number) :
        (typeof (number) == "string") ? strtores(dataset, number) :
            ''
}

let strtores = (dataset, number) => {
    const re_int = /^[0-9]+$/;
    const re_roman = /^[MDCLXVI]+$/;
    let upnumber = number.toUpperCase();
    return (re_int.test(upnumber)) ? numtorom(dataset, number) :
        (re_roman.test(upnumber)) ? romtonum(dataset, upnumber) :
            ''
}

let romtonum = (dataset, upnumber) => {
    let res = 0;
    let prevnum = dataset[upnumber.charAt(0)];
    for (let i = 1; i < upnumber.length; i++) {
        let temp = dataset[upnumber.charAt(i)];
        temp <= prevnum ? res += prevnum : res -= prevnum;
        prevnum = temp;
    }
    res += prevnum;
    return res;
}

let numtorom = (dataset, number) => {
    let result = "";
    Object.keys(dataset).forEach(key => {
            let temp = Math.floor(number / dataset[key]);
            number -= temp * dataset[key];
            result += key.repeat(temp);
        }
    )
    return result;
}
