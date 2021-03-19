import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:1
        }
        this.handelClick = this.handelClick.bind(this);
    }

    componentDidMount(){
        this.setState((state)=>
            ({count: state.count+1})
            );
        

    }

    componentWillUnmount(){
        this.setState({
            count:""
        })
    }
    
    handelClick(){
        this.setState(state=>{
            count:state.count+1
        });
    }
  render(){
    return(
        <div color={this.props.color}>
        <button onClick={this.handelClick}>Count</button> = {this.state.count}
        </div>

    )
}
}

App.defaultProps={
    color:'red'
}
export default App;