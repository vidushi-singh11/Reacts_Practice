```jsx
import React, { useState } from 'react';

function MovingSquare() {
  const [isMoved, setIsMoved] = useState(false);

  const squareStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    position: 'relative',
    left: isMoved ? '200px' : '0px',
    transition: 'left 0.7s ease-in-out',
  };

  return (
    <div>
      <button onClick={() => setIsMoved(!isMoved)}>
        Toggle Move
      </button>
      <div style={squareStyle}></div>
    </div>
  );
}

export default MovingSquare;
```