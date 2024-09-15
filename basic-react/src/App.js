
import ATag from './hello'
import { useState } from 'react';


// function App() {
//   let [counter,setCounter] = useState(15);
//   const addValue =()=>{
//     if(counter <=20)
//       setCounter(counter++)
//     else
//       alert("Counter can't be greater than 20");
//   }
//   const removeValue =()=>{
//     if(counter >= 0)
//       setCounter(counter--)
//     else
//       alert("Counter can't be less than zero");
//   }

//   return (
//     <>
//       <h1>hello how are you</h1>
//       <h2> counter value : {counter}</h2>
//       <button onClick={addValue}>add value</button>
//       <br/>
//       <button onClick={removeValue}>Sub value</button>
//       </>
//   );
// }

function App() {
  return (
    <h1 className="bg-green-400">Hello Tailwind</h1>
  );
}

export default App;