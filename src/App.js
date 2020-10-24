import React from 'react';
import './App.css';
import MyBoard from './MyBoard.js'

function App(id) {

  const [state, setState] = React.useState('');
  const handleChange = event => setState(event.target.value)
  return (
    <div className="App">
      <MyBoard />
    </div>
  );
}

export default App;
