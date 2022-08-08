import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Feedbacks from "../data/Feedbacks";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(Feedbacks);

  const deleteFeedbackContext = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
    // if the ITEM.ID if note equal to the ID that's being passed
    // filter is gonna return the array MINUS the one's we're deleting
  };

  const addFeedbackContext = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback((feedback) => {
      return [newFeedback, ...feedback];
    });
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    itemEdit: {},
    edit: false,
  });

  const editFeedbackContext = (item) => {
    setFeedbackEdit({
      itemEdit: item,
      edit: true,
    });
  };

  const editFeedbackContextUndo = (item) => {
    setFeedbackEdit({
      edit: false,
    });
  };

  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((itemMap) =>
        (itemMap.id === id ? { ...itemMap, ...updateItem } : itemMap)
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback: deleteFeedbackContext,
        addFeedback: addFeedbackContext,
        editFeedback: editFeedbackContext,
        feedbackEdit: feedbackEdit, //actual piece of state that holds the item and information to be edited
        updateFeedback: updateFeedback,
        updateReset: editFeedbackContextUndo,
        
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
