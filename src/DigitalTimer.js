import React,{useState,useEffect} from 'react';

function DigitalTimer(){
  const [Time,setTime]=useState(new Date());

  useEffect(()=>{
    const Timer =setInterval(()=>{
      setTime(new Date());
  },1000);

  return clearInterval(Timer);
  },[]);

return <h1>{Time.toLocaleTimeString()}</h1>
}
export default DigitalTimer;