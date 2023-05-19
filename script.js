const container = document.querySelector(".grid");

function createDiv(width, height) {
  for (let i = 0; i < width * height; i++) {
    const div = document.createElement("div");
    div.className = "sketchBox";
    container.appendChild(div);
  }
  container.style.width = `${(width + 1) * (height + 1)}px`;
}

createDiv(16, 16);

// hover functionality
const sketchBoxes = document.querySelectorAll(".sketchBox");

function addDrawingFunctionality() {
  sketchBoxes.forEach((sketchBox) => {
    sketchBox.addEventListener("mouseover", () => {
      sketchBox.className = "sketchBoxMouseover";
    });
  });
}

// Add functionality to create a Grid
const addGridButton = document.querySelector(".setGrid");
addGridButton.addEventListener("click", () => {
  container.innerHTML = "";
  createDiv(14, 14);
});

addDrawingFunctionality();
