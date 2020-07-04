import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  // Constructor no needed, no globals or state

  // Render a screen layaout for a dish
  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  // Render a single comment
  renderComment(comment) {
    // format a date string
    const dtFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return (
      <span>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, {dtFormatter.format(new Date(comment.date))}
        </p>
      </span>
    );
  }

  // Render all the comments connected to a dish
  renderComments(comments) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => (
              <li key={comment.id}>{this.renderComment(comment)}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  // Create a screen layout for a dish and its comments
  render() {
    if (this.props.dish != null) {
      return (
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      );
    } else {
      return <div></div>;
    }
  } // end render()
} // end DishDetail

export default DishDetail;
