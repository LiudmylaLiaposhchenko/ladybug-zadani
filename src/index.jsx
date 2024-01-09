import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {
  const [ladybugState, setLedybugState] = useState({
    posX: 100,
    posY: 100,
    orientation: 'right',
  });

  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowUp') {
      setLedybugState({
        ...ladybugState,
        orientation: 'up',
        posX: ladybugState.posX - STEP_SIZE,
      });
    } else if (code === 'ArrowLeft') {
      setLedybugState({
        ...ladybugState,
        orientation: 'left',
        posY: ladybugState.posY - STEP_SIZE,
      });
    } else if (code === 'ArrowRight') {
      setLedybugState({
        ...ladybugState,
        orientation: 'right',
        posY: ladybugState.posY + STEP_SIZE,
      });
    } else if (code === 'ArrowDown') {
      setLedybugState({
        ...ladybugState,
        orientation: 'down',
        posX: ladybugState.posX + STEP_SIZE,
      });
    }
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyUp}>
      <header>Click anywhere to start the game</header>
      <Ladybug ladybugState={ladybugState} />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
