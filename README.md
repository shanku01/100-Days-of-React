##100 days of React

#Day 1 of 100 Days of React

ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −

React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.


#React Features
JSX − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.

Components − React is all about components. You need to think of everything as a component. This will help you maintain the code when working on larger scale projects.

Unidirectional data flow and Flux − React implements one-way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.

License − React is licensed under the Facebook Inc. Documentation is licensed under CC BY 4.0.


#React Advantages
Uses virtual DOM which is a JavaScript object. This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.

Can be used on client and server side as well as with other frameworks.

Component and data patterns improve readability, which helps to maintain larger apps.


#React Limitations
Covers only the view layer of the app, hence you still need to choose other technologies to get a complete tooling set for development.

Uses inline templating and JSX, which might seem awkward to some developers.


#Installation

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



##Day 2

#Component and Props

A component is a peice of code which takes input which are called props and return JSX.

Two type of component

1.Class
Class App Extends React.Component
{
  render(){jsx}
}

2. Fuctional
function App(){
  return {jsx}
}

"When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”."

<Component prop="propData"/>

#Composing Component
Component can be written in other component output.
<Component>
<SubComponent/>
</Component>

"Props are immutable this means that functions need to be pure so that they do not try to change props."

"The main perpose of component to create useable code"

#State and Life Cycle

State represents property of any component, with change in state compontent changes.

constructor() is used to intialize state, it accepts props.
"It doesn't mean that you get error if you don't use contructor and call props but it's a nice way"

##Life Cycle
Mounting - Adding resource to component
componentdidMount()

UnMounting - Removing resources
componentWillUNmount()

"You can defind 'this properties' inside lifecycle methods." 

"If you want to use any method in render then you need to first bind that with this."

Quick recap - LifeCycle -> Initialize (constructor)-> Mounting(render)-> Update(componentDidMount)->UnMount(componentWillUnmount)

#State
You can intialize state only in constructor.
You have to use setState to update state.
State update is async which means that if you call two setState the second might update first depends on the resource.

"This happens becouse react batch updates and do all setState together."

#To solve this we use function as parameter
setState((state,props)=>({
  mystate :state+props
}));

"Components are abstract this means neither parents nor childs know about component's state "

"Data flow in unidirection Top-Down "


##Day 3

#Handling Events
React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

<button onClick={onClick}>click me</button>

"Default value is prevented by event.preventDefault();"

"In class component you have to bind event Listner with 'this' "
<button onClick={this.onclick}>click me <button>


#passing arguments with event
<button onClick={this.onclick.bind(this,param)}>click me <button>

"If you don't bind pramameter you will get unwanted results"

##Conditional Rendering
You can choose what do you want to render and what you want to encapsulate.

"Note Functions are not valid as react child"

true && expression always evaluates to expression, and false && expression always evaluates to false.


#preventing from rendering
return null instead of its render output.

Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.




##Day 4

#List and Keys

#Renderring Multiple Component

You can build collections of elements and include them in JSX using curly braces {}.

A "key" is a special string attribute you need to include when creating lists of elements, they help React identify which items have changed, are added, or are removed. Unique value like ids or indexes are used for keys.
"Note - Keys only make sense in the context of the surrounding array."
<div><li key ={item.id}>{item}</li></div> ## worong

<div key ={item.id}><li>{item}</li></li> ##right way

"""
Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, 
pass it explicitly as a prop with a different name
"""

##JSX allows embedding any expression in curly braces so we could inline the map() result.


##Froms
"""
HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.
"""

#Controlled Component

"""
We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”
"""


##Day 5

#select tag
React, instead of using this selected attribute, uses a value attribute on the root select tag. 

#handling multiple input
When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.

#Controlled null value



#Lifting State Up
In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
There should be a single “source of truth” for any data that changes in a React application.
Instead of trying to sync the state between different components, you should rely on the top-down data flow.


##Day 6

#Composition and Inheritance
Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

#Creating React App
1. Divide page in component and sub component.
2. Create static components.
3. Use minimal but complete state.
4. Keep data flow bottom up ot top down.

So, This is all about basic React. I am gonna learn learn advance from tomorrow.

##Day 7

#Accessibility

Creating a design that can be used by everyone.

##Standards


WCAG -
The Web Content Accessibility Guidelines provides guidelines for creating accessible web sites.


WAI-ARIA -
The Web Accessibility Initiative - Accessible Rich Internet Applications document contains techniques for building fully accessible JavaScript widgets.

attribute-name = {camelCase}


