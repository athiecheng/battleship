import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

function PlayButton(props){
    const {text} = props;

    const dispatch = useDispatch();
    return(
        <div>
            <button onClick ={
            ()=> dispatch(
                {
                    type: 'playGame',
                }
            )
            }>
                {text}
        </button>
        </div>
        
    )
}

export default PlayButton;

