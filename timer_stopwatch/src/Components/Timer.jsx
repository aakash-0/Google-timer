import React, { useEffect, useState } from 'react'

function Timer() {
    const [time,setTime]=useState(0);
    const [start,setStart] = useState(false);
    const [_id,setid] = useState(0);
    const [toggle,setToggle] =useState(true);

    useEffect(()=>{
        if(start){
            var id = setInterval(() => {
                setTime(prev=> prev-1)
            }, 1000);
            setid(id);
        }
        else{
            clearInterval(_id);
            
        }
    return ()=> clearInterval(id)
    },[start])
    useEffect(()=>{
        if(time<0){
            setStart(false);
        }
    },[time])

  return (
    <div> {toggle?
        <div>
        <input type="number" onChange={(e)=>{setTime(e.target.value)}} value={time} id="" />
        <button onClick={()=>{setToggle(false);setStart(true)}} >enter</button>
        </div>
        :
        <div>
            <div>{time}</div>
            <button onClick={()=>{setStart(!start)}}>
            {
                (start?<div>stop</div>:<div>start</div>)
            }
            </button>

            <button onClick={()=>{setStart(false);setToggle(true);setTime(0)}}>reset</button>
        </div>
       }
    </div>
  )
}

export default Timer