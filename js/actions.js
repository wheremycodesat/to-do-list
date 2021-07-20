document.getElementById("submit-button").addEventListener("click", (e) => {
  //prevent submitting refreshings
  e.preventDefault();

  //control to eliminate empty list's message
  if (document.getElementById("list").children[0].id === "temporal-text") {
    let temp = document.getElementById("temporal-text");
    temp.remove();
  }

  //Variables
  let list = document.getElementById("list");
  let todo_name = document.getElementById("todo-name").value;
  let number_of_elements = document.getElementById("list").childElementCount;

  //New todo
  let new_todo = document.createElement("p");
  new_todo.classList.add("todo");
  new_todo.id = number_of_elements + 1;
  new_todo.innerHTML =
    todo_name +
    "<span class='todo--remove' onclick='removeItem(" +
    new_todo.id +
    ")'> &times; </span>";

  list.appendChild(new_todo);

  document.getElementById("todo-name").value = "";
});

let removeItem = (itemId) => {
  let item = document.getElementById(itemId);

  //Insert empty list's message again
  if (document.getElementById("list").childElementCount === 1) {
    item.remove();
    let p = document.createElement("p");
    p.classList.add("temporal-text");
    p.id = "temporal-text";
    p.innerHTML = "The list is empty";
    let l = document.getElementById("list");
    l.appendChild(p);
  }

  item.remove();
};
