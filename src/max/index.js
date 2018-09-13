/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  return arr
    .filter(value =>isFinite(value)&& !isNaN(value))
    .reduce((previousValue, currentValue) => Math.max(previousValue,currentValue));
};

export default max;
