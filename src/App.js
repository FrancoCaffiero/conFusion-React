import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

/*
	The render() fns below contain JSX code
	  
	JSX is "syntactic sugar for React.createElement(component, props, ...children)". [see https://reactjs.org/docs/jsx-in-depth.html]
	
	It is an 'XML like' extension of Javascript that is
	used to facilitate the rendering of React components 
	in the browser. Won't run if 'React' is not in scope.
	
	Conventions:
	-----------
	lowercase    = DOM tags, built-in element (HTML)
	Capitalized  = React Component (all user-types must be Capitalized)
	camelCase    = reactstrap verion of Bootstrap attribs, events, etc
	{expression} = any valid JS expression can be passed as a 'props'
					(fn arg) if enclosed in curly braces

	Notes:
	-----
	- do not end an {expr} used in a render() with a ';', it will display
	- ctor not required if no globals or set values being created
*/
