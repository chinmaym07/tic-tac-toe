import React from 'react';
import './custom-button.styles.scss';

import {checkWinner} from '../../utils/board/board.utils';
const CustomButton = ({index,squares,setSquares,setTurn,turn}) => {

    function handleClick(e, id){   
        const square = squares.slice();
        if(square[id] === null && checkWinner(squares , turn) === false)
        {
            square[id] = (turn % 2)? 'O':'X';
            setSquares(square);
            setTurn(turn+1);  
        }
        e.preventDefault();
    }
    return (
        <button className="buttons" key={index} onClick={(e, id=index)=>handleClick(e,id)}>{squares[index]}</button>
    );
}
export default CustomButton;