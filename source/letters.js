'use strict';

const ARGUMENT_IS_NOT_STRING_ERROR = 'The first argument must be string';
const ARGUMENT_IS_NOT_OPTIONAL_BOOLEAN_ERROR = 'The second argument must be optional boolean';

/**
 * @function Удаляет повторяющиеся символы из строки.
 * @param {string} inputString Строка, из которой удаляем символы.
 * @param {boolean} [isFirstSymbolRepeated] true оставляем первый повторяющийся символ, false оставляем последний повторяющийся символ.
 * @return {string} Новая строка без повторяющихся символов.
 */
const letters = (inputString, isFirstSymbolRepeated) => {
  if (typeof inputString !== 'string' && !(inputString instanceof String)) {
    throw TypeError(ARGUMENT_IS_NOT_STRING_ERROR);
  }
  if (typeof isFirstSymbolRepeated !== 'boolean' && isFirstSymbolRepeated !== undefined) {
    throw TypeError(ARGUMENT_IS_NOT_OPTIONAL_BOOLEAN_ERROR);
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
