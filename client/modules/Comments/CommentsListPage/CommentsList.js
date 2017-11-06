import React, { PropTypes } from 'react';

// Import Components
import CommentsListItem from '../CommentsListItem/CommentsListItem';

function CommentsList(props) {
  return (
    <div className="listView">
      {
        props.comments.map(c => (
          <CommentsListItem
            comment={c}
            key={c._id}
            onDelete={() => props.handleDeleteComment(c._id)}
          />
        ))
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
};

export default CommentsList;
