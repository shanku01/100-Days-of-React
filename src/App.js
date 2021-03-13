import React,{Component} from 'react';
import PropTypes from 'prop-types'


class MyComponent extends Component{
    render(){
        const name = this.props.name 
        return(
            <h1>Hello,{name}</h1>
        )
    }
}

MyComponent.defaultProps={
    name:'Someone'
}

MyComponent.protoTypes ={
    name:PropTypes.element.isRequired
};

//Uncontrolled Component
class MyForm extends Component{
    constructor(props){
        super(props);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.input = React.createRef();
        this.fileInput = React.createRef();
    }

    handelSubmit(event){
        alert("Name : "+this.input.current.value+" File name : "+this.fileInput.current.files[0].name)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handelSubmit}>
            <label>
                Name:
                <input 
                defaultValue="shasha"
                type="text" 
                ref={this.input}/>
            </label>
            <label>
                Uplaod a File:
                <input 
                type="file" 
                ref={this.fileInput}/>
            </label>
            <input type="submit" value ="Submit"/>
            </form>
        );
    }
}

function App(){
  
    return(
        <>
        <MyComponent />
        <MyForm/>
        </>
    )
}


export default App;