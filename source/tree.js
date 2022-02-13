'use strict';

/**
 * @function Создает ASCII-дерево требуемого размера с учетом "листьев" и "корня".
 * @param {number} treeSize - размер ASCII-дерева.
 * @returns {string} Строка, содержащая требуемое ASCII-дерево.
 */
const createTree = (treeSize) => {
    let finalString = '';

    /**
     * @function Высчитывает нужное количество символов '*' по номеру строки и добавляет в результат.
     * @param {number} lineNumber - номер отрисовываемой строки.
     * @returns {string} Строка, содержащая нужное количество символов '*'.
     */
    const addStarsToLine = (lineNumber)  => {
        return '*'.repeat(lineNumber * 2 - 1);
    }

    /**
     * @function Высчитывает нужное количество пробелов по номеру строки и добавляет в результат.
     * @param {number} lineNumber - номер отрисовываемой строки.
     * @returns {string} Строка, содержащая нужное количество пробелов.
     */
    const addSpacesToLine = (lineNumber) => {
        const maxCountSpaces = treeSize - 1;
        return ' '.repeat(maxCountSpaces - lineNumber);
    }

    /**
     * @function Добавляет новую горизонтальную линию ASCII-дерева.
     * @param {number} lineNumber - номер отрисовываемой строки.
     */
    const addLine = (lineNumber) => {

        return addSpacesToLine(lineNumber) + addStarsToLine(lineNumber)
                                        + addSpacesToLine(lineNumber) + '\n';
    }

    for (let i = 1; i < treeSize; ++i) {
        finalString += addLine(i);
    }

    finalString += addSpacesToLine(1);
    finalString += '|';
    finalString += addSpacesToLine(1);
    finalString += '\n';

    return finalString;
}

/**
 * @function Возвращает ASCII-дерево высоты treeSize. В случае введения невалидных данных возвращает null.
 * @param {number} treeSize - требуемая высота ASCII-дерева.
 * @returns {string, null} Строка для вывода ASCII-дерева.
 */
const tree = (treeSize) => {
    if (!treeSize || !Number.isInteger(Number(treeSize)) || treeSize < 3) {
        return null;
    }

    return createTree(treeSize);
};
