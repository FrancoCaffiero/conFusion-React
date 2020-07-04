import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// Returns a layout for a single dish
function RenderDish({ dish }) {
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

// Render a layout dor a single comment
function RenderComment({ comment }) {
  // format a date string
  const dtFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  if (comment != null) {
    return (
      <span>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, {dtFormatter.format(new Date(comment.date))}
        </p>
      </span>
    );
  } else {
    return <div></div>;
  }
}

// Render a layout for all the comments that belong to the dish
function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id}>
              <RenderComment comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

// Returns a layout for a dish and its comments
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
