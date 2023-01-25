import React from 'react';
import styled from "styled-components";

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
`;

function ChessBoard() {
    return (
        <Board>
            {range(8).map(y => {
                return range(8).map(x => <Square x={x} y={y}/>);
            }).flat()}
        </Board>
    );
}

export default ChessBoard;
