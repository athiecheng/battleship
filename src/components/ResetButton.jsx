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
            } type="button" class="mt-3 btn btn-info btn-lg">
                {text}
        </button>
        </div>
        
    )
}

export default ResetButton;

