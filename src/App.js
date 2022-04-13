import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [isShown, setIsShown] = useState(false);

  const showButton = () => {
    setIsShown(!isShown);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'gray',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          background: 'gray',
          padding: '0.5rem',
        }}
      >
        <button onClick={() => showButton()}>click</button>
        <button
          onMouseEnter={() => showButton()}
          onMouseLeave={() => showButton()}
        >
          enter / leave
        </button>
        <button onMouseOver={() => showButton()}>over</button>
        <button onMouseUp={() => showButton()} onMouseDown={() => showButton()}>
          up / down
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '0.5rem',
        }}
      >
        <button style={{ display: isShown ? 'initial' : 'none' }}>shown</button>
      </div>
    </div>
  );
}
