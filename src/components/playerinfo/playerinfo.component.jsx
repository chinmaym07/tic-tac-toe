import React from 'react';
import './playerinfo.styles.scss';

const PlayerInfo = ({id,player , points})=> (
    
      <div className="player" key={id}>
        <h2>{player}</h2>
        <p>{points}</p>
      </div>
);

export default PlayerInfo;