import {useState} from "react";

export default function ControlledComponent() {
    const [input,setInput] = useState("")

    function handelInput(event) {
        event.preventDefault()
        setInput(event.target.value)
    }

    function submit(event) {
        event.preventDefault()
        alert("Input value = "+input);
    }
    return(<div>
    <form onSubmit={event=>submit(event)}>
        <input placeholder="Input Name" onChange={event=>handelInput(event)}/>
        <input type="submit" value="submit"/>
    </form>
    </div>)
}