import { ReactComponent as Logo1 } from './logo.svg';
import React from "react";

class Logo extends React.Component{
    render(){
        const mouse =this.props.mouse;
        return <Logo1 alt="logo" style={{
            position:'absolute',
            left: mouse.x,
            top: mouse.y,
            width:'40px'
        }}/>
    }
}

class Movement extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            x:0,
            y:0
        }
        this.handleMove = this.handleMove.bind(this);
    }

    handleMove(event){
        this.setState({
            x :event.clientX,
            y :event.clientY
        }) 
    }

    render(){
        return <div style={{height:'100vh'}} onMouseMove={this.handleMove}>
        {this.props.render(this.state)}
        </div>
    }
}
