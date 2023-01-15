import { useState, useRef } from 'react';

const useTimer = (ini = 0) => {
   const [time, setTime] = useState(0);

   let isStart = false;
   const active = useRef();
   const refInterval = useRef(0);

   const startTimer = () => {
      isStart = true;
      refInterval.current = setInterval(() => {
         if (isStart) {
            setTime((time) => time + 1);
         }
      }, 1000);
      active.current.disabled = true;
   };
   const stopTimer = () => {
      isStart = false;
      clearInterval(refInterval.current);
      active.current.disabled = false;
   };
   const resetTimer = () => {
      setTime(0);
      clearInterval(refInterval.current);
      active.current.disabled = false;
   };

   return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
