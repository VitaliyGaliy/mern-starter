import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './CommentsListItem.css';

function CommentsListItem(props) {
  return (
    <div className={styles['single-comment']}>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.comment.name}</p>
      <p className={styles['comment-desc']}>{props.comment.content}</p>
      <p className={styles['comment-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteComment" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

CommentsListItem.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CommentsListItem;
