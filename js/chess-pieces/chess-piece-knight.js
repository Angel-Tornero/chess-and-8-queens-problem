/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 29 Abr 2021
 * @brief Class ChessPieceKnight
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */
'use strict';

/**
 * @class ChessPieceKnight - Class for representing knight piece.
 */
class ChessPieceKnight extends ChessPiece {
  /**
   * Create a ChessPieceKnight object.
   */
  constructor(colour, row, column) {
    super(colour, row, column, 'img/' + colour + 'Knight.png');
  }
}
  