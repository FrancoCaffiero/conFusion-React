import React from "react";
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

// Returns a layout for a single menu item (dish)
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// Returns all the menu items (dishes) on the menu
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    // JSX
    // Display the entire menu
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};
export default Menu; // make the component available to other code
