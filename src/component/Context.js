import React from "react";

const ThemeContext = React.createContext("light");

export default function Context(){
    return(
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