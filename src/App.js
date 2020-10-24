import React from 'react';
import './App.css';
import MyBoard from './MyBoard.js'
import Header from './Header';
import Navbarhome from './Navbar';

function App(card) {

  return (
    <div className="App">
      <Navbarhome />
      <Header />
      <MyBoard />
    </div>
  );
}

export default App;
