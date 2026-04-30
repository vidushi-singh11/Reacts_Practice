```jsx
import React, { useState } from 'react';

const SimpleAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'lightblue',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    backgroundColor: isHovered ? 'coral' : 'lightblue',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={containerStyle}>
      <div
        style={boxStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover Me
      </div>
    </div>
  );
};

export default SimpleAnimation;
```