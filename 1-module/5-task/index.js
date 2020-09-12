/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  return (str.length - 3 <= maxlength) ? str : str.substring(0, maxlength - 1) + "…";
}
