document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
});


function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}

function Add(){
  console.log("add")
  let grid = document.getElementById("grid");
  for (let i=0; i<10; i++){
    const div = document.createElement("div");
    grid.appendChild(div);
  }

}




document.addEventListener('DOMContentLoaded', () => {
let grilles = document.getElementById("grid")

const changeColor = () => {
  console.log("changeColor")
    if (grilles.style.backgroundColor == "blue") {
       grilles.style.backgroundColor= "red"
    } else  {
      grilles.style.backgroundColor = "blue"
    }
}
  

grilles.addEventListener('click', changeColor)
changeColor()



})
document.addEventListener('DOMContentLoaded', () => {
  let grid = document.getElementById("grid");
  let carreaux = grid.getElementsByTagName("div");


  function onmouseover(i, event) {
      let square = event.target; 
      carreaux[i].classList.add("hovered")

      console.log("Index:", i);   
      console.log("Element:", square); 
      console.log("here");
  }

  let n = carreaux.length;


  for (let i = 0; i < n; i++) {
      // Utilisation d'une fonction anonyme pour capturer 'i'
      carreaux[i].addEventListener("mouseover", (event) => onmouseover(i, event));
  }
});