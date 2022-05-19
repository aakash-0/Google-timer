import './App.css';
import { useState } from 'react';
import Stopwatch from './Components/Stopwatch';
import Timer from './Components/Timer';

function App() {
 const [toggle,setToggle] = useState(false);
 
  return (
    <div className="App">
      <div className='container'>
        <div className='toggler'>
          <div>
            <button className={setToggle?"active":""} onClick={()=>{setToggle(true)}}>Stopwatch</button>
          </div>
          <div>
            <button className={!setToggle?"active":""} onClick={()=>{setToggle(false)}}>Timer</button>
          </div>
        </div>

        <div className='wrapper'>
            {
              (toggle?<Stopwatch/>:<Timer/>)
            }
        </div>
      </div>
    </div>
  );
}

export default App;
