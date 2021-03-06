import React, { Component } from 'react';

import $ from 'jquery';
import "chosen-js/chosen.css";
import "chosen-js/chosen.jquery.js";

class Chosen extends React.Component {


  componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen();

    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange);
  }

  componentDidUnmount() {
    this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" style={{width: "200px"}} ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

function Example() {
  return (
    <Chosen className="chosen-container chosen-container-single" onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <Example/>
      </div>
    );
  }
}

export default App;