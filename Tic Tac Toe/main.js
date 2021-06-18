const cellElements = document.querySelectorAll(".grid > div");
const playerElement = document.querySelector("#player");
const resetButtonElement = document.querySelector("#restart");

let player = 1;
let playerWon = false;
let clickCount = 0;
let state = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

cellElements.forEach(el => {
  el.addEventListener("click", function() {
    clickCell(el.dataset.row, el.dataset.col);
  })
})

resetButtonElement.addEventListener("click", function() {
    restartGame();
})


function clickCell(row, col) {  
    clickCount++;

    if (state[row][col] == 0 ) {
        state[row][col] = player;
    } else {
        alert("Please select an empty box!");
        return
    }

    setCellValue(row, col);
    checkWinning(row, col);
    playerWon = checkWinning(row, col);
    if (playerWon) {
        playerElement.innerHTML = `Player ${ player } wins!!`
        return
    }

    if (clickCount == 9) {
        playerElement.innerHTML = `Tie Game!!`
        return
    }

    togglePlayer();
}

function setCellValue(row, col){
  const index = parseInt(row) * 3 + parseInt(col);
  const cellElement = cellElements[index];
  cellElement.innerHTML = player == 1 ? "✅" : "❌";
}

function togglePlayer() {
  player = player == 1 ? 2 : 1;
  playerElement.innerHTML = "Player " + player;
}

function checkWinning(row, col) {
  // Check row
  let rowCount = 0;
  for (let i = 0; i < 3; i++) {
    if (state[row][i] == player) {
      rowCount++
    }
  }

  // Check column
  let colCount = 0;
  for (let i = 0; i < 3; i++) {
    if (state[i][col] == player) {
      colCount++
    }
  }

  // Check diagonal
  let diagonalCount = 0;
  for (let i = 0; i < 3; i++) {
    if (state[i][i] == player) {
      diagonalCount++
    }
  }

  // Check reverse diagonal
  let rDiagonalCount = 0;
  for (let i = 0; i < 3; i++) {
    if (state[i][3 - 1 - i] == player) {
      rDiagonalCount++
    }
  }

  return rowCount == 3 || colCount == 3 || diagonalCount == 3 || rDiagonalCount == 3;
}

function restartGame() {
    if (!playerWon && clickCount < 9) {
        if (!confirm("Are you sure you want to reset this game?")) {
            return;
        }
    }

    player = 1;
    playerWon = false;
    clickCount = 0;
    state = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    playerElement.innerHTML = "Player 1"
    cellElements.forEach(el => {
        el.innerHTML = ""
    });    
}