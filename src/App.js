import {useState,useEffect} from "react";

export default function App(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    
  });
  return(
    <>
    <button onClick={()=> setCount(count+1)}>{count}</button>
    </>
  );
}