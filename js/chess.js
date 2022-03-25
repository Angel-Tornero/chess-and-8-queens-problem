/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 28 Abr 2021
 * @brief Class chess for visualizing a chess board on html and solve 8 queen problem.
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */

'use strict';

/**
 * @class Chess - Class for representing chess.
 */
class Chess {
  /**
   * @private
   */
  #boardSize;
  /**
   * @private
   */
  #WHITE = 'White';
  /**
   * @private
   */
  #BLACK = 'Black';
  /**
   * @private
   */
   #board;

  /**
   * Create a Chess object.
   */
  constructor(board) {
    this.#board = board;
    this.#boardSize = this.#board.getSize();
  }

  /**
   * Generate a random solution of 8 queen problem.
   * @returns {Array<ChessPieceQueen>} - Array with 8 queen objects.
   */
  generateSolution() {
    let queens = [];
    for (let i = 0; i < this.#boardSize; i++) {
      queens[i] = new ChessPieceQueen(this.#WHITE, i, Math.floor(Math.random() * this.#boardSize));
    }
    let counter = 0;
    while (!this.#queensAreSafe(queens)) {
      queens[counter % this.#boardSize].setColumn(Math.floor(Math.random() * this.#boardSize));
      counter++;
    }
    for (let i = 0; i < queens.length; i++) {
      this.#board.addPiece(queens[i]);
    }
    return queens;
  }

  /**
   * Generate the initial board of a chess game.
   * @returns {Array<ChessPiece>}
   */
   generateGame() {
    for (let i = 0; i < this.#boardSize; i++) {
      switch(i) {
        case 0:
        case 7:
          this.#board.addPiece(new ChessPieceRook(this.#WHITE, 7, i));
          this.#board.addPiece(new ChessPieceRook(this.#BLACK, 0, i));
          break;
        case 1:
        case 6:
          this.#board.addPiece(new ChessPieceKnight(this.#WHITE, 7, i));
          this.#board.addPiece(new ChessPieceKnight(this.#BLACK, 0, i));
          break;
        case 2:
        case 5:
          this.#board.addPiece(new ChessPieceBishop(this.#WHITE, 7, i));
          this.#board.addPiece(new ChessPieceBishop(this.#BLACK, 0, i));
          break;
        case 3:
          this.#board.addPiece(new ChessPieceQueen(this.#WHITE, 7, i));
          this.#board.addPiece(new ChessPieceQueen(this.#BLACK, 0, i));
          break;
        case 4:
          this.#board.addPiece(new ChessPieceKing(this.#WHITE, 7, i));
          this.#board.addPiece(new ChessPieceKing(this.#BLACK, 0, i));
          break;
      }
      this.#board.addPiece(new ChessPiecePawn(this.#WHITE, 6, i));
      this.#board.addPiece(new ChessPiecePawn(this.#BLACK, 1, i));
    }
  }

  /**
   * Calculate if two queens attack each other.
   * @param {ChessPieceQueen} queenA 
   * @param {ChessPieceQueen} queenB 
   * @returns {Boolean}
   */
  #canAttack(queenA, queenB) {
    if (queenA.getRow() === queenB.getRow()) {
      return true;
    }
    if (queenA.getColumn() === queenB.getColumn()) {
      return true;
    }
    if (queenA.getRow() - queenA.getColumn() ===
    queenB.getRow() - queenB.getColumn()) {
      return true;
    }
    if (queenA.getRow() + queenA.getColumn() ===
    queenB.getRow() + queenB.getColumn()) {
    return true;
  }
  return false;
  }

  /**
   * Calculate if all the queens in an array are safe.
   * @param {Array<ChessPieceQueen>} queens 
   * @returns {Boolean}
   */
  #queensAreSafe(queens) {
    for (let i = 0; i < queens.length; i++) {
      for (let j = i + 1; j < queens.length; j++) {
        if (this.#canAttack(queens[i], queens[j])) {
            return false;
        }
      }
    }
    return true;
  }

  /**
   * Draw the board on the given canvas element.
   * @param {Object} canvas 
   */
  drawBoard(canvas) {
    this.#board.draw(canvas);
  }

  clearBoard() {
    this.#board.clear();
  }

  
}
