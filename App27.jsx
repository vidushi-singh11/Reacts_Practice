```jsx
import React, { useState } from 'react';

function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: isAnimating ? '#ff6347' : '#4682b4',
          borderRadius: isAnimating ? '50%' : '10px',
          transition: 'all 0.5s ease-in-out',
          transform: isAnimating ? 'scale(1.2) rotate(180deg)' : 'scale(1) rotate(0deg)',
          marginBottom: '20px'
        }}
      />
      <button
        onClick={toggleAnimation}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        Toggle Animation
      </button>
    </div>
  );
}

export default App;
```