'use strict';

function isFloat(num) {
    return num % 1 !== 0;
}

function validateInput(height) {
    if( isNaN(height) || 
        isFloat(height) ||
        isNaN(parseInt(height)) ||
        height < 3
    ) {
        return false;
    }

    return true;        
}

function getWidth(height) {
    return height * 2 - 3;
}

function getTrunk(width) {
    return ' '.repeat((width - 1) / 2) + '|' + ' '.repeat((width - 1) / 2) + '\n';
}

function getRow(gap, length) {
    return ' '.repeat(gap) + '*'.repeat(length) + ' '.repeat(gap) + '\n';
}

function tree(height) {

    if(!validateInput(height))
        return null;

    const width = getWidth(height);  
    let tree = "";
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
