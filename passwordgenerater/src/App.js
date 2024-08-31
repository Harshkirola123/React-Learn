import {useState} from "react"
import { useCallback,useEffect,useRef } from "react";

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charrAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");


  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator =useCallback(()=>{
    let pas=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charrAllowed) str+="@#!$%^&*()~`"

    for(let i=1;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pas += str.charAt(char);
    }
    setPassword(pas);
  },[length,numberAllowed,charrAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charrAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md
        rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800
      ">  
    <div className="text-center text-white my-3"> Password generater </div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3"
          placeholder="password" readOnly ref={passwordRef}/>


          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipBoard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} 
            value={length} className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}/>
              <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charrAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}/>
              <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
