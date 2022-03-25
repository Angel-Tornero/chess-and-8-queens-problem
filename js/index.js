/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 28 Abr 2021
 * @brief Html script for visualizing a chess board and solving 8 queen problem.
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */

'use strict';

const MAX_ITERATIONS = 110;

/**
 * Generate a solution of 8 queen problem and draws the board with the solution. Also
 * displays a panel with the position of each queen.
 */
function generateSolution() {
  const canvas = document.getElementById('board');
  const chessGame = new Chess(new ChessBoard());
  chessGame.drawBoard(canvas);
  
  const solution = chessGame.generateSolution();
  chessGame.drawBoard(canvas);

  const canvasAlgebra = document.getElementById('algebra');
  let context = canvasAlgebra.getContext('2d');
  context.fillStyle = 'rgba(238, 238, 238, 100)';
  context.fillRect(0, 0, 300, 400);
  
  context.font = '20px Arial';
  context.fillStyle = 'black';
  context.textAlign = 'left';

  for (let i = 0; i < solution.length; i++) {
    context.fillText('- ' + solution[i].getPosition(), 20, 40 + i * 30);
  }
}

function getMousePosition(canvas, event, chessGame) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  let positions = [];
  positions.push([x, y]);
  console.log("Coordinate x: " + x, 
              "Coordinate y: " + y);
  chessGame.movePiece(x, y);
  chessGame.drawBoard(canvas);
}

/**
 * Generate a board with the initial pieces position of a chess game.
 */
function generateGame() {
  const canvas = document.getElementById('board');
  const board = new ChessBoard();
  const chessGame = new Chess(board);

  chessGame.generateGame();
  chessGame.drawBoard(canvas);

  const canvasAlgebra = document.getElementById('algebra');
  let context = canvasAlgebra.getContext('2d');
  context.fillStyle = 'rgba(238, 238, 238, 100)';
  context.fillRect(0, 0, 300, 400);

  context.font = '20px Arial';
  context.fillStyle = 'black';
  context.textAlign = 'center';
  context.fillText('Este panel muestra la', 150, 150);
  context.fillText('posición de cada una de las', 150, 180);
  context.fillText('8 reinas cuando se genera', 150, 210);
  context.fillText('una solución', 150, 240);

  canvas.addEventListener("mousedown", function(e) {
    getMousePosition(canvas, e, chessGame);
    let rect = canvas.getBoundingClientRect();
    let positions = [];
});
}

/**
 * Generate a board with no pieces and displays a helpful message.
 */
function generateBoard() {
  const canvas = document.getElementById('board');
  new ChessBoard().draw(canvas);

  const canvasAlgebra = document.getElementById('algebra');
  let context = canvasAlgebra.getContext('2d');
  context.fillStyle = 'rgba(238, 238, 238, 100)';
  context.fillRect(0, 0, 300, 400);
  
  context.font = '20px Arial';
  context.fillStyle = 'black';
  context.textAlign = 'center';
  context.fillText('Este panel muestra la', 150, 150);
  context.fillText('posición de cada una de las', 150, 180);
  context.fillText('8 reinas cuando se genera', 150, 210);
  context.fillText('una solución', 150, 240);
}