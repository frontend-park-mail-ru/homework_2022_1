'use strict';


/**
 * @function Отрисовывает полностью ASCII-дерево с учетом "листьев" и "корня".
 * @param {number} treeSize - размер ASCII-дерева.
 */
const drawTree = (treeSize) => {
    let finalString = '';

    /**
     * @function Отрисовывает ASCII-дерево по горизонтальным линиям.
     * @param {number} lineNumber - номер отрисовываемой строки.
     */
    const addLine = (lineNumber) => {

        /**
         * @function Высчитывает нужное количество символов '*' по номеру строки и добавляет в результат.
         */
        const addStarsToLine = ()  => {
            finalString += '*'.repeat(lineNumber * 2 - 1);
        }

        /**
         * @function Высчитывает нужное количество пробелов по номеру строки и добавляет в результат.
         */
        const addSpacesToLine = () => {
            let max_count_spaces = treeSize - 1;
            finalString += ' '.repeat(max_count_spaces - lineNumber);
        }

        addSpacesToLine();
        addStarsToLine();
        addSpacesToLine();

        finalString += '\n';
    }

    /**
     * @function Отрисовывает корень дерева (представленный символом '|') с учетом пробелов справа и слева.
     */
    const addRoot = () => {
        let spaces = ' '.repeat(treeSize - 2);
        finalString += spaces + '|' + spaces + '\n';
    }

    for (let i = 1; i < treeSize; ++i) {
        addLine(i);
    }

    addRoot();

    return finalString;
}


/**
 * @function Возвращает ASCII-дерево высоты treeSize. В случае введения невалидных данных возвращает null.
 * @param {number} treeSize - требуемая высота ASCII-дерева.
 */
const tree = (treeSize) => {
    if (treeSize < 3 || treeSize === undefined ||
                !(treeSize % 1 === 0) || !treeSize) {
        return null;
    }

    return drawTree(treeSize);
};
