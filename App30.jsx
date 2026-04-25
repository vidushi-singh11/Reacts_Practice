```jsx
import React, { useState } from 'react';

const SimpleAnimation = () => {
  const [isScaled, setIsScaled] = useState(false);

  const animatedBoxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'dodgerblue',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.2em',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease-in-out',
    transform: isScaled ? 'scale(1.2)' : 'scale(1)',
    cursor: 'pointer',
  };

  return (
    <div
      style={animatedBoxStyle}
      onMouseEnter={() => setIsScaled(true)}
      onMouseLeave={() => setIsScaled(false)}
    >
      Hover Me
    </div>
  );
};

export default SimpleAnimation;
```