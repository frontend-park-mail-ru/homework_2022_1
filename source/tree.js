'use strict';

/**
 * Check if is integer
 * @function isInt
 * @param {number} data - input data.
 * @returns {(number|null)} returns true if data is int.
 */
function isInt(data) {
    return Number(data) === parseInt(data);
}

/**
 * Count tree width
 * @function countWidth
 * @param {number} height - input height.
 * @returns {number} returns width.
 */
function countWidth(height) {
    return height * 2 - 3;
}

/**
 * Return trunk line
 * @function getTrunk
 * @param {number} height - input height.
 * @returns {number} returns width.
 */
function getTrunk(width) {
    return ' '.repeat((width - 1) / 2) + '|' + ' '.repeat((width - 1) / 2) + '\n';
}

/**
 * Returns every line of tree (not a trunk line)
 * @function getRow
 * @param {number} gap - tree ' ' in one side count.
 * @param {number} length - tree '*' count.
 * @returns {number} returns width.
 */
function getRow(gap, length) {
    return ' '.repeat(gap) + '*'.repeat(length) + ' '.repeat(gap) + '\n';
}

/**
 * Return tree.
 * @function tree
 * @param {number} width - input tree width.
 * @returns {string} return string with width length with '|' in middle.
 * @example tree(5);
 * returns 
 * '  *   
 *   ***  
 *  ***** 
 * *******
 *    |
 *`
 */
const tree = height => {

    if(!isInt(height) || height < 3) {
        return null;
    }

    const width = countWidth(height);  
    let tree = '';
    let length = 1;
    let gap = (width - length) / 2;

    for (let i = 0; i < height - 1; ++i) {
        tree += getRow(gap, length);
        length += 2;
        gap = (width - length) / 2;
    }
    tree += getTrunk(width);

    return tree;
};
