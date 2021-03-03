import React from "react";

//Creating Context
const ThemeContext = React.createContext("light");

export default function Context(){
    return(
        // Context Provider
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
    )
} 

function Toolbar(){
    return(
        <div>
        <ThemedButton/>
        </div>
    )
}


function ThemedButton(){
    const contextType = ThemeContext;    
    return(<button theme ={contextType}/>)
}