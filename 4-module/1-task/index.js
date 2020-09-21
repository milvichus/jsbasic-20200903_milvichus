/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  // ваш код...
  const newULElement = document.createElement("ul");

  friends.map((item) => {
    const newliElenent = document.createElement("li");
    newliElenent.innerHTML = item.firstName + " " + item.lastName;
    newULElement.append(newliElenent)
  })
  return newULElement
}
