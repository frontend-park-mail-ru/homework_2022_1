/**
 * The function implements rle encoding
 * @param {string} str_normal string for encoding. e.g : 'AAAABBB'
 * @returns {string} encoded string. e.g: 'A3B3'
 */

'use strict';

const rle = (str_normal) => {
    if (typeof str_normal != 'string')
        return '-1';
    let str_split = str_normal.split('');
    let count = 1;
    let res_str = '';
    for (let i = 0; i < str_split.length; i++) {
        if (str_split[i] == str_split[i + 1] && i != str_split.length - 1) {
            if (count == 9) {
                res_str += `${str_split[i]}9`;
                count = 1;
                continue;
            }
            count++;
        } else {
            if (count != 1)
                res_str += `${str_split[i]}${count}`;
            else
                res_str += `${str_split[i]}`;                
            count = 1;
        }
    }
    return res_str;
};