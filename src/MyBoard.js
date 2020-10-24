import './App.css';
import Header from './Header';
import Navbarhome from './Navbar';
import React from "react";

function MyBoard() {

  return (
    <div className="App">
      <Navbarhome />
      <Header />
      <div className="container">
        <div className="no-bears-logo">
          <title>Hi</title>
        </div>
        <div className="jager-cor">
          <img className="cover" src="https://picsum.photos/id/1021/705/460" alt="mountains" />
        </div>
      </div>
    </div>
  );
}


export default MyBoard;
