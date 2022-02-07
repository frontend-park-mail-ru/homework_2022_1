'use strict';

let final_string = ''


/**
 * @function Высчитывает нужное количество пробелов по номеру строки и добавляет в результат.
 * @param {number} lineNumber - номер строки, для которой рассчитывается нужное количество пробелов.
 * @param {number} treeSize - размер ASCII-дерева.
 */
function drawSpaces(lineNumber, treeSize)  {
    let max_count_spaces = treeSize - 1;
    final_string += ' '.repeat(max_count_spaces - lineNumber);
}


/**
 * @function Высчитывает нужное количество символов '*' по номеру строки и добавляет в результат.
 * @param {number} lineNumber - номер строки, для которой рассчитывается нужное количество символов '*'.
 */
function drawStars(lineNumber) {
    final_string += '*'.repeat(lineNumber * 2 - 1);
}


/**
 * @function Отрисовывает ASCII-дерево по горизонтальным линиям.
 * @param {number} lineNumber - номер отрисовываемой строки.
 * @param {number} treeSize - размер ASCII-дерева.
 */
function drawLine(lineNumber, treeSize) {
    drawSpaces(lineNumber, treeSize);
    drawStars(lineNumber);
    drawSpaces(lineNumber, treeSize);
    final_string += '\n';
}


/**
 * @function Отрисовывает корень дерева (представленный символом '|') с учетом пробелов справа и слева.
 * @param {number} treeSize - размер ASCII-дерева.
 */
function drawRoot(treeSize) {
    drawSpaces(1, treeSize);
    final_string += '|';
    drawSpaces(1, treeSize);
    final_string += '\n';
}


/**
 * @function Отрисовывает полностью ASCII-дерево с учетом "листьев" и "корня".
 * @param {number} treeSize - размер ASCII-дерева.
 */
function drawTree(treeSize) {
    final_string = '';

    for (let i = 1; i < treeSize; ++i) {
        drawLine(i, treeSize);
    }

    drawRoot(treeSize);

    return final_string;
}

const tree = (treeSize) => {
    if (treeSize < 3 || treeSize === undefined || !(treeSize % 1 === 0)) {
        return null;
    }

    return drawTree(treeSize);
};
