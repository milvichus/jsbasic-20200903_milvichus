/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let numbers = str.match(/[+-]?\d+(?:\.\d+)?/g); // регулярку признаюсь нашел, но разобрался что делает каждый блок :)

  return {
    min: Math.min( ...numbers ),
    max: Math.max( ...numbers )
  }
}
