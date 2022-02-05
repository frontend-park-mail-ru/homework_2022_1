'use strict';
/*
Куликов Николай вариант 14
Задание:
Напишите функцию set, которая получает путь к вложенному свойству объекта и устанавливает значение в это свойство
 */

const set = (object, path, value) => {
    let result = object
    path.split(".").slice(1).forEach((key, index, arr) => {
        if (index === arr.length - 1){ // last element exit loop
            result[key] = value
            return object
        }
        if (!result[key]){ // doesn't exists - create new object & switch pointer
            result[key] = {}
            result = result[key]
        }
        if (typeof result[key] == 'object'){ // check
            result = result[key]
        }
    })
    return object
}
