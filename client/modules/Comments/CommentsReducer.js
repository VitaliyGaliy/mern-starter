import { ADD_COMMENT, ADD_COMMENTS, DELETE_COMMENT } from './CommentsActions';

// Initial State
const initialState = { data: [] };

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT :
      return {
        data: [action.comment, ...state.data],
      };

    case ADD_COMMENTS :
      return {
        data: action.comments,
      };

    case DELETE_COMMENT :
      return {
        data: state.data.filter(comment => comment._id !== action._id),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getComments = state => state.comments.data;

// Export Reducer
export default CommentsReducer;
