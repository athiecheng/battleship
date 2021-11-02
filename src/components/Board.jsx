import React, { useState } from 'react';
import './Board.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Freeplay, Normalplay } from '.';

export default function Board() {
    return(
        <div className = "play">
            <Switch>
                <Route path = "/play" render={()=> {
                    return (
                        <>
                        <h1>Game Play</h1>
                        <ul>
                            <li>
                                <Link to = "/play/free-play">
                                    free play
                                </Link>
                            </li>
                            <li>
                                <Link to = "/play/normal-play">
                                    normal play
                                </Link>
                            </li>
                        </ul>
                    </>
                    )
                }} />
            </Switch>
            <div>
                <Freeplay />
                <Normalplay />
            </div>
        </div>
        


    )
}