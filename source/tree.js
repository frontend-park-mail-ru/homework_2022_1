'use strict';

let final_string = ""


/**
 * @function Высчитывает нужное количество пробелов по номеру строки и добавляет в результат.
 * @param {number} line_number - номер строки, для которой рассчитывается нужное количество пробелов.
 * @param {number} tree_size - размер ASCII-дерева.
 */
function drawSpaces(line_number, tree_size)  {
    let max_count_spaces = tree_size - 1;
    for (let i = 0; i < max_count_spaces - line_number; ++i) {
         final_string += " ";
    }
}


/**
 * @function Высчитывает нужное количество символов '*' по номеру строки и добавляет в результат.
 * @param {number} line_number - номер строки, для которой рассчитывается нужное количество символов '*'.
 */
function drawStars(line_number) {
    for (let i = 0; i < line_number * 2 - 1; ++i) {
        final_string += "*";
    }
}


/**
 * @function Отрисовывает ASCII-дерево по горизонтальным линиям.
 * @param {number} line_number - номер отрисовываемой строки.
 * @param {number} tree_size - размер ASCII-дерева.
 */
function drawLine(line_number, tree_size) {
    drawSpaces(line_number, tree_size);
    drawStars(line_number);
    drawSpaces(line_number, tree_size);
    final_string += "\n";
}


/**
 * @function Отрисовывает корень дерева (представленный символом '|') с учетом пробелов справа и слева.
 * @param {number} tree_size - размер ASCII-дерева.
 */
function drawRoot(tree_size) {
    drawSpaces(1, tree_size);
    final_string += "|";
    drawSpaces(1, tree_size);
    final_string += "\n"
}


/**
 * @function Отрисовывает полностью ASCII-дерево с учетом "листьев" и "корня".
 * @param {number} tree_size - размер ASCII-дерева.
 */
function drawTree(tree_size) {
    final_string = "";

    if (tree_size < 3 || tree_size === undefined || !(tree_size % 1 === 0)) {
        return null;
    }

    for (let i = 1; i < tree_size; ++i) {
        drawLine(i, tree_size);
    }

    drawRoot(tree_size);

    return final_string;
}

const tree = tree_size => drawTree(tree_size);
