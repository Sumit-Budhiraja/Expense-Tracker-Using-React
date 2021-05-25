import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //so that we can can add the class name as well
  //don't forget to add a space between two class names
  //console.log(classes);
  return <div className={classes}>{props.children}</div> ;//so that we can wrap the entire code into Card Component
}
export default Card;
