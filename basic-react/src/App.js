
import ATag from './hello'
import { useState } from 'react';


function App() {
  let [counter,setCounter] = useState(15);
  const addValue =()=>{
    if(counter <=20)
      setCounter(counter++)
    else
      alert("Counter can't be greater than 20");
  }
  const removeValue =()=>{
    if(counter >= 0)
      setCounter(counter--)
    else
      alert("Counter can't be less than zero");
  }

  return (
    <>
      <h1>hello how are you</h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removeValue}>Sub value</button>
      </>
  );
}

export default App;