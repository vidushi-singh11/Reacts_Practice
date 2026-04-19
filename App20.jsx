```jsx
import React, { useState } from 'react';

const SimpleAnimation = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  const animatedBoxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'mediumseagreen',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
    transform: isAnimated ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
    backgroundColor: isAnimated ? 'salmon' : 'mediumseagreen',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
      <div style={animatedBoxStyle}>
        Animated
      </div>
      <button onClick={toggleAnimation} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Toggle Animation
      </button>
    </div>
  );
};

export default SimpleAnimation;
```