Semantic HTML-
Semantic HTML is the foundation of accessibility in a web application. Using the various HTML elements to reinforce the meaning of information in our websites will often give us accessibility for free.


#Accessible Forms
Focus Control -
Ensure that your web application can be fully operated with the keyboard only

Mechanisms to skip to desired content-
Provide a mechanism to allow users to skip past navigation sections in your application as this assists and speeds up keyboard navigation.

Programmatically managing focus-
To set focus in React, we can use Refs to DOM elements.

Mouse and pointer events
Ensure that all functionality exposed through a mouse or pointer event can also be accessed using the keyboard alone. 

Setting the language
Indicate the human language of page texts as screen reader software uses this to select the correct voice settings

Setting the document title
Set the document <title> to correctly describe the current page content as this ensures that the user remains aware of the current page context

Color contrast
Ensure that all readable text on your website has sufficient color contrast to remain maximally readable by users with low vision

##Development and Testing Tools

The keyboard
By far the easiest and also one of the most important checks is to test if your entire website can be reached and used with the keyboard alone.

Development assistance
We can check some accessibility features directly in our JSX code. Often intellisense checks are already provided in JSX aware IDE’s for the ARIA roles, states and properties.

Testing accessibility in the browser
A number of tools exist that can run accessibility audits on web pages in your browser. Please use them in combination with other accessibility checks mentioned here as they can only test the technical accessibility of your HTML.

Screen readers
Testing with a screen reader should form part of your accessibility tests.



# Day 8

# Code-Splitting

#Bunding
Bundling is the process of following imported files and merging them into a single file.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.



# import 

Instead of importing everything before use it at runtime.

import("./math").then(math=>{
  console.log(math.add(10,20))
});


# React.lazy

const Component = React.lazy(()=> import('./Component'))

<Suspense fallback={<div>Loading...</div>}>
        <Component />
</Suspense>


# Error boundaries

If the other module fails to load (for example, due to network failure), it will trigger an error. You can handle these errors to show a nice user experience and manage recovery with Error Boundaries. Once you’ve created your Error Boundary, you can use it anywhere above your lazy components to display an error state when there’s a network error.


# Route-based code splitting
Using react router with react lazy.


# Named Exports

React.lazy currently only supports default exports. If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default. This ensures that tree shaking keeps working and that you don’t pull in unused components.



# # Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.


# When to use Context
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

"""
If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
"""



## Day 9

"""
Note-
If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
"""

"""
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
"""

#API

React.createContext
To Intailize context, takes default value.

Context.Provoder
Wraps all the component which gonna use context, takes a value.

Class.contextType
To make context global for any component.

Context.Consumer 
Takes the context and give react child.

Context.displayName
Gives a name to context



## Day 10

#Cavets

It's good to up state while using context.

# Error Boundries
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

"""
Only class components can be error boundaries.
"""

"""
You need to be carefull about Where to use Error Boundary it may couse security issue if you don't use it at all.
"""

"""
Error boundaries do not catch errors inside event handlers.
"""



## Day 11

# Refrence

Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

"""
Conditionally applying React.forwardRef when it exists is also not recommended for the same reasons: it changes how your library behaves and can break your users’ apps when they upgrade React itself
"""

# Fragments

Fragments let you group a list of children without adding extra nodes to the DOM.

""<>
<Child1/>
<Child2/>
<Child3/>
</>""

"""
key is the only attribute that can be passed to Fragment.
"""

# Higher Order Functions

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

const myComponent = higherOrderComponent(otherComponent)
"""
Note that a HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.
"""
Don’t Mutate the Original Component. Use Composition.a
There are a few problems with this. One is that the input component cannot be reused separately from the enhanced component.



## Day 12 of 100 Days of code

"""
HOC note -
1. Don’t Use HOCs Inside the render Method.
2. Use static method.
3. Refs Aren’t Passed Through.
"""


# Integration with other Librarires


## Day 13 of 100 Days of Code

# JSX in depth

Using Dot Notation for JSX Type.

User-Defined Components Must Be Capitalized.

You cannot use a general expression as the React element type. If you do want to use a general expression to indicate the type of the element, just assign it to a capitalized variable first. 

# props
You can pass any JavaScript expression as a prop, by surrounding it with {}. 

If you pass no value for a prop, it defaults to true. 

You can pass a string literal as a prop. 

f you already have props as an object, and you want to pass it in JSX, you can use ... as a “spread” operator to pass the whole props object.

# Children





































