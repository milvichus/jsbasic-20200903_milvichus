/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  return str.toLowerCase().search("1xbet") >= 0 || str.toLowerCase().search("xxx") >= 0;
}
