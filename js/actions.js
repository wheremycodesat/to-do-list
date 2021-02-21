let addItem = (func) => {
  //func is short for function
  if (func) {
    //Variables
    let list = document.getElementById("items-list");
    let item_name = document.getElementById("item").value;
    let listElements = document
      .getElementById("items-list")
      .getElementsByTagName("li");

    let newItem = document.createElement("li");
    newItem.classList.add("list-element");
    newItem.id = listElements.length + 1;
    newItem.innerHTML =
      item_name +
      "<span onclick='removeItem(" +
      newItem.id +
      ")'> &times; </span>";
    list.appendChild(newItem);
  } else {
    return false;
  }
};

let removeItem = (itemId) => {
  let item = document.getElementById(itemId);
  item.remove();
};
