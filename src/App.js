
export default function App(){
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <>
    <MyComponent.DatePicker value="blue"/>
    <MyComponent.DatePicker value={1+2}/>
    <MyComponent.DatePicker value/>
    <MyComponent.DatePicker {...props}/>
    <MyComponent.DatePicker>
    <h6>I am child1</h6>
    <h6>I am child2</h6>
    <MyComponent.DatePicker value="child3"/>
    </MyComponent.DatePicker>
    
  </>
}

const MyComponent= {
  DatePicker: function DatePicker(props){
    return <>
      This is value of passed color - {props.value}
      <br/>
      {props.children}
    </>
  }
}