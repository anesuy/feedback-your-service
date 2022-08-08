import PropTypes from "prop-types";

export default function Card({ children, reverse }) {
  // In the "FeedbackItem.jsx" the two divs that show that
  //show the title and content of the card
  // are CHILDREN of the <Card/> Component,
  // Therefore, you can use CHILDREN as  DEFAULT PROP

  //"card" + money sign curly braces because we're in a template string
  //IF reverse, then we want the class if reverse just like that
  // eslint-disable-next-line no-template-curly-in-string

  // IF REVERSE ? _____ : ELSE
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
