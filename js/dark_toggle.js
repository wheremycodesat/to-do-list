let toggle = document.getElementById("switch");
let html = document.getElementsByTagName("html")[0];

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    html.setAttribute("theme", "dark-theme");
  } else {
    html.setAttribute("theme", "light-theme");
  }
});
