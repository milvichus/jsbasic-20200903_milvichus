/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.elem.innerHTML = `<thead><tr><td>Имя</td><td>Возраст</td><td>Зарплата</td><td>Город</td><td></td></tr></thead>`;
    
    let tablerow = this.rows.map(row => {
      const rowdata = Object.values(row).map(val => `<td>${val}</td>`).join('');
      return `<tr>${rowdata}<td><button>X</button></td></tr>`
    }).join('');

    this.elem.innerHTML += `<tbody>${tablerow}</tbody>`;

    this.elem.addEventListener('click', event => this.onXclick(event))
  }
  
  onXclick(ev) {
    ev.target.closest("tr").remove()
  }
}
