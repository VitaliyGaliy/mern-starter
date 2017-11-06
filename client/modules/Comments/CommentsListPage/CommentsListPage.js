import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import CommentsList from './CommentsList';
import CommentsCreateWidget from '../CommentsCreateWidget/CommentsCreateWidget';

// Import Actions
import { addCommentRequest, fetchComments, deleteCommentRequest } from '../CommentsActions';

// Import Selectors
import { getShowAddComment } from '../../App/AppReducer';
import { getComments } from '../CommentsReducer';

class CommentsListPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchComments(this.props.cuid));
  }

  handleDeleteComment = _id => {
    if (confirm('Do you want to delete this comment')) { // eslint-disable-line
      this.props.dispatch(deleteCommentRequest(_id));
    }
  };

  handleAddComment = (name, content) => {
    const cuid = this.props.cuid;
    this.props.dispatch(addCommentRequest({ name, cuid, content }));
  };

  render() {
    console.log('showAddComment', this.props.showAddComment);
    return (
      <div>
        <CommentsCreateWidget addComment={this.handleAddComment} showAddComment={this.props.showAddComment} />
        <CommentsList handleDeleteComment={this.handleDeleteComment} comments={this.props.comments} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
CommentsListPage.need = [() => { return fetchComments(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    comments: getComments(state),
    showAddComment: getShowAddComment(state),
  };
}

CommentsListPage.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  cuid: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  showAddComment: PropTypes.bool.isRequired,
};

CommentsListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(CommentsListPage);
