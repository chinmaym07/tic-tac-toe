import React,{useState} from 'react';
import Board from './components/board/board.component';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import PlayerLogin from './components/player-login/player-login.component';
import Footer from './components/footer/footer.component';

function App() {
  const [player1,setPlayer1] = useState("");
  const [player2,setPlayer2] = useState("");
  return (
    <div className="App">
      <div className="header">
        <h1>Tic Tac Toe</h1>
      </div>
      <Switch>
        <Route path='/' render={(routeProps) => (<PlayerLogin player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} {...routeProps}/>)} />
        <Route path='/game'render={(routeProps)=>(<Board player1={player1} player2={player2} {...routeProps}/>)} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
