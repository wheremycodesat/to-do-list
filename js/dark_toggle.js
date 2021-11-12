document.addEventListener("DOMContentLoaded", function () {
  darkMode();
});

function darkMode() {
  const toggle = document.getElementById("switch");
  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

  darkModePreference.addEventListener("change", function () {
    if (darkModePreference.matches) {
      document.body.classList.add("dark-theme");
      toggle.setAttribute("checked", true);
    } else {
      document.body.classList.remove("dark-theme");
      toggle.setAttribute("checked", false);
    }
  });

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  });
}
