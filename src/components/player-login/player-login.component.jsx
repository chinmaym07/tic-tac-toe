import React from 'react';

import './player-login.styles.scss';

const PlayerLogin = ({player1,player2,setPlayer1 , setPlayer2,history}) => {
    const handleChange =(e,id,name)=>{
        if(id === 1)
            setPlayer1(name);
        else
            setPlayer2(name);
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/game');
        
    }
    return (
        <div className="player-login">
            <h1 className="player-infr">Player's Information</h1>
            <form method='post' onSubmit={(e)=> handleSubmit(e)} className="input-form">
                <fieldset className="name">
                    <legend>Player 1 Name</legend>
                    <input className="names" type="text" name="player1-name" value={player1} onChange={(e,id=1)=>handleChange(e,id,e.target.value)} required/>
                    <span className="required">*</span>
                </fieldset>
                <br />
                <fieldset className="name">
                    <legend>Player 2 Name</legend>
                    <input className="names" type="text" name="player2-name" value={player2} onChange={(e,id=2)=>handleChange(e,id,e.target.value)} required/>
                    <span className="required">*</span>
                </fieldset>
                <br />
                <br />
                {
                    player1 !== '' && player2 !== '' ?
                    <input className="start" type="submit" value="Start Game"/>
                    :
                    <input className="start" type="submit" value="Start Game" disabled/>
                }  
            </form>
        </div>
    );
}

export default PlayerLogin;