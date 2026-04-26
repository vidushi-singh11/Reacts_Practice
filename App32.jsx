```jsx
import React, { useState, useEffect } from 'react';

function SimpleAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'dodgerblue',
    borderRadius: '10px',
    opacity: isVisible ? 1 : 0.3,
    transition: 'opacity 1s ease-in-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.2em',
    fontWeight: 'bold',
  };

  return (
    <div style={boxStyle}>
      Animate Me!
    </div>
  );
}

export default SimpleAnimation;
```