import {ThemeContext} from "./contexts/theme-context";

import {Component} from "react";


class ThemedButton extends Component{
    render(){

        let props = this.props;
        let theme = this.context;
        

        return(
        <button {...props} 
        style={{backgroundColor:theme.background}}
        />)
        }
    }

ThemedButton.contextType = ThemeContext;

export default ThemedButton;