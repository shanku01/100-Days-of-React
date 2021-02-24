import {Component} from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            date : new Date()
        }
    }
    componentDidMount(){
        this.TimerID= setInterval(()=>
        this.tick(),
        1000);
    }

    componentWillUnmount(){
        clearInterval(this.TimerID)
    }

    tick(){
        this.setState({
            date : new Date()
        });  
    }
    render(){
        return(
            <div>
            <h1>Class Component {this.props.prop}</h1>
            <h2>Time now - {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
            
    }
}

export default ClassComponent;