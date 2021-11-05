import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

function ResetButton(props){
    const {text} = props;

    const dispatch = useDispatch();
    return(
        <div>
            <button onClick ={
            ()=> dispatch(
                {
                    type: 'resetButton',
                }
            )
            }>
                {text}
        </button>
        </div>
        
    )
}

export default ResetButton;

