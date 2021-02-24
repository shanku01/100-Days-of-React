import ClassComponent from "./component/ClassComponent";
import FunctionalComponent from "./component/FunctionalComponent";

function App() {
  function formatName(user){
    return <h1>Hello ,{user.first + ' '+ user.last}!</h1> 
  }
  const user ={
    first:"shasha",
    last:"jen"
  }
  
  return (
    <div className="App">
      {formatName(user)}
      <ClassComponent prop="Class Prop"/>
      <FunctionalComponent prop="Function Prop"/>
    </div>
  );
}

export default App;
