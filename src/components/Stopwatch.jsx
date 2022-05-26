import React,{useState,useEffect} from 'react'

const Stopwatch = () => {
    const [timerId, settimerId] = useState(null);
    const [watch, setwatch] = useState(0);
    const start = ()=>{
        if(!timerId){
            let id = setInterval(()=>{
                setwatch((prev)=>prev+1);
            },1000)
            settimerId(id);
        }
    };
    const pause = ()=>{
        clearInterval(timerId);
        settimerId(null);
    };
    const reset = ()=>{
        clearInterval(timerId);
        setwatch(0);
    };
  return (
    <div>
    <h2>StopWatch</h2>
    <h1>{watch}</h1>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch;