import {useState} from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("olive");
  const colors = ["red", "green", "blue","Black"];

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            {colors.map((col) => (
              <Button key={col} colors={col} onClick={() => setColor(col)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
