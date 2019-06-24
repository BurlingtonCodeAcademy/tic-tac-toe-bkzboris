let startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
  startButton.textContent = "Player X's turn"
  startButton.disabled = true;
});
let gameBoard = document.getElementById('board');
let playerTurn = 'X';
let column1 = document.getElementsByClassName('col-1');
let column2 = document.getElementsByClassName('col-2');
let column3 = document.getElementsByClassName('col-3');
let diag1 = document.getElementsByClassName('diag-1');
let diag2 = document.getElementsByClassName('diag-2');
let row1 = document.getElementById('row-1');
let row2 = document.getElementById('row-2');
let row3 = document.getElementById('row-3');

function loopaX(x) {
  for (let content of x) {
    if (content.innerText === 'X') {
    }
    else {
      return false;
    }
  }
}
function loopaO(o) {
  for (let content of o) {
    if (content.innerText === 'O') {
    }
    else {
      return false;
    }
  }
}

gameBoard.addEventListener('click', () => {
  let e = event.target;
  if (startButton.disabled === false) {
    alert('Start the game bro.... there\'s a button'); 
  }
  else if (e.textContent === 'X' || e.textContent === 'O') {
    alert('Please choose an empty square');
    return false;
  }
  else if (playerTurn === 'X') {
    e.style.backgroundColor = 'orange'
    e.innerText = 'X'
    playerTurn = 'O';
    startButton.textContent = "Player O's turn"
  }
  else if (playerTurn === 'O') {
    e.style.backgroundColor = 'green'
    e.textContent = 'O'
    playerTurn = 'X';
    startButton.textContent = "Player X's turn"
  }
});
gameBoard.addEventListener('mousemove', () => {
  if (row1.innerText === "X\nX\nX" || row1.innerText === "O\nO\nO") {
    alert(`Player ${document.getElementById('cell-1').innerText} wins`);
    location.reload(); 
  }
  if (row2.innerText === "X\nX\nX" || row2.innerText === "O\nO\nO") {
    alert(`Player ${document.getElementById('cell-4').innerText} wins`);
    location.reload();
  }
  if (row3.innerText === "X\nX\nX" || row3.innerText === "O\nO\nO") {
    alert(`Player ${document.getElementById('cell-7').innerText} wins`);
    location.reload();
  }
  if (loopaX(column1) === undefined || loopaO(column1) === undefined) {
    alert(`Player ${document.getElementById('cell-3').innerText} Wins`)
    location.reload();
  }
  if (loopaX(column2) === undefined || loopaO(column2) === undefined) {
    alert(`Player ${document.getElementById('cell-4').innerText} Wins`)
    location.reload();
  }
  if (loopaX(column3) === undefined || loopaO(column3) === undefined) {
    alert(`Player ${document.getElementById('cell-5').innerText} Wins`)
    location.reload();
  }
  if (loopaX(diag1) === undefined || loopaO(diag1) === undefined) {
    alert(`Player ${document.getElementById('cell-4').innerText} Wins`)
    location.reload();
  }
  if (loopaX(diag2) === undefined || loopaO(diag2) === undefined) {
    alert(`Player ${document.getElementById('cell-4').innerText} Wins`)
    location.reload();
  }
});


