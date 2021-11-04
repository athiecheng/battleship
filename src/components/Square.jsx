// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    
    
    // const [state, setState] = useState(props.symbol);
    let borderColor = 'purpleBorder';
    if (symbol === '0') {
        borderColor = 'blueBorder';
    } else if (symbol === '') {
        borderColor = 'blackBorder';
    }
    console.log(borderColor);
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(
            {
                type: 'boardClick',
                x: props.x,
                y: props.y
            }
        )} id="square" class={borderColor}>
    </div>);
}

