import React, { useState } from 'react';
import { Square } from "./Square"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const clickCount = useSelector((state) => state.clickCount)
    const boardState = useSelector((state) => state.game)
    // const [boardState, setBoard] = useState([
    //     ['','X',''],
    //     ['','',''],
    //     ['X','','0'],
    // ])

    const boardComponent = [];

    for (let i = 0; i < boardState.boxMap.length; i++) {
        let row = boardState.boxMap[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={boardState.boxMap[i][j]} x={i} y={j} />))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
    }

    return (
        <div>
            <h1>{boardState.blackBox}</h1>
                <div id="board">
            {boardComponent}
            </div>
        </div>
    )
}