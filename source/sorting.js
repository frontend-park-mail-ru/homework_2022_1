'use strict';

/**
 * Функция принимает на вход массив plain-объектов и массив имён свойств,
 * по которым необходимо отсортировать массив объектов,
 * и реализует устойчивую сортировку этого массива в порядке возрастания
 * (строки сортируются лексикографически, числа — в порядке возрастания).
 *
 * @param {Array} arr - исходный массив, который сортируется
 * @param {Array} keys - массив имен свойств, по которым проводится сортировка
 *
 * @returns {Array} arr - возвращает отсортированный массив
 */

const sorting = (arr, keys) => {
    if (!Array.isArray(arr) || !Array.isArray(keys)) {
        return undefined;
    }

    if (arr.length == 0 || keys.length == 0) {
        return arr;
    }

    keys.reverse().forEach(it => {
        arr.sort((last, next) => { // sort stability is observed
            if (typeof last[it] == 'number' || typeof next[it] == 'number') {
                if (last[it] > next[it]) return 1;
                if (last[it] < next[it]) return -1;
                return 0;
            } else {
                let collator = new Intl.Collator(undefined, {
                    caseFirst: 'upper' // uppercase first
                });
                return collator.compare(last[it], next[it]);
            }
        })
    });

    return arr;
}
