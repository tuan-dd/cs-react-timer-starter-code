import React from 'react';
import useTimer from './useTimer';
import formatTime from './formatTime';

function App() {
   const { time, startTimer, stopTimer, resetTimer, active } = useTimer();
   const result = formatTime(time);
   return (
      <div className='App container'>
         <h1>Coder Timer</h1>
         <div className='timer__wrapper'>
            <div className='timer__display'>
               <p>{result}</p>
            </div>
            <div className='button__wrapper'>
               <button className='button' onClick={stopTimer}>
                  Stop
               </button>
               <button className='button' ref={active} onClick={startTimer}>
                  Start
               </button>
               <button className='button' onClick={resetTimer}>
                  Reset
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
