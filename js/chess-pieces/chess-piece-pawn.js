/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Ángel Tornero Hernández
 * @date 29 Abr 2021
 * @brief Class ChessPiecePawn
 * @link https://github.com/PAI-ULL/pai-p11-ajedrez-alu0101224084/blob/master/p11_Chess.md
 *
 */
'use strict';

/**
 * @class ChessPiecePawn - Class for representing pawn piece.
 */
class ChessPiecePawn extends ChessPiece {
  /**
   * Create a ChessPiecePawn object.
   */
  constructor(colour, row, column) {
    super(colour, row, column, 'img/' + colour + 'Pawn.png');
  }


}
  