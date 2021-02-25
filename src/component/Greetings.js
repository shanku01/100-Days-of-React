

export default function Greetings(props) {
    if(props.isLoggedIn){
        return <h1> Holla</h1>
    }
    else{
        return <div>
        <h1>Log in please</h1>
        </div>
    }
}