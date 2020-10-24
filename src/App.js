import React from 'react';
import './App.css';
import MyBoard from './MyBoard.js'
import Card from './Card.js'

function App(card) {

  return (
    <div className="App">
      {card ? <Card /> : <MyBoard />}
    </div>
  );
}

export default App;
