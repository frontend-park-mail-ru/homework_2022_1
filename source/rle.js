/**
 * The function implements repeat encoding (data compression), replacing repeated characters with one character and its number of repetitions
 * @param {string} str Is the string that you want to convert. For example: 'ABBCCCC'
 * @returns {string} the transformed string. For example: 'AB2C4'
 */
 const rle = function (str) {
    try {
      if (typeof (str) !== 'string') {
        throw new TypeError('The argument must be of type "string"');
      }
    } catch (error) {
      console.error(error);
    }
    let resultStr = str.charAt(0);
    let counter = 1;
    for (let i = 1; i < str.length; ++i) {
      if (str.charAt(i - 1) == str.charAt(i)) {
        ++counter;
      } else if (counter == 1) {
        resultStr += str.charAt(i);
      } else {
        resultStr += counter + str.charAt(i);
        counter = 1;
      }
      if (i == str.length - 1 && counter > 1) {
        resultStr += counter;
      }
    }
    return resultStr;
  };
  