let notEmpty = (id, tagId) => {
  var flag = true;

  if (document.getElementById(id).value == "") {
    flag = false;
  }

  if (!flag) {
    document.getElementById(id).style.borderColor = "#ff3333";
    document.getElementById(tagId).innerHTML = "Field cannot be empty";
    document.getElementById(tagId).style.color = "#ff0000";
    return false;
  } else {
    return true;
  }
};

let deleteErrorMessage = (id, tagId) => {
  document.getElementById(id).style = "none";
  document.getElementById(tagId).innerHTML = "";
};
