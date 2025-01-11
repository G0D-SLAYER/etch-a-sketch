const row = 16;
const column = 16;

const container = document.querySelector("#container");
let div = null

let containerStyle = window.getComputedStyle(container);
let width = parseInt(containerStyle.getPropertyValue("width"));
let gridSide = (width/16) - 2;
let side = gridSide+"px";
console.log(width);

for (i = 0; i < row; i++){
    for (j = 0; j < column; j++){
        div = document.createElement("div");
        div.className = "grid";
        div.style.width = side;
        div.style.height = side;
        container.appendChild(div);
    }
}

