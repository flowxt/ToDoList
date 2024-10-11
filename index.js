const form = document.querySelector("form");

// Storage part
function storeList() {
  window.localStorage.toDoList = list.innerHTML;
}

function getToDos() {
  if (window.localStorage.toDoList) {
    list.innerHTML = window.localStorage.toDoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un toDo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getToDos);
getToDos();
// Add element form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//remove element form
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
