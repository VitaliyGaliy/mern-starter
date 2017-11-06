import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './CommentsCreateWidget.css';

export class CommentsCreateWidget extends Component {
  addComments = () => {
    const nameRef = this.refs.name;
    const contentRef = this.refs.content;
    if (nameRef.value && contentRef.value) {
      this.props.addComment(nameRef.value, contentRef.value);
      nameRef.value = contentRef.value = '';
    }
  };

  render() {

    const cls = `${styles.form} ${(!this.props.showAddComment ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
        <textarea placeholder={this.props.intl.messages.commentsContent} className={styles['form-field']} ref="content" />
        <a className={styles['comments-submit-button']} href="#" onClick={this.addComments}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

CommentsCreateWidget.propTypes = {
  addComments: PropTypes.func.isRequired,
  showAddComments: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(CommentsCreateWidget);
