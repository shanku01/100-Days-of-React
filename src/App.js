import React from "react";
import {ThemeContext} from "./component/contexts/theme-context";
import ClassComponent from "./component/ClassComponent";
import FunctionalComponent from "./component/FunctionalComponent";
import Greetings from "./component/Greetings";
import ControlledComponent from "./component/ControlledComponent";
import CompostionComponent from "./component/CompostionComponent";
import {useState,useEffect} from "react";
import ThemedButton from "./component/ThemedButton";



function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [myList,seMytList] =useState([]);
  const [count,setCount] =useState(0)

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


  function handelClick() {
    setCount(count+1)
  }
  return (
    <div className="App">
      <ClassComponent prop="Class Prop" count={count} handelClick={handelClick}/>
      <FunctionalComponent prop="Function Prop"/>
      {button}
      {isLoggedIn? <h2>you have looged in </h2>:<h2> log in please</h2>}
      <Greetings isLoggedIn={isLoggedIn}/>
      <ul>{myComp}</ul>
      <ControlledComponent/>
      <CompostionComponent/>
          <ThemeContext.Provider value="light">
          <ThemedButton>
          Change Theme
          </ThemedButton>
          </ThemeContext.Provider>
    </div>
  );
}



export default App;
