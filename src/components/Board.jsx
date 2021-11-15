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
                        <h1 class = "mt-5">Game Play</h1>
                        <div class = "row mt-3 justify-content-center">
                            <div class="col-md-2 ">
                                <button onClick={() => {
                                    setFreeplay(true)
                                    setNormal(false)
                                }} type="button" class="btn btn-outline-primary">
                                    free play
                                </button>
                            </div>
                            <div class="col-md-2 ">
                                <button onClick ={() => {
                                    setNormal(true)
                                    setFreeplay(false)
                                    dispatch({type: "Normalplay"}) 
                                    
                                }} type="button" class="btn btn-outline-primary">
                                    normal play
                                </button>
                            </div>
                            <div class = "d-flex justify-content-center">
                            {showFreeplay? <Freeplay /> :null}
                            </div>
                            <div>
                            {showNormal? <Normalplay /> : null}
                            </div>
                        </div>
                        
                    </>
                    )
                }} />
            </Switch>
        </div>
        


    )
}