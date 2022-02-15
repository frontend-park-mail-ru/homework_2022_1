'use strict';
/**
 * The function implements rle encoding
 * @param {string} strNormal string for encoding. e.g : 'AAAABBB'
 * @returns {string} encoded string. e.g: 'A3B3'
 */
const rle = (strNormal) => {
    if (typeof strNormal !== 'string')
        return '-1';
    const strSplit = strNormal.split('');
    let count = 1;
    let strRes = '';
    strRes = strSplit.reduce((strRes, curCh, index) => {
        if (strRes[strRes.length - 1] === curCh) {
            ++count;
            if (count === 10) {
                count = 1;
                return `${strRes}9${curCh}`;
            }
            if (index === strSplit.length - 1)
                return `${strRes}${count}`;
            return strRes;
        }
        const countTemp = count;
        count = 1;
        return `${strRes}${countTemp !== 1 ? countTemp : ''}${curCh}`;
      });
    return strRes;
};