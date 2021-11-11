import React, { useState } from 'react';
import './Board.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Freeplay, Normalplay } from '.';
import { useDispatch } from 'react-redux';

export default function Board() {
    const [showFreeplay, setFreeplay] = useState(true)
    const [showNormal, setNormal] = useState(false)

    const dispatch = useDispatch();
    return(
        <div className = "play">
            <Switch>
                <Route path = "/play" render={()=> {
                    return (
                        <>
                        <h1>Game Play</h1>
                        <button onClick={() => {
                            setFreeplay(true)
                            setNormal(false)
                        }}>
                            free play
                        </button>
                        <button onClick ={() => {
                            setNormal(true)
                            setFreeplay(false)
                            dispatch({type: "Normalplay"}) 
                            
                        }}>
                            normal play
                        </button>
                        <div>
                            {showFreeplay? <Freeplay /> :null}
                        </div>
                        <div>
                            {showNormal? <Normalplay /> : null}
                        </div>
                    </>
                    )
                }} />
            </Switch>
        </div>
        


    )
}