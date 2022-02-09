'use strict';

/**
 * Validate input
 * @function isInt
 * @param {number} data - input data.
 * @returns {(number|null)} returns true if data is int.
 * 
 * Count tree width
 * @function countWidth
 * @param {number} height - input height.
 * @returns {number} returns width.
 * 
 * Returns every line of tree (not a trunk line)
 * @function getRow
 * @param {number} gap - tree ' ' in one side count.
 * @param {number} length - tree '*' count.
 * @returns {number} returns width.
 * 
 * Return trunk line
 * @function getTrunk
 * @param {number} height - input height.
 * @returns {number} returns width.
 * 
 * Print tree.
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

function isInt(data) {
    if (Number(data) === parseInt(data)) {
        return data;
    }
    return null;
}

function countWidth(height) {
    return height * 2 - 3;
}

function getTrunk(width) {
    return ' '.repeat((width - 1) / 2) + '|' + ' '.repeat((width - 1) / 2) + '\n';
}

function getRow(gap, length) {
    return ' '.repeat(gap) + '*'.repeat(length) + ' '.repeat(gap) + '\n';
}

function tree(height) {

    height = isInt(height) > 2 ? height : null;

    if( !height ) {
        return null;
    }

    const width = countWidth(height);  
    let tree = '';
    let length = 1;
    let gap = (width - length) / 2;

    for(let i = 0; i < height - 1; ++i) {
        tree += getRow(gap, length);
        length += 2;
        gap = (width - length) / 2;
    }
    tree += getTrunk(width);

    return tree;
};
