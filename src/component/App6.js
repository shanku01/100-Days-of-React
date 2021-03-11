import React from "react";

class App extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.myRef.current.focus();   
    }

    render(){
        return <>
        <input ref = {this.myRef}/>
        <button onClick={this.handleClick}>click</button>
        </>
    }
}
export default App;