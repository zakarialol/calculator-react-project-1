import CalcInput from "./input"
import {evaluate} from "mathjs"
// import BackSpace from "./backSpace.jsx"
function Buttons({array,setText,text,setResult}){
        function changeTheSignFunc(){
            const match = text.match(/(-?\d+\.?\d*)$/);
            if(!match) return;
            setText(prev =>{
                if(match[0].startsWith("-")){
                    return (prev.slice(0,match.index) + "+" +match[0].slice(1)).replaceAll("++","+")
                }else{
                    return (prev.slice(0,match.index) + "-" + match[0]).replaceAll("--","+")
                }
            }
            );                                                                         
        } 
        function calulate(){
            try{
                const last = text[text.length - 1]
                console.log('last',last)
                const lastValue = ["+", "-", "x", "/","÷"].includes(last);
                if(lastValue){
                    console.log("just happend")
                    setText((prev)=>prev.slice(0,-1))
                    setResult(evaluate(text.slice(0,-1).replaceAll("x","*").replaceAll("÷","/")))
                    return
                }
                setResult(evaluate(text.replaceAll("x","*").replaceAll("÷","/")))
            }catch(err){
                setResult("error")
            }
        }
        function logg(btn){
            switch(btn.type){
                case "clear":
                    setText("")
                    setResult("")
                    break;
                case "equals":
                    calulate()
                    break;
                case "backspace":
                    const letters = text.slice(0,text.length-1)
                    setText(letters)
                    break;
                case "changeSign":
                    changeTheSignFunc()
                    break;
                default:
                    setText(prev=>{
                        const last = prev[prev.length - 1]
                        console.log('last',last)
                        const lastValue = ["+", "-", "x", "/","÷"].includes(last);
                        console.log(lastValue,"last value**")
                        const isNewOperator = ["+", "-", "x", "/","÷"].includes(btn.value);
                        if(lastValue && isNewOperator){
                            return prev.slice(0,prev.length - 1) + btn.value
                        }
                        return prev + btn.value
                    })
                    // setText((oldValue)=>oldValue + btn.value)
                    break;
            }
        }
        return (
            <>
                {
                array.map((btn,index)=>{
                    return <button key={btn.value} onClick={()=>{
                        logg(btn)
                    }} value={btn.text}  className={`font-poppins w-8  h-8 ${btn.style}`}>
                        {btn.value}
                    </button>
                })}
            </>
        )
}
export default Buttons