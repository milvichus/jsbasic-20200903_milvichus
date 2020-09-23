/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (i = 1; i < table.rows.length; i++){
        table.rows[i].cells[3].getAttribute('data-available') == "true" ? 
        table.rows[i].classList.add("available") : 
        table.rows[i].classList.add("unavailable");

        table.rows[i].cells[3].getAttribute('data-available') == null &&
        table.rows[i].setAttribute("hidden", true);

        if (table.rows[i].cells[2].innerText == "m") {
            table.rows[i].classList.add("male")
        }
        else if (table.rows[i].cells[2].innerText == "f") {
            table.rows[i].classList.add("female")
        }

        table.rows[i].cells[1].innerText < 18 && (table.rows[i].style.textDecoration = "line-through");
    }
}
