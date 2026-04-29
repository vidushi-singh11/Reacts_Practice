```jsx
import React, { useState, useEffect } from 'react';

function BouncingBall() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for down, -1 for up

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        let newPosition = prevPosition + direction * 10;
        if (newPosition >= 100) {
          setDirection(-1); // Hit bottom, go up
          newPosition = 100;
        } else if (newPosition <= 0) {
          setDirection(1); // Hit top, go down
          newPosition = 0;
        }
        return newPosition;
      });
    }, 100); // Adjust speed here

    return () => clearInterval(interval);
  }, [direction]);

  const ballStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'red',
    position: 'relative',
    top: `${position}px`,
    left: '50px',
    transition: 'top 0.1s linear', // Smooth movement
  };

  return (
    <div style={{ height: '200px', border: '1px solid gray', position: 'relative', overflow: 'hidden' }}>
      <div style={ballStyle}></div>
    </div>
  );
}

export default BouncingBall;
```