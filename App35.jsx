```jsx
import React, { useState } from 'react';

function SimpleAnimation() {
  const [isScaled, setIsScaled] = useState(false);

  const toggleScale = () => {
    setIsScaled(!isScaled);
  };

  return (
    <div
      onClick={toggleScale}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: isScaled ? 'red' : 'blue',
        margin: '50px',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
        transform: isScaled ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
      }}
    >
      Click me!
    </div>
  );
}

export default SimpleAnimation;
```