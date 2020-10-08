import React,{useState} from 'react';
import Board from './components/board/board.component';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="header">
        <h1>Tic Tac Toe</h1>
      </div>
     
      <Board />
      
    </div>
  );
}

export default App;
