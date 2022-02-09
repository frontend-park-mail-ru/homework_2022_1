/** @global
 *  @constant
 *  @type {string}
 *  @default
*/
const validationError = 'Argument is not a string';
/**
 * The function implements repeat encoding (data compression), replacing repeated characters with one character and its number of repetitions
 * @param {string} str Is the string that you want to convert. For example: 'ABBCCCC'
 * @returns {string} the transformed string. For example: 'AB2C4'
 */
const rle = function (str) {
  if (typeof (str) !== 'string') {
    return validationError;
  }
  let counter = 1;
  let previousCharacter = '';
  const { map } = Array.prototype;
  const resultStr = map.call(str, (currentCharacter) => {
    if (previousCharacter == currentCharacter) {
      if (counter == 9) {
        counter = 1;
        return (`9${currentCharacter}`);
      }
      ++counter;
      return '';
    }
    if (counter == 1) {
      previousCharacter = currentCharacter;
      return currentCharacter;
    }
    const counterResult = counter;
    counter = 1;
    previousCharacter = currentCharacter;
    return (counterResult + currentCharacter);
  });
  if (counter > 1) {
    resultStr[resultStr.length] = counter;
  }
  return (resultStr.join(''));
};
