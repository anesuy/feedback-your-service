import Card from "../shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback, updateReset} =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(7);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.itemEdit.text);
      setRating(feedbackEdit.itemEdit.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = ({ target: { value } }) => {
    setText(value);

    if (value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value !== "" && value.trim().length < 10) {
      setMessage("Review must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.itemEdit.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
      setBtnDisabled(true);
      setRating(10);
      updateReset()
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating}></RatingSelect>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
          {/* PROPS VERSION = DEFAULT (PRIMARY) */}
          {/* If there's a message: <div>, if not;  nothing*/}
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
