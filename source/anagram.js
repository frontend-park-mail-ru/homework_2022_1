'use strict';
/**
 * Возвращает слово, в котором все буквы уже отсортированы
 * 
 * @param {string} word Слово, буквы которого будем сортировать
 * @returns {string} Слово, буквы которого отсортированы
 */
const sortWord = (word) => word.split('').sort().join('');

/**
 * Накапливает в curResult пары "отсортированный набор букв": "слова, которые 
 * можно из них получить"
 * Предназначена для использования в функции reduce
 * 
 * @param {string[]} curResult Массив пар
 * @param {string} word Текущее слово, которое проверится на анаграммы 
 * @returns {string[]} Массив пар вида "отсортированный набор букв": "слова, которые 
 * можно из них получить"
 */
const splitOnAnagrams = (curResult, word) => {
  const wordSorted = sortWord(word);
  if (curResult.has(wordSorted)) {
    const anagramGroup = curResult.get(wordSorted);
    anagramGroup.push(word);
    curResult.set(wordSorted, anagramGroup);
  } else {
    curResult.set(wordSorted, [ word ])
  }
  return curResult;
};


/**
 *  Возвращает массив групп-анаграмм, полученный из переданного массива. Массив и группы отсортированы
 * 
 * @param {string[]} wordList Массив слов, который будет разбиваться на группы-анаграммы
 * @returns {string[][]} Массив групп-анаграмм
 */
const anagram = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length == 0 || typeof wordList[0]  != 'string') {
    return null;
  }
  const anagramGroup = Array.from(
    wordList.reduce(splitOnAnagrams, new Map())
    .values()).filter((wordList) => wordList.length > 1).
    map(wordList => wordList.sort());
  if (anagramGroup.length == 0) {
    return null;
  }

  return anagramGroup.sort((a, b) => a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0);
};
