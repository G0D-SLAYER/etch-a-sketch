const row = 16;
const column = 16;

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector("#container");
let div = null

let containerStyle = window.getComputedStyle(container);
let width = parseInt(containerStyle.getPropertyValue("width"));
let gridSide = (width/16) - 2;
let side = gridSide+"px";
// console.log(width);

for (i = 0; i < row; i++){
    for (j = 0; j < column; j++){
        div = document.createElement("div");
        div.className = "grid";
        div.style.width = side;
        div.style.height = side;
        container.appendChild(div);
    }
}

const grid = document.querySelectorAll(".grid");

grid.forEach((square) => {
    square.addEventListener("mouseover", () => {
        const randomColor = getRandomRGB();
        square.style.backgroundColor = randomColor;
  
        let currentOpacity = parseFloat(square.style.opacity);
        if (currentOpacity < 1) {
          square.style.opacity = (currentOpacity + 0.1).toString();
        }
    });
})