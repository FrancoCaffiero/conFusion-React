import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

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

// User-define type built on React.Component
class Menu extends Component {
  // displays all the menu items (dishes)
  render() {
    // JSX
    // define layout of a 'dish' (menu item)
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      // JSX
      // display all the items
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  } // end render
} // end Menu

export default Menu; // make the component available to other code
