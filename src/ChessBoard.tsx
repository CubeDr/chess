import React from 'react';
import styled from "styled-components";
import King from './pieces/King';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';
import Bishop from './pieces/Bishop';
import Knight from './pieces/Knight';
import Pawn from './pieces/Pawn';

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
        [new Rook(), new Knight(), new Bishop(), new Queen(), new King(), new Bishop(), new Knight(), new Rook()],
        [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn()],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn()],
        [new Rook(), new Knight(), new Bishop(), new King(), new Queen(), new Bishop(), new Knight(), new Rook()],
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
