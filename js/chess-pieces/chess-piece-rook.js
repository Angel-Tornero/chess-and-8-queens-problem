/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 29 Abr 2021
 * @brief Class ChessPieceRook
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */
'use strict';

/**
 * @class ChessPieceRook - Class for representing rook piece.
 */
class ChessPieceRook extends ChessPiece {
  /**
   * Create a ChessPieceRook object.
   */
  constructor(colour, row, column) {
    super(colour, row, column, 'img/' + colour + 'Rook.png');
  }
}
  