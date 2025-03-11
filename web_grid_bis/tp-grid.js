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








document.addEventListener('DOMContentLoaded', () => {
  let grid = document.getElementById("grid");
  let carreaux = grid.getElementsByTagName("div");
  let button = document.getElementById("btn-add-line")

  function Add(){
    console.log("add")
    let grid = document.getElementById("grid");
    for (let i=0; i<10; i++){
      const div = document.createElement("div");
      div.addEventListener("mouseover", (event) => onmouseover (event));
      div.addEventListener("mouseout", (event) => onmouseout(event));
      div.addEventListener("click",(event)=> click(event))
      grid.appendChild(div);
    }
  
  }
  button.addEventListener('click', Add)


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

  function onmouseover( event) {
      let square = event.target; 
      square.classList.add("hovered")
      console.log("Element:", square); 
      console.log("here");
  }

  function onmouseout(event) {
    let square = event.target; // Élément déclencheur de l'événement
    square.classList.remove("hovered"); // Retire la classe "hovered"
}


  
  function click(event) {
    let square = event.target;
    if (square.classList.contains("hovered_def")) {
      square.classList.remove("hovered_def");
    } else {
      square.classList.add("hovered_def");
    }
    console.log("click");
    console.log(n)
  }
    
  
  let n = carreaux.length;
for(const div of document.querySelectorAll("#grid > div")) {
      // Utilisation d'une fonction anonyme pour capturer 'i'
      div.addEventListener("mouseover", (event) => onmouseover (event));
      div.addEventListener("mouseout", (event) => onmouseout(event));
      div.addEventListener("click",(event)=> click(event))

  }
 

function remove(){

  let children = grilles.childNodes

}

})
/* for(const div of document.querySelectorAll("#grid > div")){
  div.addEventListener("click",(event) => {
    event.target.style.backgroundColor = randomColor()
  })*/