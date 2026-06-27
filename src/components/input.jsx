
// import { useEffect} from "react";
function CalcInput({type,text,useRef,setText}){
    // const ref = useRef(null)
    // useEffect(()=>{
    //     ref.current.focus()
    // },[text])
    return (
        <div className="text-[0D0D0D] border bg-gradient w-full p-1 outline-none caret-[#FF5454] h-8 bg-white">
            {text}   
        </div>
    )
}
export default CalcInput;