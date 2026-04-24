```jsx
import React, { useState } from 'react';

function AnimatedSquare() {
  const [isScaled, setIsScaled] = useState(false);

  const toggleScale = () => {
    setIsScaled(!isScaled);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: isScaled ? 'salmon' : 'lightblue',
          transform: isScaled ? 'scale(1.5) rotate(45deg)' : 'scale(1) rotate(0deg)',
          transition: 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out',
          borderRadius: isScaled ? '50%' : '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        {isScaled ? 'Big!' : 'Small!'}
      </div>
      <button onClick={toggleScale}>Toggle Animation</button>
    </div>
  );
}

export default AnimatedSquare;
```