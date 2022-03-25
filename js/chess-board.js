/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 28 Abr 2021
 * @brief Class chess board.
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */

'use strict';

/**
* @class ChessBoard - Class for representing chess board.
*/
class ChessBoard {
  /**
  * @private
  */
  #size;
  /**
  * @private
  */
  #BLACK = 'rgb(185, 131, 87)';
  /**
  * @private
  */
  #WHITE = 'rgb(255, 238, 203)';
  /**
  * @private
  */
  #box;
  /**
  * @private
  */
  #COLUMN_LETTERS = 'abcdefghijkl';

  /**
  * Create a Chess object.
  */
  constructor(size = 8) {
    this.#size = size;
    this.#box = [];
    for (let i = 0; i < this.#size; i++) {
      let row = [];
      for (let j = 0; j < this.#size; j++) {
        row.push(new ChessPiece('White', i + 1, j + 1));
      }
      this.#box.push(row);
    }
  }

  /**
   * Draw the board on the canvas element (with box).
   * @param {Object} canvas 
   */
  draw(canvas) {
    const cellSize = canvas.width / this.#size;
    let context = canvas.getContext('2d');
    for (let i = 0; i < this.#size; i++) {
      for (let j = 0; j < this.#size; j++) {
        context.fillStyle = (((i + j) % 2 === 0)? this.#WHITE : this.#BLACK);
        context.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
      }
    }
    context.font = '12px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'right';
    for (let i = 0; i < this.#size; i++) {
      context.fillText(String(this.#size - i), canvas.width, i * (canvas.height / this.#size) + 12);
      context.fillText(this.#COLUMN_LETTERS[i], i * (canvas.height / this.#size) + 8, canvas.width - 3);
    }
    this.#placebox(canvas);
  }

  /**
   * Place the box in their respective positions.
   * @param {Object} canvas 
   */
  #placebox(canvas) {
    const cellSize = canvas.width / this.#size;
    let context = canvas.getContext('2d');
    for (let i = 0; i < this.#size; i++) {
      for (let j = 0; j < this.#size; j++) {
        if (this.#box[i][j].getImg()) {
          const img = document.createElement('img');
          img.onload = function() {
            context.drawImage(img, i * cellSize, j * cellSize, cellSize, cellSize);
          }
          img.src = this.#box[i][j].getImg();
        }
      }
    }
  }

  /**
   * Add or replace a new piece to the board. Is not necesary to specify a
   * position because method uses the row and column of ChessPiece object.
   * @param {ChessPiece} newPiece 
   */
  addPiece(newPiece) {
    this.#box[newPiece.getColumn()][newPiece.getRow()] = newPiece;
  }

  clear() {
    this.#box = [];
    for (let i = 0; i < this.#size; i++) {
      let row = [];
      for (let j = 0; j < this.#size; j++) {
        row.push(new ChessPiece('White', i + 1, j + 1));
      }
      this.#box.push(row);
    }
  }

  getSize() {
    return this.#size;
  }

  getPosition(piece) {
    return this.#COLUMN_LETTERS[piece.getColumn()] + String(this.#size - piece.getRow());
  }

  movePiece(fromPos) {
    this.#box[toPos[0]][toPos[1]] = this.#box[fromPos[0]][fromPos[1]];
    this.#box[fromPos[0]][fromPos[1]] = new ChessPiece();
  } 
}
