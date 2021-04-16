import React from 'react';
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';






function App() {
  return (
    <main className='App'>
      <RouletteGun/>
      <HelloWorld />
      <Bomb />
    </main>
  )
}

export default App;