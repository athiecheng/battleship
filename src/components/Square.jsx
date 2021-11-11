// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import { useDispatch } from 'react-redux';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    
    
    // const [state, setState] = useState(props.symbol);
    let borderColor = 'purpleBorder';
    
    
    if (symbol === 'X') {
        borderColor = 'blackfill';
    } 
    else if (symbol === 'B') {
        borderColor = 'bluefill';
    }
    else if (symbol === 'R') {
        borderColor = 'redfill';}
    
    
    const dispatch = useDispatch();

    return (
        <div  id="square" class={borderColor}>
    </div>);
}

