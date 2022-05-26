import React,{useEffect,useState} from 'react'

const Timer = () => {
    const [timer, settimer] = useState(0);
    const [timerId, settimerId] = useState(null);
    useEffect(()=>{
        const id = setInterval(()=>{
            if(timer<10){
            settimer((timer)=>timer+1)
            }
            else{
                clearInterval(id);
            }
        },1000);

        return ()=>{
            clearInterval(id);
        }
    },[timer])
  return (
    <div>Count Down :{timer}</div>
  )
}

export default Timer;