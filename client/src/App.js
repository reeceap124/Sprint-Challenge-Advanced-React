import React, { useEffect } from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import {useToggle} from './hooks/useToggle'


const App = () => {
  const [bg, setBg] = useToggle(false)
  const toggle = e => { 
    e.preventDefault();
    setBg(!bg);
  }
  return (
    <div className="App" onClick={toggle}>
      <PlayerList/>
    </div>
  )
  
  
}

export default App;
