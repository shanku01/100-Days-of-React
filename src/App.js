

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
    </div>
  );
}

export default App;
