
import React,{useState,useEffect} from 'react';
import './board.styles.scss';
import PlayerInfo from '../playerinfo/playerinfo.component';
import Result from '../result/result.component';
import {checkWinner} from '../../utils/board/board.utils';
import CustomButton from '../custom-button/custom-button.component';

const Board = ({player1 , player2}) => {   
   
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [turn,setTurn] = useState(0);
    const [result,setResult] = useState("");
    const [player1_points , setPointsPlayer1] = useState(0);
    const [player2_points , setPointsPlayer2] = useState(0);
   
    useEffect(() => {
        console.log('I am Fired');
        if(checkWinner(squares , turn))
        {
            //console.log(turn);
            if((turn-1)%2 === 0)
            {
                setResult(player1+" has Won the game");  
                setPointsPlayer1(player1_points+1);
            }
            else
            {
                setResult(player2+" has Won the game");  
                setPointsPlayer2(player2_points+1);
            }
                
        }
        else if(turn === 9)
        {
            setResult("Game is a Draw . Play Again");
        }
     }, [squares,turn]);
    
   
    function handleReset(e){
         setSquares(Array(9).fill(null));
         setTurn(0);
         setResult("");
         e.preventDefault();
     }
    return (
        <div className="container">
            <div className="player-info">
                <PlayerInfo key={1} player={player1} points={player1_points}/>
                <PlayerInfo key={2} player={player2} points={player2_points}/>
            </div>
            
            <div className="board">
            
            {
                squares.map((square,index)=> (
                    <CustomButton key={index} index={index} squares={squares} turn={turn} setSquares={setSquares} setTurn={setTurn}/>
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