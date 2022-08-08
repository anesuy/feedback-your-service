import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


export default function FeedbackStats() {
  
  //react context
  const { feedback } = useContext(FeedbackContext) 

  //calculate rating

  //loop all the ratings and add all the ratings and
  //add all the ratings together
  // = using REDUCE

  const average = Math.round(
    feedback.reduce((sum, {rating}) => {
      return sum + rating 
  }, 0))/ feedback.length;

    //if 0, the AVERAGE gives NaN (NOT A NUMBER), so we're gonna change that
   
    // toFixed(1) = gives one decimal place
    //average = average.toFixed(1).replace(/[./]0$/, '')
    // the rest will remove me decimal is ZERO 

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}




