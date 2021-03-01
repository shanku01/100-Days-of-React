import {useState,useRef} from "react";

export default function ControlledComponent() {
    const [input,setInput] = useState("")
    const [select,setSelect] = useState("apple")
    const [isHuman,setIsHuman] =useState(false)
    const inputRef = useRef(null);

    function handelInput(event) {
        event.preventDefault()
        const target = event.target
        target.type === "checkbox"?  setIsHuman(target.checked) :setInput(target.value)
        inputRef.current.focus();
    }

    function handelSelect(event) {
        event.preventDefault()
        setSelect(event.target.value)
    }

    function submit(event) {
        event.preventDefault()
        alert("Input value = "+input+", Selected value= "+select+", is human ="+isHuman);
    }
    return(<div>
    <form onSubmit={event=>submit(event)}>
        <input type = "text" ref={inputRef} placeholder="Input Name" onChange={event=>handelInput(event)}/>
        Is human<input type="checkbox" name="isHuman" checked={isHuman} onChange={event=>handelInput(event)}/>
        <select value={select} onChange={event=>handelSelect(event)}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
        </select>

        <input type="submit" value="submit"/>
    </form>
    </div>)
}