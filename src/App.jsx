import { useState,useRef } from "react";


import Paragraph from "./components/calcTitle.jsx";
import CalcInput from "./components/input.jsx";
import Result from "./components/calcRsult.jsx";
import Buttons from "./components/button.jsx";
import BackSpace from "./components/backSpace.jsx";
// import "./index.css"
function App() {
  const [ text,setText] = useState("")
  const [result , setResult] = useState()
  return (
    <>
      <div className="text-center text-[#0D0D0D] capitalize mb-8">
        <Paragraph text="standart calculator" />
      </div>
      <div className="mx-1">
        <CalcInput type="text" text={text} setText={setText} useRef={useRef} />
        <Result result={result} />
      </div>
      <div className="flex flex-col gap-7">
        <div className="gap-4 btnHolder">
          <Buttons setText={setText} text={text} setResult={setResult} 
            array={[
              { value:"C",text:"C", style: "text-[#FF5454]" ,type:"clear"},
              { value: "%",text:"%", style: "text-red-500",type:"Percentage" },
              { value: <BackSpace/>,text:"BackSpace",content:"backSpace", style: "text-[#FF5454]",type:"backspace"},
              { value: "÷",text:"÷", style: "text-[#FF5454]",type:"division" },
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons text={text} setText = {setText} setResult={setResult}
            array={[
              { value: 7,text:7,style:"text-[#0D0D0D]",type:"number" },
              { value: 8,text:8,style:"text-[#0D0D0D]",type:"number" },
              { value: 9,text:9,style:"text-[#0D0D0D]",type:"number" },
              { value: "x",text:"x",style:"text-[#FF5454]",type:"multiplication"},
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons text={text} setText = {setText} setResult={setResult}
            array={[
              { value: 4 ,text:4,  style:"text-[#0D0D0D]",type:"number"},
              { value: 5 ,text:5, style:"text-[#0D0D0D]",type:"number"},
              { value: 6 ,text:6, style:"text-[#0D0D0D]",type:"number"},
              { value: "-" ,text:"-", style:"text-[#FF5454]",type:"subtraction"},
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons text={text} setText = {setText} setResult={setResult}
            array={[
              { value: 1,text:1, style:"text-[#0D0D0D]",type:"number" },
              { value: 2,text:2, style:"text-[#0D0D0D]",type:"number" },
              { value: 3,text:3, style:"text-[#0D0D0D]",type:"number" },
              { value: "+",text:"+", style:"text-[#FF5454]",type:"addition"},
            ]}
          />
        </div>
        <div className="gap-4 btnHolder">
          <Buttons text={text} setText = {setText} setResult={setResult}
            array={[
              { value: "±",text:"±",style:"",type:"changeSign" },
              { value: 0,text:0,style:"",type:"number" },
              { value: ".",text:".",style:"",type:"point"},
              { value: "=",text:"=",style:"text-[#0D0D0D] bg-[#FF5454]",type:"equals" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
export default App;
