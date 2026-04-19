```jsx
import React, { useState } from 'react';

const SimpleAnimation = () => {
  const [isBig, setIsBig] = useState(false);

  const toggleSize = () => {
    setIsBig(!isBig);
  };

  const boxStyle = {
    width: isBig ? '200px' : '100px',
    height: isBig ? '200px' : '100px',
    backgroundColor: isBig ? '#61dafb' : '#282c34',
    borderRadius: isBig ? '50%' : '8px',
    transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out, background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '50px',
  };

  return (
    <div style={boxStyle} onClick={toggleSize}>
      Click Me
    </div>
  );
};

export default SimpleAnimation;
```