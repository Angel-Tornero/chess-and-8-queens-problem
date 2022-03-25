/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 29 Abr 2021
 * @brief Class ChessPiece
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */
'use strict';

/**
 * @class ChessPiece - Class for representing chess pieces.
 * Base class works as a piece absence in a box.
 */
class ChessPiece {
  /**
   * @private
   */
  #colour;
  /**
   * @private
   */
  #row;
   /**
   * @private
   */
  #column;
  /**
    * @private - Image file for representing each box.
    */
  #imgSrc;
  /** 
   * @private - Letters for representing a position in algebraic notation.
   */
  #columnLetter = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l'
  ];
  /**
   * @private
   */
  #boardSize;

  /**
   * Create a ChessPiece object.
   */
  constructor(colour, row, column, imgSrc = '', boardSize) {
    this.#colour = colour;
    this.#row = row;
    this.#column = column;
    this.#imgSrc = imgSrc;
  }

  /**
   * Get the row of the piece location.
   * @returns {Number}
   */
  getRow() {
    return this.#row;
  }

  /**
   * Get the column of the piece location.
   * @returns {Number}
   */
  getColumn() {
    return this.#column;
  }

  /**
   * Set the column of the piece location.
   * @returns {Number}
   */
  setColumn(column) {
    this.#column = column;
  }

  /**
   * Get the source of the img to represent the piece.
   * @returns {String}
   */
  getImg() {
    return this.#imgSrc;
  }

  /**
   * Get the position in algebraic notation of the piece.
   * @returns {String}
   */
  getPosition() {
    return this.#columnLetter[this.#column] + String(9 - this.#row);
  }
}
  