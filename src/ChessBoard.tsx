import React from 'react';
import styled from "styled-components";
import king from './pieces/King';
import queen from './pieces/Queen';
import rook from './pieces/Rook';
import bishop from './pieces/Bishop';
import knight from './pieces/Knight';
import pawn from './pieces/Pawn';

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
        [rook, knight, bishop, queen, king, bishop, knight, rook],
        [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
        [rook, knight, bishop, king, queen, bishop, knight, rook],
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
