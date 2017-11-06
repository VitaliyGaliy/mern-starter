import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';

// Export Actions

export function addComments(comments) {
  return {
    type: ADD_COMMENTS,
    comments,
  };
}

export function fetchComments(cuid) {
  return (dispatch) => {
    return callApi(`comments/${cuid}`).then(res => {
      dispatch(addComments(res.comments));
    });
  };
}


export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function addCommentRequest(comment) {
  return (dispatch) => {
    return callApi('comments', 'post', {
      comment: {
        name: comment.name,
        cuid: comment.cuid,
        content: comment.content,
      },
    }).then(res => dispatch(addComment(res.comment)));
  };
}

export function deleteComment(_id) {
  return {
    type: DELETE_COMMENT,
    _id,
  };
}

export function deleteCommentRequest(_id) {
  return (dispatch) => {
    return callApi(`comment/${_id}`, 'delete').then(() => dispatch(deleteComment(_id)));
  };
}

export function deleteComments(cuid) {
  console.log('deleteComments');
  return {
    type: DELETE_COMMENTS,
    cuid,
  };
}

export function deleteAllCommentsRequest(cuid) {
  return (dispatch) => {
    return callApi(`comments/${cuid}`, 'delete').then(() => dispatch(deleteComments(cuid)));
  };
}
