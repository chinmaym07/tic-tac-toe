
import React,{useState,useEffect} from 'react';
import './board.styles.scss';
import PlayerInfo from '../playerinfo/playerinfo.component';
import Result from '../result/result.component';

const Board = () => {   
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [turn,setTurn] = useState(0);
    const [result,setResult] = useState("");
    const [player1_points , setPointsPlayer1] = useState(0);
    const [player2_points , setPointsPlayer2] = useState(0);
  
    
    useEffect(() => {

        if(checkWinner(squares))
        {
            //console.log(turn);
            if((turn-1)%2 === 0)
            {
                setResult("Player 1 has Won the game");  
                setPointsPlayer1(player1_points+1);
            }
            else
            {
                setResult("Player 2 has Won the game");  
                setPointsPlayer2(player2_points+1);
            }
                
        }
        else if(turn === 9)
        {
            setResult("Game is a Draw . Play Again");
        }
     }, [squares,turn]);
    function checkWinner(){
        var previousClick='';
        if((turn-1)%2 === 0)
            previousClick='X';
        else
            previousClick='O';
        var flag = -1;
        if(squares[0]=== previousClick && squares[1]=== previousClick && squares[2]=== previousClick)
            flag = 1;
        else if(squares[3]=== previousClick && squares[4]=== previousClick && squares[5]=== previousClick)
            flag = 1;
        else if(squares[6]=== previousClick && squares[7]=== previousClick && squares[8]=== previousClick)
            flag = 1;
        else if(squares[0]=== previousClick && squares[3]=== previousClick && squares[6]=== previousClick)
            flag = 1;
        else if(squares[1]=== previousClick && squares[4]=== previousClick && squares[7]=== previousClick)
            flag = 1;
        else if(squares[2]=== previousClick && squares[5]=== previousClick && squares[8]=== previousClick)
            flag = 1;
        else if(squares[0]=== previousClick && squares[4]=== previousClick && squares[8]=== previousClick)
            flag = 1;
        else if(squares[2]=== previousClick && squares[4]=== previousClick && squares[6]=== previousClick)
            flag = 1;
        if(flag === 1)
            return true;
        else
            return false;
    }
    function handleClick(e, id){   
        const square = squares.slice();
        if(square[id] === null && checkWinner() === false)
        {
            square[id] = (turn % 2)? 'O':'X';
            setSquares(square);
            setTurn(turn+1);  
        }
        e.preventDefault();
    }
     function handleReset(e){
         setSquares(Array(9).fill(null));
         setTurn(0);
         setResult("");
         e.preventDefault();
     }
    return (
        <div className="container">
            <PlayerInfo player1_points={player1_points} player2_points={player2_points}/>
            <div className="board">
            
            {
                squares.map((square,index)=> (
                    <button className="buttons" key={index} onClick={(e, id=index)=>handleClick(e,id)}>{squares[index]}</button>
                ))
            }
            
            </div>
            {
                result !== "" ? <Result result={result}/>:null
            }
            <button className="reset" onClick={(e)=>handleReset(e)}>Reset</button>
    </div>
    
    
    
    )
}
export default Board;