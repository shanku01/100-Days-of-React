import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:1
        }
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
    
  render(){
    return(
        <>
        <div color={this.props.color}>
        Count = {this.state.count}
        </div>
        </>
    )
}
}

App.defaultProps={
    color:'red'
}
export default App;