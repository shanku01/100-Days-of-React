import {Component} from "react";

const MyContext = React.createContext("light");

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.handelClick=this.handelClick.bind(this)
    }

    
    //updates count
    handelClick(){
        this.props.handelClick()
    }

    render(){
        //using this keyword to get the context
        let value = this.context;
        return(
            <div>
            <h1>Class Component {this.props.prop}</h1>
            <button theme ={value} onClick={this.handelClick}>{this.props.count}</button>
            </div>
        );
            
    }
}

//creating contenxt for whole class
ClassComponent.contextType = MyContext;

export default ClassComponent;