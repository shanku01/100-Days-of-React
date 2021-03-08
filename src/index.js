import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component{
  constructor(props){
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount(){
    modalRoot.appendChild(this.el)
  }
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      clicks : 0
    }
    this.handelClick = this.handelClick.bind(this);

  }

  handelClick(){
    this.setState(state=>({
      clicks:state.clicks+1
    }));
  }

  render(){
    return (
      <div onClick={this.handelClick}>
      <p>Cliks count : {this.state.clicks}</p>

      <p>
        Okk I am good there
      </p>
      <Modal>
        <Child/>
      </Modal>
      </div>
    )
  }
}

function Child(){
  return(
    <>
      <button>Click</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
