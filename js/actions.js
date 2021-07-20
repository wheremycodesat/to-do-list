let addItem = (func) => {
  //func is short for function
  if (func) {
    //Variables
    let list = document.getElementById("item-list");
    let item_name = document.getElementById("item").value;
    let listElements = document
      .getElementById("item-list")
      .getElementsByTagName("li");

    let newItem = document.createElement("li");
    newItem.classList.add("list-element");
    newItem.id = listElements.length + 1;
    newItem.innerHTML =
      item_name +
      "<span class='remove-todo' onclick='removeItem(" +
      newItem.id +
      ")'> &times; </span>";
    list.appendChild(newItem);

    document.getElementById("item").value = "";
  } else {
    return false;
  }
};

let removeItem = (itemId) => {
  let item = document.getElementById(itemId);
  item.remove();
};
