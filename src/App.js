import React from 'react';
import './App.css';
import Header from './Header';
import Navbarhome from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbarhome />
      <Header />
      <div className="container">
        <div class="no-bears-logo">
        </div>
        <div class="jager-cor">
          <img class="cover" src="https://picsum.photos/id/1021/705/460" alt="mountains" />
        </div>
      </div>
    </div>
  );
}

export default App;
