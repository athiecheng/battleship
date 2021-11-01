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

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(
            {
                type: 'boardClick',
                x: props.x,
                y: props.y
            }
        )} id="square" class={borderColor}>
        {/* {symbol} */}
    </div>);

    // handleClick(){
    //     if (symbol === '0'){
    //         dispatch({
    //             type: 'boardClick',
    //             x: props.x,
    //             y: props.y,
    //         })
            
    //     } else{
    //         dispatch({
    //             type: 'noBoardClick',
    //             x: props.x,
    //             y: props.y,
    //         })
    //     }
    // }
}


   // if (state === 'X') {
    //     setState('0');
    // } else if (state === '0') {
    //     setState('');
    // } else {
    //     setState('X')
    // }

// export function SmallerSquare(props) {
//     const [countState, setCountState] = useState(0)
//     return (<div onClick={() => setCountState(100 + countState)}>
//         Click Count: {countState}
//         </div>)
// }