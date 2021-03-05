import ErrorBoundary from "./component/ErrorBoundary";
import {useState} from "react";

export default function App(){
  const [myError,setMyError]=useState()
  const [count,setCount]=useState(0)
  function clickHandeler(){
    try{
      setCount(count+1)
    }
    catch(error){
      setMyError(error)
    }
  }
  if(myError){
    return <h1>Got some error</h1>
  }
  return(
    <ErrorBoundary>
      <h1>I am good</h1>
      <button onClick={clickHandeler}>{count}</button>
    </ErrorBoundary>
    
  )
}

