/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 29 Abr 2021
 * @brief Class ChessPieceKing
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */
'use strict';

/**
 * @class ChessPieceKing - Class for representing king piece.
 */
class ChessPieceKing extends ChessPiece {
  /**
   * Create a ChessPieceKing object.
   */
  constructor(colour, row, column) {
    super(colour, row, column, 'img/' + colour + 'King.png');
  }
}
  