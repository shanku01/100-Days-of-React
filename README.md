##100 days of React

#Day 1 of 100 Days of React

ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −

React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.

React Features
JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.

Components − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.

Unidirectional data flow and Flux − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.

License − React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.

React Advantages
Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.

Can be used on client and server side as well as with other frameworks.

Component and data patterns improve readability, which helps to maintain larger apps.

React Limitations
Covers only the view layer of the app, hence you still need to choose other technologies to get a complete tooling set for development.

Uses inline templating and JSX, which might seem awkward to some developers.

Installation

You need node for react. So first download that then - npx create-react-app appname  and you are done.
npm start on cmd to start your app.

#jsx
const jsxElement = <h1>hello, world</h1>
const jsxElement1 = <div><h1>hello, world</h1></div>
It helps you write logic with markup.
You can also write jsx as Expression
return <h1>hello, world</h1>
Babel compiles JSX down to React.createElement() calls.

#simplified jsx
const jsxElement = {
  type: 'h1',
  props: {
    children: 'Hello, world!'
  }
};


#Rendering element
Element are smallest building block of react.
To render a React element into a root DOM node, pass both to ReactDOM.render():

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

React elements are unchangable and represent UI at certain time, If you want to change UI then you need to create another element.

#React changes only necessary elements
The elements which are changed are updated in dom.

