import React from 'react';
import './App.css';
import Header from './Header';
import Navbarhome from './Navbar';

function MyBoard() {
  return (
    <div className="App">
      <Navbarhome />
      <Header />
      <div className="container">
        <div class="no-bears-logo" id="no-bears-logo">
        </div>
        <div className="jager-cor" id="jager-cor">
          <img className="cover" src="https://picsum.photos/id/1021/705/460" alt="mountains" />
        </div>
      </div>
    </div>
  );
}

export default MyBoard;
