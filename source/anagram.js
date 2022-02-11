'use strict';
/**
 * Возвращает слово, в котором все буквы уже отсортированы
 * 
 * @param {string} word Слово, буквы которого будем сортировать
 */
const sortWord = (word) => word.split('').sort().join('');

/**
 * Накапливает в cur_result пары "отсортированный набор букв": "слова, которые 
 * можно из них получить"
 * Предназначена для использования в функции reduce
 * 
 * @param {array} cur_result Массив пар
 * @param {string} word Текущее слово, которое проверится на анаграммы 
 *
 */
const process = (cur_result, word) => {
  const wordSorted = sortWord(word);
  if (cur_result.hasOwnProperty(wordSorted)) {
    cur_result[wordSorted].push(word);
  } else {
    cur_result[wordSorted] = [ word ];
  }
  return cur_result
};


/**
 *  Возвращает массив групп-анаграмм, полученный из переданного массива. Массив и группы отсортированы
 * 
 * @param {array} wordList Массив слов, который будет разбиваться на группы-анаграммы
 */
const anagram = (wordList) => {
  
  let anagramGroup = wordList.reduce(process, {});
  if (anagramGroup) {
    anagramGroup = Object.values(anagramGroup).filter((wordList) => wordList.length > 1).map(wordList => wordList.sort())
  }
  if (anagramGroup.length == 0) {
    return null;
  }

  return anagramGroup.sort((a, b) => a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0);
};

