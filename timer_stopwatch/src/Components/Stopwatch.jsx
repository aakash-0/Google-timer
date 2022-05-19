import React from 'react'
import { useEffect, useState } from 'react';



function Stopwatch() {
    const [start,setStart] = useState(false);
    const [sec,setSec] = useState(0);
    const [mili,setMili] = useState(0)

    useEffect(()=>{
        if(start){
          var mid = setInterval(()=>{
            setMili(pre=>pre+10)
          },10)
          }
          else{
            clearInterval(mid)
          }
      
          return ()=>clearInterval(mid)
      
      },[start])
  return (<div>

  
    <div>Timer</div>
      <div>{mili===1000?setSec(pre=>pre+1):sec}s:{mili===1000?setMili(0):mili}</div>
      <button onClick={()=>setStart(!start)}>
        {
          (start?<div>stop</div>:<div>start</div>)

        }
        
      </button>
      <button onClick={()=>{setStart(false); setMili(0); setSec(0)}}>
        reset
      </button>
      </div>
  )
}

export default Stopwatch