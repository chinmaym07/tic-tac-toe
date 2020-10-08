import React from 'react';


const PlayerInfo = ({player1_points , player2_points})=> (
    <div className="player-info">
    <div className="player">
      <h2>Player 1</h2>
      <p>{player1_points}</p>
    </div>
    <div className="player">
      <h2>Player 2</h2>
      <p>{player2_points}</p>
    </div>
</div>
);

export default PlayerInfo;