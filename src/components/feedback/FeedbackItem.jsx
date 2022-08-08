import { useState } from "react";
import Card from "../shared/Card";
import PropTypes from "prop-types";
import {FaTimes, FaEdit} from 'react-icons/fa';
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackItem({ content }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an examplo of a feedback item");

  return (
    <Card >
      <div className="num-display">{content.rating}</div>
      <button onClick={() => deleteFeedback(content.id)} className="close"><FaTimes color='purple'/></button>
      <button onClick={() => editFeedback(content)}  className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{content.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  content: PropTypes.object.isRequired
}
