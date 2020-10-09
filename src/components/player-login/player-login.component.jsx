import React from 'react';
import {withRouter} from 'react-router-dom';
import './player-login.styles.scss';

const PlayerLogin = ({history,player1,player2,setPlayer1 , setPlayer2}) => {
    const handleChange =(e,id,name)=>{
        if(id === 1)
            setPlayer1(name);
        else
            setPlayer2(name);
        e.preventDefault();
    }
    return (
        <div className="player-login">
            <h1>Player's Information</h1>
            <form method='post' onSubmit={(e)=> e.preventDefault()}>
                <fieldset>
                    <legend>Player 1 Name</legend>
                    <input type="text" name="player1-name" value={player1} onChange={(e,id=1)=>handleChange(e,id,e.target.value)} required/>
                </fieldset>
                <br />
                <fieldset>
                    <legend>Player 2 Name</legend>
                    <input type="text" name="player2-name" value={player2} onChange={(e,id=2)=>handleChange(e,id,e.target.value)} required/>
                </fieldset>
                <br />
                <br />
                {
                    player1 !== '' && player2 !== '' ?
                    <input type="submit" value="Start Game" onClick={(e)=> history.push('/game')}/>
                    :
                    <input type="submit" value="Start Game" onClick={(e)=> history.push('/game')} disabled/>
                }  
            </form>
        </div>
    );
}

export default withRouter(PlayerLogin);