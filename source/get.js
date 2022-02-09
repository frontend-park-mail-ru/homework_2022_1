'use strict';

/**
 *  Получает путь к вложенному свойству объекта и возвращает значение этого свойства (или undefined, если свойства не существует)
 * 
 * @param {any} obj - объект, значения свойства которого возвращаем
 * @param {string} pathToProperty - путь до вложенного свойства
 * @return {any | undefined} - возвращает значение свойства или undefined, если свойства нет
 */

const get = (obj, pathToProperty) => {
    if (!obj || typeof pathToProperty !== 'string'){
        return;
    }

    let tempObj = {...obj};

    const listOfProperties = pathToProperty.split('.');

    listOfProperties.forEach(property => {
        if (tempObj !== undefined && property){
            tempObj = tempObj[property];
        }
        else{
            return;
        }
    })

    return tempObj;
}
