'use strict';

/**
 * @function Отрисовывает полностью ASCII-дерево с учетом "листьев" и "корня".
 * @param {number} treeSize - размер ASCII-дерева.
 * @returns {string} Строка для вывода ASCII-дерева.
 */
const drawTree = (treeSize) => {
    let finalString = '';

    /**
     * @function Высчитывает нужное количество символов '*' по номеру строки и добавляет в результат.
     * @param {number} lineNumber - номер отрисовываемой строки.
     */
    const addStarsToLine = (lineNumber)  => {
        finalString += '*'.repeat(lineNumber * 2 - 1);
    }

    /**
     * @function Высчитывает нужное количество пробелов по номеру строки и добавляет в результат.
     * @param {number} lineNumber - номер отрисовываемой строки.
     */
    const addSpacesToLine = (lineNumber) => {
        let maxCountSpaces = treeSize - 1;
        finalString += ' '.repeat(maxCountSpaces - lineNumber);
    }

    /**
     * @function Отрисовывает ASCII-дерево по горизонтальным линиям.
     * @param {number} lineNumber - номер отрисовываемой строки.
     */
    const addLine = (lineNumber) => {

        addSpacesToLine(lineNumber);
        addStarsToLine(lineNumber);
        addSpacesToLine(lineNumber);

        finalString += '\n';
    }

    /**
     * @function Добавляет корень дерева (представленный символом '|') с учетом пробелов справа и слева.
     */
    const addRoot = () => {
        addSpacesToLine(1);
        finalString += '|';
        addSpacesToLine(1);
        finalString += '\n';
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
 * @returns {string, null} Строка для вывода ASCII-дерева.
 */
const tree = (treeSize) => {
    if (treeSize < 3 || treeSize === undefined ||
                !(treeSize % 1 === 0) || !treeSize) {
        return null;
    }

    return drawTree(treeSize);
};
