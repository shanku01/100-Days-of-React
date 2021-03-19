import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {act} from "react-dom/test-utils";


let container;

beforeEach(()=>{
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(()=>{
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter',()=>{
  act(()=>{
    ReactDOM.render(<App/>,container)
  });

  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe("You haven't  started");
  expect(document.title).toBe("You haven't  started");

  act(()=>{
    button.dispatchEvent(new MouseEvent(click,{bubbles:true}));
});

expect(label.textContent).toBe("Clciked Once");
expect(document.title).toBe("Clciked Once");

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
