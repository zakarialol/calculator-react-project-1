
import { useEffect} from "react";
function CalcInput({type,text,useRef,setText}){
    const ref = useRef(null)
    useEffect(()=>{
        ref.current.focus()
    },[text])
    return (
        <input className="text-[0D0D0D] border bg-gradient w-full p-1 outline-none caret-[#FF5454]" type={type} ref={ref} value={text} onChange={(e)=>setText(e.target.value)} name="" id=""/>
    )
}
export default CalcInput;