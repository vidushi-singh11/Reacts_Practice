```jsx
import React, { useState } from 'react';

function SimpleAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <>
      <button onClick={toggleAnimation}>
        Toggle Animation
      </button>
      <div className={`animated-box ${isAnimating ? 'animate' : ''}`}>
        Hello!
      </div>
      <style>
        {`
        .animated-box {
          width: 100px;
          height: 100px;
          background-color: dodgerblue;
          margin: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: sans-serif;
          font-weight: bold;
          transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
        }

        .animated-box.animate {
          transform: rotate(360deg) scale(1.2);
          background-color: tomato;
        }
        `}
      </style>
    </>
  );
}

export default SimpleAnimation;
```