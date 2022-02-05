'use strict';

/**
 * @function Удаляет повторяющиеся символы из строки.
 * @param {string} inputString Строка, из которой удаляем символы.
 * @param {boolean} isFirstSymbolRepeated true оставляем первый повторяющийся символ, false оставляем последний повторяющийся символ.
 * @return {string} Новая строка без повторяющихся символов.
 */
const letters = (inputString, isFirstSymbolRepeated) => {
  if (typeof inputString !== 'string' && !(inputString instanceof String)) {
    throw Error('The first argument must be string');
  }
  if (typeof isFirstSymbolRepeated !== 'boolean' && isFirstSymbolRepeated !== undefined) {
    throw Error('The second argument must be optional boolean');
  }

  return inputString
    .split('')
    .filter((item, pos, self) => {
      switch (isFirstSymbolRepeated) {
        case true:
          return self.indexOf(item) === pos;
        case false:
          return self.lastIndexOf(item) === pos;
        default:
          return self.indexOf(item) === self.lastIndexOf(item);
      }
    })
    .join('');
};
