import React,{useRef} from "react";

export default function App(){
  const ref = useRef();
  return (
    <React.Fragment>
    <h1>I am having blast!!!</h1>
    <FancyButton ref={ref}>Click Me!</FancyButton>
    </React.Fragment>
  )
}

const FancyButton = React.forwardRef((props,ref)=>{
  return(
    <button ref={ref} className="FancyButton">
    {props.children}
    </button>
  )
});

function higherOrderComponent(WrappedComponent,selectData){

  return class extends React.Component{
    constructor(props){
      super(props);
      this.handelChange = this.handelChange.bind(this);
      this.state={
        data = selectData(DataSource,props)
      };
    }

    componentDidMount(){
      DataSource.addChangeListener(this.handelChange);
    }

    componentWillUnmount(){
      DataSource.removeChangeListener(this.handelChange);
    }

    handelChange(){
      this.state({
        data = selectData(DataSource,this.props)
      })
    };

    render(){
        return (<WrappedComponent data={this.state.data} {...this.props}/>
        )}
    }
  }

