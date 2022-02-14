'use strict';

const treeGrowCoeff = 2
const trunkHeight = 1

/**
 * Count tree width
 * @function countWidth
 * @param {number} height - input height.
 * @returns {number} returns width.
 */
const countWidth = (height) => {
    return height * treeGrowCoeff - treeGrowCoeff - trunkHeight;
}

/**
 * Return trunk line
 * @function getTrunk
 * @param {number} height - input height.
 * @returns {number} returns width.
 */
const getTrunk = (width) => {
    const gapStr = ' '.repeat((width - 1) / 2)
    const trunkStr = '|'
    return `${gapStr}${trunkStr}${gapStr}\n`;
}

/**
 * Returns every line of tree (not a trunk line)
 * @function getRow
 * @param {number} gap - tree ' ' in one side count.
 * @param {number} length - tree '*' count.
 * @returns {number} returns width.
 */
const getRow = (gap, length) => {
    const gapStr = ' '.repeat(gap)
    const treeLayer = '*'.repeat(length)
    return `${gapStr}${treeLayer}${gapStr}\n`
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
const tree = (height) => {

    if (!Number.isInteger(Number(height)) || height < 3) {
        return null;
    }

    const width = countWidth(height);  
    let tree = '';
    let length = 1;
    let gap = (width - length) / 2;

    for (let i = 0; i < height - 1; ++i) {
        tree += getRow(gap, length);
        length += treeGrowCoeff;
        gap = (width - length) / 2;
    }

    for (let i = 0; i < trunkHeight; ++i) {
        tree += getTrunk(width);        
    }

    return tree;
};
