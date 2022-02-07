'use strict';


/**
 * @function Отрисовывает полностью ASCII-дерево с учетом "листьев" и "корня".
 * @param {number} treeSize - размер ASCII-дерева.
 */
function drawTree(treeSize) {
    let final_string = '';

    /**
     * @function Отрисовывает ASCII-дерево по горизонтальным линиям.
     * @param {number} lineNumber - номер отрисовываемой строки.
     */
    function drawLine(lineNumber) {

        /**
         * @function Высчитывает нужное количество символов '*' по номеру строки и добавляет в результат.
         */
        function drawStars() {
            final_string += '*'.repeat(lineNumber * 2 - 1);
        }

        /**
         * @function Высчитывает нужное количество пробелов по номеру строки и добавляет в результат.
         */
        function drawSpaces()  {
            let max_count_spaces = treeSize - 1;
            final_string += ' '.repeat(max_count_spaces - lineNumber);
        }

        drawSpaces();
        drawStars();
        drawSpaces();

        final_string += '\n';
    }

    /**
     * @function Отрисовывает корень дерева (представленный символом '|') с учетом пробелов справа и слева.
     */
    function drawRoot() {
        let spaces = ' '.repeat(treeSize - 2);
        final_string += spaces + '|' + spaces + '\n';
    }

    final_string = '';

    for (let i = 1; i < treeSize; ++i) {
        drawLine(i);
    }

    drawRoot();

    return final_string;
}


const tree = (treeSize) => {
    if (treeSize < 3 || treeSize === undefined || !(treeSize % 1 === 0)) {
        return null;
    }

    return drawTree(treeSize);
};
