import React, { useState } from 'react';
import { Square2 } from "./Square2"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.game)
    boardState.normalPlay = false
    // const [boardState, setBoard] = useState([
    //     ['','X',''],
    //     ['','',''],
    //     ['X','','0'],
    // ])

    let winningpharse = null
    const playerBoardComponent = [];
    for (let i = 0; i < boardState.robotMap.length; i++) {
        let row = boardState.robotMap[i];
        for (let j = 0; j < row.length; j++) {
            playerBoardComponent.push((<Square2 symbol={boardState.robotMap[i][j]} x={i} y={j} />))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
        if (boardState.human_shipleft === 0){
            winningpharse = "congraduation, you won!"
        }
    }
    return (
        <div className = "play">
            <h1>{boardState.blackBox}</h1>
            {winningpharse}
                <div id="board">
            {playerBoardComponent}
            </div>
        </div>
    )
}