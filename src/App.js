import React from 'react';

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }
    render(){
        return <><input type="text" ref={this.inputRef}/>
        {this.props.children}
        </>
    }
    componentDidMount(){
        this.inputRef.current.focus();
    }
}
function App(){
  
    return(
        <>
        <React.StrictMode>
            <>
            I am awesome
            <MyComponent/>
            </>
        </React.StrictMode>
        I am here
        </>
    )
}
export default App;