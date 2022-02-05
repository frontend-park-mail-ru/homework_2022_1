'use strict';

/**
 *  Возвращает true, если слово word можно получить перестановкой любого слова из matrix
 * 
 * @param {string} word Слово, проверяем, искались ли анаграммы для него
 * @param {array} matrix Массив групп строк-анаграмм
 */
function alreadyProcessed(word, matrix)
{
	let sortedWord = word.split('').sort().join('');
	for (let array of matrix)
	{
		let sorted = array[0].split('').sort().join('');
		if (sortedWord === sorted)
			return true;
	}
	return false;
}

/**
 *  Возвращает массив групп-анаграмм, полученный из переданного массива. Массив и группы отсортированы
 * 
 * @param {array} array Массив слов, который будет разбиваться на группы-анаграммы
 */
function anagram(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let firstWord = String(array[i]);
        let group = [];
        group.push(firstWord);
        let firstSorted = firstWord.split('').sort().join('');
		if (alreadyProcessed(firstWord, result))
			continue;
        for (let j = i + 1; j < array.length; j++) {
            let secondWord = String(array[j]);
            let secondSorted = secondWord.split('').sort().join('');
            if (firstSorted === secondSorted)
                group.push(secondWord);
        }
        if (group.length >= 2)
            result.push(group.sort());
    }
    if (result.length === 0)
        result = null;
    else
        result.sort((a, b) => a[0] > b[0]);
    return result;
}