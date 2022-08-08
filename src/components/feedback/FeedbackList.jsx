import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
//import PropTypes from "prop-types"

export default function FeedbackList() {

  //react-context

  const {feedback} = useContext(FeedbackContext)

  // if NO feedbackItems    OR      if it's less and that number of characters)
  if (!feedback|| feedback.length === 0) {
    return (
      <>
        <p>No feedback Yet</p>
      </>
    );
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} content={item} ></FeedbackItem>
      ))}
    </div>
  );
}

//DUE "useContext" WE'RE NOT USING THIS ANYMORE
//FeedbackList.propTypes = {
//  feedbackItems: PropTypes.arrayOf(
//    PropTypes.shape({
//      id: PropTypes.number.isRequired,
//      text: PropTypes.string.isRequired,
//      rating: PropTypes.number.isRequired
//    })
//  )
//}