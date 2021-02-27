import {Component} from "react";

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
        return(
            <div>
            <h1>Class Component {this.props.prop}</h1>
            <button onClick={this.handelClick}>{this.props.count}</button>
            </div>
        );
            
    }
}

export default ClassComponent;