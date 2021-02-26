import ClassComponent from "./component/ClassComponent";
import FunctionalComponent from "./component/FunctionalComponent";
import Greetings from "./component/Greetings";
import ControlledComponent from "./component/ControlledComponent";
import {useState,useEffect} from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [myList,seMytList] =useState([]);

  useEffect(()=>{
    seMytList([1,2,3,4,5])
  },[]);
  let button;
    if (isLoggedIn){
      button = <button onClick={handleLog}>Log Out</button>
    }
    else{
      button = <button onClick={handleLog}>Log In</button>
    }
  function handleLog() {
    setIsLoggedIn(!isLoggedIn)
  }

  const myComp = myList.map((item)=>{
    return(
    <li key={item}>{item}</li>
    )
  });
  return (
    <div className="App">
      <ClassComponent prop="Class Prop"/>
      <FunctionalComponent prop="Function Prop"/>
      {button}
      {isLoggedIn? <h2>you have looged in </h2>:<h2> log in please</h2>}
      <Greetings isLoggedIn={isLoggedIn}/>
      <ul>{myComp}</ul>
      <ControlledComponent/>
    </div>
  );
}

export default App;
