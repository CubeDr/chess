import React from 'react';
import styled from "styled-components";
import {blackKing, whiteKing} from './pieces/King';
import {blackQueen, whiteQueen} from './pieces/Queen';
import {blackRook, whiteRook} from './pieces/Rook';
import {blackBishop, whiteBishop} from './pieces/Bishop';
import {blackKnight, whiteKnight} from './pieces/Knight';
import {blackPawn, whitePawn} from './pieces/Pawn';

function range(size: number) {
    return Array.from(new Array(size).keys());
}

const Board = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
`;

const Square = styled.div<{ x: number, y: number }>`
  position: absolute;
  left: ${props => props.x * 100}px;
  top: ${props => props.y * 100}px;
  width: 100px;
  height: 100px;
  background-color: ${props => (props.x + props.y) % 2 === 0 ? '#fccc74' : '#8a785d'};
  font-size: 75px;
  text-align: center;
`;

function ChessBoard() {
    const pieces = [
        [whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook],
        [whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn],
        [blackRook, blackKnight, blackBishop, blackKing, blackQueen, blackBishop, blackKnight, blackRook],
    ];

    return (
        <Board>
            {range(8).map(y => {
                return range(8).map(x => <Square x={x} y={y}>{pieces[y][x]?.piece}</Square>);
            }).flat()}
        </Board>
    );
}

export default ChessBoard;
