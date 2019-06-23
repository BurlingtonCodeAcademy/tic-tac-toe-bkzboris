

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
//could not figure out how 
  if (row1.innerText === "X\nX\nX" || row1.innerText === "O\nO\nO") {
    //have to use this long get ID of cell-0 because if get innerText 
    //of the row it = "X\nX\nX" or "O\nO\nO"
    alert(`Player ${document.getElementById('cell-0').innerText} wins`);
    location.reload();
  }
  if (row2.innerText === "X\nX\nX" || row2.innerText === "O\nO\nO") {
    //here it alerts "X\nX\nX" or "O\nO\nO"
    alert(`Player ${row2.innerText} wins`);
    location.reload();
  }
  if (row3.innerText === "X\nX\nX" || row3.innerText === "O\nO\nO") {
    alert(`Player ${row3.innerText} wins`);
    location.reload();
  }
  //cannot figure out how to caputure the 'innerText' of my column1 variable
  //which is an HTMLcollection of the following 3 cells
  if (document.getElementById('cell-0').innerText === "X" &&
    document.getElementById('cell-3').innerText === 'X' &&
    document.getElementById('cell-6').innerText === 'X') {   
    alert(`Player X wins`);
    location.reload();
  }
});


