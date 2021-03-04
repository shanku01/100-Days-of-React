
import {Component} from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(error,errorInfo){
        
        console.log(error,errorInfo);
        this.setState({
            error: error,
            errorInfo : errorInfo
        })
    }

    render(){
        if(this.setState.error){
            return <h1> Something Went Wrong!!</h1>
        }
        return(
            <div>
            {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary;