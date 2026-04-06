```jsx
import React from 'react';

const BigAnimatedElement = () => {
  return (
    <>
      <style>
        {`
          @keyframes bigScalePulse {
            0%, 100% {
              transform: scale(0.7);
              background-color: #ef4444; /* Tailwind's red-500 */
              box-shadow: 0 0 20px rgba(239, 68, 68, 0.7);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.1);
              background-color: #3b82f6; /* Tailwind's blue-500 */
              box-shadow: 0 0 60px rgba(59, 130, 246, 0.9);
              opacity: 1;
            }
          }

          .animate-big-scale-pulse {
            animation: bigScalePulse 4s infinite ease-in-out;
          }
        `}
      </style>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-96 h-96 rounded-full animate-big-scale-pulse">
        </div>
      </div>
    </>
  );
};

export default BigAnimatedElement;
```