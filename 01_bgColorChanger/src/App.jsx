import { useState } from "react";

function App() {
  const [color, setcolor] = useState("#333030");

  return (
    <>
      <div className="w-full h-screen m-0 p-0" style={{ backgroundColor: color }}>
        <div className="container text-xl text-center space-x-3 py-6 ">
          <button className=" px-5 py-2 bg-red-500 text-white rounded-xl" onClick={() => setcolor("red")}> Red </button>
          <button className="px-5 py-2 bg-green-500 text-white rounded-xl" onClick={() => setcolor("green")}> Green </button>
          <button className="px-5 py-2 bg-blue-500 text-white rounded-xl" onClick={() => setcolor("blue")}> blue </button>
          <button className="px-5 py-2 bg-violet-500 text-white rounded-xl" onClick={() => setcolor("violet")}> violet </button>
          <button className="px-5 py-2 bg-gray-500 text-white rounded-xl" onClick={() => setcolor("gray")}> gray </button>
          <button className="px-5 py-2 bg-white text-black rounded-xl border " onClick={() => setcolor("white")}> white </button>
        </div>
      </div>
    </>
  );
}

export default App;
