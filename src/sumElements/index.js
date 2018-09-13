/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  var tmpArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && isFinite(arr[i])) tmpArr.push(arr[i]);
  }
  var acc = 0;
  for (let i = 0; i < tmpArr.length; i++) {

    let tmpArrElement = tmpArr[i];
    if (typeof tmpArrElement === 'string' && typeof parseInt(tmpArrElement) === 'number') {
      var parsedInt = parseInt(tmpArrElement);
      var parsedFloat = parseFloat(tmpArrElement);
      if (parsedInt > parsedFloat) {
        acc = acc + parsedInt;
      }
      else acc = acc + parsedFloat;
    }
     else if (typeof tmpArrElement ==='number') {
      acc = acc + tmpArrElement;
    }
  }
  return acc;
};

export default sumElements;
