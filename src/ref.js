import { useState,useRef } from "react";

function StopWatch() {
const [StartTime, setStartTime]=useState(null);
const [now, setNow]=useState(null);
const intervalRef =useRef(null);

function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

clearInterval(intervalRef.current)
 intervalRef.current=setInterval(()=>{
  setNow(Date.now());
},10);
}

function handleStop() {
  clearInterval(intervalRef.current);
}
function handleReset() {
  clearInterval(intervalRef.current);
  setStartTime(null);
  setNow(null);
}

  let secondsPassed = 0;
  if (StartTime != null && now != null) {
    secondsPassed = (now - StartTime)/1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default StopWatch;