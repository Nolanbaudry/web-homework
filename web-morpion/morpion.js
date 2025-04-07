document.addEventListener('DOMContentLoaded', () => {
    let grid = document.getElementById("grid");
    let carreaux = grid.getElementsByTagName("div");
    let j1 = true;
    let tab_j1 = [];
    let tab_j2 = [];
    let J1score = 0;
    let J2score = 0;
    let tab_win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    
    function reset() {
      for (let i = 0; i < carreaux.length; i++) {
        carreaux[i].classList.remove("hovered_def_j1");
        carreaux[i].classList.remove("hovered_def_j2");
        carreaux[i].classList.remove("hovered_j1");
        carreaux[i].classList.remove("hovered_j2");
      }
      tab_j1 = [];
      tab_j2 = [];
      j1 = true;

    }



    function onmouseover( event) {
        let square = event.target; 
        if(j1){
          square.classList.add("hovered_j1"); // Ajoute la classe "hovered_j1"
        }
        else if (j1 == false){
          square.classList.add("hovered_j2"); // Ajoute la classe "hovered_j2"
        }
    }
  
    function win() {
      for (let i = 0; i < tab_win.length; i++) {
        const combination = tab_win[i];
    
        // Check if all positions in the combination are in tab_j1 (Player 1)
        if (combination.every(pos => tab_j1.includes(pos))) {
          console.log("Le joueur 1 a gagné !");
          // Increment Player 1's score
          J1score++;
          let score_j1 = document.getElementById("score1");
          score_j1.innerHTML = J1score;
          return true;
        }
    
        // Check if all positions in the combination are in tab_j2 (Player 2)
        if (combination.every(pos => tab_j2.includes(pos))) {
          console.log("Le joueur 2 a gagné !");
          // Increment Player 2's score
          J2score++;
          let score_j2 = document.getElementById("score2");
          console.log(score_j2);
          score_j2.innerHTML = J2score;
          console.log(score_j2);

          return true;
        }
      }
    
      // No winning combination found
      return false;
    }




    function onmouseout(event) {
      let square = event.target; // Élément déclencheur de l'événement
      if(j1){
        square.classList.remove("hovered_j1"); // Retire la classe "hovered_j1"
      }
      else if (j1 == false){
        square.classList.remove("hovered_j2"); // Retire la classe "hovered_j2"
      }

  }
  
    function click(event) {
      let square = event.target;
      let id = square.id;
      if (square.classList.contains("hovered_def_j1") || square.classList.contains("hovered_def_j2")) {
        return;
      } else if (j1){
        square.classList.add("hovered_def_j1");
        tab_j1.push(parseInt(id));
        console.log(tab_j1);
      } else if (j1 == false){
        square.classList.add("hovered_def_j2");
        tab_j2.push(parseInt(id));
        console.log(tab_j2);
      }
      j1 = !j1; // Change le joueur

      console.log("click");
      if (win()){

        reset();
      }
      
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