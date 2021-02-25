import {Component} from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            date : new Date(),
            count:0
        }
        this.handelClick=this.handelClick.bind(this)
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
    handelClick(){
        let temp = this.state.count
        this.setState({
            count:temp+1
        })
    }
    render(){
        return(
            <div>
            <h1>Class Component {this.props.prop}</h1>
            <button onClick={this.handelClick}>{this.state.count}</button>
            <h2>Time now - {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
            
    }
}

export default ClassComponent;