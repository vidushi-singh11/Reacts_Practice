```jsx
import React, { useState, useEffect } from 'react';

function SimpleAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1500); // Toggle visibility every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        width: '100px',
        height: '100px',
        backgroundColor: 'blueviolet',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '1.2em',
        borderRadius: '8px'
      }}
    >
      Animate Me!
    </div>
  );
}

export default SimpleAnimation;
```