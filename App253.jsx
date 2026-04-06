```jsx
import React from 'react';

function BigAnimation() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 overflow-hidden relative">
      {/* Background pulsating glow effect */}
      <div 
        className="absolute w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] 
                   bg-gradient-to-br from-indigo-500 to-purple-700 
                   rounded-full 
                   mix-blend-screen opacity-50 blur-3xl 
                   animate-pulse"
        style={{ animationDuration: '4s', animationDelay: '0s', animationIterationCount: 'infinite' }}
      ></div>

      {/* Main spinning container */}
      <div 
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                   rounded-full 
                   bg-gradient-to-r from-blue-500 to-teal-500 
                   shadow-2xl 
                   flex justify-center items-center 
                   animate-spin p-2 md:p-4"
        style={{ animationDuration: '10s', animationDelay: '0s', animationIterationCount: 'infinite' }}
      >
        {/* Inner rotating ring */}
        <div 
          className="absolute inset-4 sm:inset-6 md:inset-8 
                     border-4 md:border-8 border-white border-opacity-30 
                     rounded-full 
                     animate-spin"
          style={{ animationDuration: '15s', animationDirection: 'reverse', animationDelay: '0s', animationIterationCount: 'infinite' }}
        ></div>

        {/* Central bouncing element */}
        <div 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
                     bg-gradient-to-br from-red-400 to-yellow-400 
                     rounded-full 
                     flex justify-center items-center 
                     shadow-lg 
                     animate-bounce"
          style={{ animationDuration: '2s', animationDelay: '0s', animationIterationCount: 'infinite' }}
        >
          {/* Smallest pulsating dot */}
          <div 
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 
                       bg-white rounded-full opacity-70 
                       animate-pulse"
            style={{ animationDuration: '1.5s', animationDelay: '0s', animationIterationCount: 'infinite' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BigAnimation;
```