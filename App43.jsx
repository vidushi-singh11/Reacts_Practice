```jsx
import React, { useState } from 'react';

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const animatedBoxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out',
    transform: isAnimating ? 'scale(1.2) rotate(15deg)' : 'scale(1) rotate(0deg)',
    backgroundColor: isAnimating ? 'green' : 'blue',
  };

  return (
    <div
      style={animatedBoxStyle}
      onClick={() => setIsAnimating(!isAnimating)}
    >
      Click Me!
    </div>
  );
}

export default App;
```