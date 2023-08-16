
import './App.css';
import React , {useState} from "react";
function App() {
  const [count , setCount] = useState(0)
  const [isRunning , setIsRunning] = useState(false)
  const start = () => {
    setIsRunning(true)
    const interval = setInterval(() =>{
      setCount(time => time +1)
    }, 1000)
    setIsRunning(interval)
  }

  const stop = () => {
    clearInterval(isRunning)
    setIsRunning(false)
  }

  const reset = () =>{
    setCount(0)
    clearInterval(isRunning)
    setIsRunning(false)
  }

  return (
    <div className="App">
     <p>{count}</p>
      <button onClick={isRunning ? stop : start}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
