const boxes = document.querySelectorAll(".box");

const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");

const resultOverlay = document.querySelector("#resultOverlay");
const msg = document.querySelector("#msg");

const turnText = document.querySelector("#turnText");

const playerO = document.querySelector("#playerO");
const playerX = document.querySelector("#playerX");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//BOX CLICK

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";

      box.classList.add("o");

      turnO = false;
    } else {
      box.innerText = "X";

      box.classList.add("x");

      turnO = true;
    }

    box.disabled = true;

    count++;

    updateTurnIndicator();

    const winner = checkWinner();

    if (count === 9 && !winner) {
      gameDraw();
    }
  });
});

//UPDATE TURN

function updateTurnIndicator() {
  if (turnO) {
    turnText.textContent = "Player O's Turn";

    playerO.classList.add("active-player");

    playerX.classList.remove("active-player");
  } else {
    turnText.textContent = "Player X's Turn";

    playerX.classList.add("active-player");

    playerO.classList.remove("active-player");
  }
}

//CHECK WINNER

function checkWinner() {
  for (const pattern of winPatterns) {
    const pos1 = boxes[pattern[0]].innerText;
    const pos2 = boxes[pattern[1]].innerText;
    const pos3 = boxes[pattern[2]].innerText;

    if (
      pos1 !== "" &&
      pos2 !== "" &&
      pos3 !== "" &&
      pos1 === pos2 &&
      pos2 === pos3
    ) {
      showWinner(pos1, pattern);

      return true;
    }
  }

  return false;
}

// SHOW WINNER

function showWinner(winner, pattern) {
  pattern.forEach((index) => {
    boxes[index].classList.add("winner");
  });

  msg.textContent = `Player ${winner} Wins!`;

  resultOverlay.classList.remove("hide");

  disableBoxes();
}

//DRAW

function gameDraw() {
  msg.textContent = "It's a Draw!";

  resultOverlay.classList.remove("hide");

  disableBoxes();
}

//DISABLE BOXES

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

//ENABLE BOXES

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;

    box.innerText = "";

    box.classList.remove("x", "o", "winner");
  });
}

// RESET GAME

function resetGame() {
  turnO = true;

  count = 0;

  enableBoxes();

  resultOverlay.classList.add("hide");

  updateTurnIndicator();
}

//BUTTON EVENTS

newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);

//INITIAL STATE

updateTurnIndicator();
