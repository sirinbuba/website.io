const gameBoard = document.getElementById('game-board');
const restartBtn = document.getElementById('restart-btn');
const dot = document.createElement('div');
dot.classList.add('dot');

let dotSize = 20;
let boardWidth = 400;
let boardHeight = 400;
let direction = 1; // 1: right, -1: left, 2: down, -2: up
let snake = [
  { x: boardWidth / 2, y: boardHeight / 2 }
];
let apple = { x: 0, y: 0 };

function createApple() {
  apple = {
    x: Math.floor(Math.random() * (boardWidth / dotSize)) * dotSize,
    y: Math.floor(Math.random() * (boardHeight