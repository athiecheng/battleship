import React from "react";
// import { useDispatch } from 'react-redux';
import './Rules.css';

export default function Contact(){
    return(
        
        <div className="rules">
            <h1>Here is the rules</h1>
            <p className="para">
                A game of Battleship is made up of two 10X10 boards, one that represents the player’s board and one that represents the opponents.  At the start of the game, 5 ships are randomly placed on each board (one 5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship). 
                During the game, you and an AI will take turns (the player always goes first).  On your turn, you will select a square on your opponent’s board.  If you or your opponent hit a ship, then mark that board with a color and symbol.  If you or your opponent miss, then mark a spot on the board to remind the players where on the board they have attempted. One win the game by hitting all openent's ship. 
            </p>
            <p className="img">
                dasdfdsf
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Battleship_game_board.svg/1200px-Battleship_game_board.svg.png" alt=""/>
            </p>
        </div>
    )
}