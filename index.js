var word;
var COL = 5;
var ROW = 6;
var currentCol = 0;
var currentRow = 0;
const cells = document.querySelectorAll("td");

document.addEventListener('keydown',function(event){

  let key = event.key.toUpperCase(); 

  function currentBox(row, col){
    return row * COL + col;
  }
  
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

if (event.key === "Enter" && currentCol === COL){
    currentRow++;
}

if (event.key === "Enter" && currentCol !== COL){
    alert("Pls Enter full Word");
}
// while(currentRow != 6){
//     let index = currentBox(currentRow, currentCol);
//     if()
// }
}});
