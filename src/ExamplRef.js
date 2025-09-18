//import { useRef } from 'react';

// function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }
// export default Form;


import { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

function startTimer(){
    timerRef.current=setInterval(()=>{
    setTime((t)=>t+1)
},1000);
}

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return (
    <>
      <p>Time: {time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}

export default Timer;