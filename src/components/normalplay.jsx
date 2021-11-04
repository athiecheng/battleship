import React, { useState } from 'react';
import { Square } from "./Square"
import { Square2 } from './Square2';
// import { ResetButton } from "./ResetButton"
import './Board.css'
import { useSelector } from 'react-redux';

export default function Board() {
    const boardState = useSelector((state) => state.game)
    const robotBoardState = useSelector((state) => state.robot)
    // const [boardState, setBoard] = useState([
    //     ['','X',''],
    //     ['','',''],
    //     ['X','','0'],
    // ])

    const playerBoardComponent = [];

    for (let i = 0; i < boardState.boxMap.length; i++) {
        let row = boardState.boxMap[i];
        for (let j = 0; j < row.length; j++) {
            playerBoardComponent.push((<Square symbol={boardState.boxMap[i][j]} x={i} y={j} />))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
    }

    const robotBoardComponent = [];
    for (let i = 0; i < robotBoardState.boxMap.length; i++) {
        let row = robotBoardState.boxMap[i];
        for (let j = 0; j < row.length; j++) {
            robotBoardComponent.push((<Square2 symbol={robotBoardState.boxMap[i][j]} x={i} y={j} />))
            // boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
        }
    }
    
    return (
        <div className = "play">
            <h1>{boardState.blackBox}</h1>
            <div id="board">
            {playerBoardComponent}
            </div>
            <h2>divide the two</h2>
            <div id = "board">
            {robotBoardComponent}
            </div>

            {/* <ResetButton text = "reset" /> */}
         
        </div>
    )
}

