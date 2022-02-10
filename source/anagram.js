'use strict';
/**
 * Возвращает слово, в котором все буквы уже отсортированы
 * 
 * @param {string} word Слово, буквы которого будем сортировать
 */
let sortWord = (word) => word.split('').sort().join('');

/**
 *  Возвращает массив групп-анаграмм, полученный из переданного массива. Массив и группы отсортированы
 * 
 * @param {array} array Массив слов, который будет разбиваться на группы-анаграммы
 */
function anagram(array) {
    let result = {};

    function process(word)
    {
        let wordSorted = sortWord(word);
        if (result.hasOwnProperty(wordSorted))
        {
            result[wordSorted].push(word);
        }
        else
        {
            result[wordSorted] = [ word ];
        }
    }

    array.forEach(process); 
    
    if (result)
    {
        result = Object.values(result);
        result = result.filter((array) => array.length >= 2)
        result.map(array => array.sort())
    }
    result = result.length === 0 ? null : 
        result.sort((a, b) => a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0);
    return result;
}
