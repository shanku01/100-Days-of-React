import {useState} from "react";
function FunctionalComponent(props) {
    const [count,setCount] = useState(0)
    function handelClick(){
            setCount(count+1)
    }
    function handelKey(key){
        console.log(key)
    }
    return(
        <div>
        <h1>FunctionalComponent {props.prop}</h1>
        <button onClick={handelClick}>{count}</button>
        <div id="1"><button onClick={handelKey.bind(this,count)}>{count}</button></div>
        </div>
    );
}

export default FunctionalComponent;