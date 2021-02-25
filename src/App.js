import ClassComponent from "./component/ClassComponent";
import FunctionalComponent from "./component/FunctionalComponent";
import Greetings from "./component/Greetings";
import {useState} from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
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
  return (
    <div className="App">
      <ClassComponent prop="Class Prop"/>
      <FunctionalComponent prop="Function Prop"/>
      {button}
      {isLoggedIn? <h2>you have looged in </h2>:<h2> log in please</h2>}
      <Greetings isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
