const container = document.getElementById("container");
const overlayCon = document.getElementById("overlayCon");
const overlayBtn = document.getElementById("overlayBtn");

overlayBtn.addEventListener("click", () => {
  container.classList.toggle("right-panel-active");

  overlayBtn.classList.remove("btnScaled");
  window.requestAnimationFrame(() => {
    overlayBtn.classList.add("btnScaled");
  });
});

let state = false;
function toggleEye() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    state = true;
  }
}

function togglepPassword() {
  if (state) {
    document.getElementById("passwordField").setAttribute("type", "password");
    state = false;
  } else {
    document.getElementById("passwordField").setAttribute("type", "text");
    state = true;
  }
}
