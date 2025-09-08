//This Shit starts here 
var word = "Avani";
var COL = 5;
var ROW = 6;
var currentCol = 0;
var currentRow = 0;

//initialising stuff ig
const cells = document.querySelectorAll("td");
let heading = document.getElementById("title");

//idk how this logic works, but if it works, dont touch it
function currentBox(row, col){
    return row * COL + col;
  }

document.addEventListener('keydown',function(event){

  let key = event.key.toUpperCase(); 

  //keydown for the alphas :)
  if (/^[A-Z]$/.test(key) && currentCol < COL) {
    let index = currentBox(currentRow, currentCol);
    cells[index].textContent = key;
    currentCol ++;
  }

  //keydown for backspace which likes to malfunction whenever it likes (idc at this point)
  if (event.key === "Backspace" && currentCol >= 0) {
    let index = currentBox(currentRow, currentCol);
    if(currentCol != 0){
        currentCol--;
    }
    else{
        currentCol = 0;
    }
    cells[index].textContent = "";
  }

  //keydown for delete, this baby works perfectly (ik wordle doesnt have it, but i am learning, so more stuff in a code)
  if (event.key === "Delete" && currentCol > 0){
    var x = currentCol;
    for(i = 0 ; i<x; i++){
        currentCol = i;
        let index = currentBox(currentRow, currentCol);
        cells[index].textContent = "";
    }
    currentCol = 0;
  }

  //the most important keydown, i could have created a function, but i really dont have much practice of using functions atm and laziness...
  if (event.key === "Enter"){
    if(currentCol === 5){
      //creating an array to avoid overlaps
      let used = Array(5).fill(false);
      let completeCorrect = Array(5).fill(false);
      for(i=0; i<5; i++){
        let index = currentBox(currentRow, i);
        let cell = cells[index];
        let letter = cell.textContent;
        if (letter === word[i].toUpperCase()){
          cell.classList.add("correct");
          used[i]=true;
          completeCorrect[i]=true;
        }
      }
      for(i=0; i<5; i++){
        let index = currentBox(currentRow, i);
        let cell = cells[index];
        let letter = cell.textContent;
        for(j=0; j<5; j++){
          if(letter === word[j].toUpperCase() && !used[i]){
              cell.classList.add("present");
              used[i]=true;
          }
        }
      }
      //this will help to check if all the falses in completeCorrect are true or not
      if (completeCorrect.every(v => v === true)){
        heading.textContent = "You Win!";
        //so that we wont be able to backspace/delete/whatever the heck the other keydowns were (sorry its 2am rn)
        document.removeEventListener("keydown", handleKey);
        //for some reason you cant use break here, return will exit the event listener
        return;
      }
      currentRow ++;
      currentCol = 0;

      if (currentRow == 6 && !(completeCorrect.every(v => v === true))){
        heading.textContent = "Try Again";
        document.removeEventListener("keydown", handleKey);
        return;
      }
  }
  else{
    alert("Pls Enter The full word!")
  }
  console.log(currentCol);

}
});