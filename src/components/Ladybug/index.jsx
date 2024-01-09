import React from 'react';
import './style.css';

const Ladybug = ({ ladybugState }) => {
  return (
    <div
      className={`ladybug ladybug--${ladybugState.orientation}`}
      style={{
        top: `${ladybugState.posX}px`,
        left: `${ladybugState.posY}px`,
      }}
    />
  );
};

export default Ladybug;
