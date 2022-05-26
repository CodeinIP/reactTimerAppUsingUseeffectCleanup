import React,{useEffect,useState} from 'react'

const Timers = () => {
    const[timers,setTimers] = useState(0);
    useEffect(()=>{
        const id = setInterval(()=>{
            if(timers<50){
                setTimers((timer)=>timer+1)
            }else{
                clearInterval(id);
            }
        },1000)
        return ()=>{
            clearInterval(id);
        }
    },[timers])
 var style1 = {
     background:'gray',
     width:'80px',
     margin:'auto',
     marginTop:'10px',
     padding:'10px',
     color:'white',
     borderRadius:'10px 30px',
 }
 var style2= {
     color:'orangered',
 }
 var style3 = {
     color:'gray',

 }
  return (
    <div>
        <h2 style={style1}>Timer</h2>
        <p style={style3}>From 0 to 50 seconds</p>
        <h1 style={style2}>{timers}</h1>
    </div>
  )
}

export default Timers