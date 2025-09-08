var word = "Avani";
var COL = 5;
var ROW = 6;
var currentCol = 0;
var currentRow = 0;
const cells = document.querySelectorAll("td");

function currentBox(row, col){
    return row * COL + col;
  }

document.addEventListener('keydown',function(event){

  let key = event.key.toUpperCase(); 
  
  if (/^[A-Z]$/.test(key) && currentCol < COL) {
    let index = currentBox(currentRow, currentCol);
    cells[index].textContent = key;
    currentCol ++;
  }

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

  if (event.key === "Delete" && currentCol > 0){
    var x = currentCol;
    for(i = 0 ; i<x; i++){
        currentCol = i;
        let index = currentBox(currentRow, currentCol);
        cells[index].textContent = "";
    }
    currentCol = 0;
  }

  if (event.key === "Enter"){
    if(currentCol === 5){
      for(i=0; i<5; i++){
        let index = currentBox(currentRow, i);
        let cell = cells(index);
        let letter = cell.textContent;
        if (letter === word[i]){
          cell.classList.add("correct");
        }
      }
      for(i=0; i<5; i++){
        for(j=0; j<5; j++){
          let index = currentBox(currentRow, i);
          let cell = cells(index);
          let letter = cell.textContent;
          if(letter === word[j]){
            cell.classList.add("present");
            break;
          }
          let index = currentBox(currentRow, i);
          let cell = cells(index);
          cell.classList.add("absent");
        }
      }
      currentRow ++;
      currentCol = 0;
  }
  else{
    alert("Pls Enter The full word!")
  }
  console.log(currentCol);
}
});
