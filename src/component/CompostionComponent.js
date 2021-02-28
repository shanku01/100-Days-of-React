function Border(props) {
    return(
        <div>
        <h1>{props.data}</h1>
        {props.children}
        </div>
    )
}

export default function CompostionComponent() {
    const data = "I am good"
    return(
        <Border data={data}>
            <h2> I am writing my compostion</h2>
        </Border>
    )
}