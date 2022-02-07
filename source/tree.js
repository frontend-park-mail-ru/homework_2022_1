'use strict';

function tree(height) {

    if(isNaN(height))
        return null;

    if(height % 1 !== 0) {
        return null;
    }

    height = parseInt(height);
    if(isNaN(height))
        return null;

    if(height < 3)
        return null;

    let width = 1;
    for(let i = 1; i < height - 1; i++) {
        width += 2;
    }

    let tree = "";
    let length = 1;
    let gap = (width - length) / 2;
    for(let i = 0; i < height - 1; ++i) {
        tree += ' '.repeat(gap) + '*'.repeat(length) + ' '.repeat(gap) + '\n';
        length += 2;
        gap = (width - length) / 2;
    }
    tree += ' '.repeat((width - 1) / 2) + '|' + ' '.repeat((width - 1) / 2) + '\n';

    return tree;
};
