/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let arr = str.split('-');
  let newArr = [];
  newArr.push(arr[0]);
  for (i = 1; i < arr.length; i++){
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join('')
}
