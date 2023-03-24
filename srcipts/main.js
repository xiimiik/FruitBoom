const toggleSwitch = document.getElementById("toggle-lang");
const toggleLabel = document.querySelector(".toggle-label");

toggleSwitch.addEventListener("change", function() {
  if (this.checked) {
    toggleLabel.setAttribute("data-on", "ENG");
    toggleLabel.setAttribute("data-off", "UA");
  } else {
    toggleLabel.setAttribute("data-on", "UA");
    toggleLabel.setAttribute("data-off", "ENG");
  }
});
