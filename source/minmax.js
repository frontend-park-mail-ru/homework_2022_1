/**
 * find min and max value in string
 * @param {string} value
 * @returns {Array<number>[minValue, maxValue]}
 */
const minmax = (value) => {
  if (!(typeof (value) === 'string' || value instanceof String) || (value === '')) {
    return [undefined, undefined];
  }
  const splitValue = value.split(' ')
    .map((string) => parseFloat(string))
    .filter((item) => !Number.isNaN(item));

  return splitValue.reduce((
    [min = Infinity, max = -Infinity],
    current,
  ) => [(min > current) ? current : min,
    (max < current) ? current : max], [undefined, undefined]);
};
