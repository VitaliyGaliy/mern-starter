import Comment from '../models/comment';
import sanitizeHtml from 'sanitize-html';
// import post from '../models/post';

/**
 * Get all comments
 * @param req
 * @param res
 * @returns void
 */

 // const post = {
 //   path: 'post',
 //   model: 'Post',
 // };

export function getComments(req, res) {
  Comment.find({ cuid: req.params.cuid }).exec((err, comments) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ comments });
  });
}

/**
 * Save a comment
 * @param req
 * @param res
 * @returns void
 */
export function addComment(req, res) {
  if (!req.body.comment.name || !req.body.comment.content) {
    res.status(403).end();
  }

  const newComment = new Comment(req.body.comment);

  // Let's sanitize inputs
  newComment.name = sanitizeHtml(newComment.name);
  newComment.content = sanitizeHtml(newComment.content);

  // newComment.slug = slug(newComment.title.toLowerCase(), { lowercase: true });
  // newComment.post = sanitizeHtml(newComment.cuid);

  newComment.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ comment: saved });
  });
}

/**
 * Delete a Comment
 * @param req
 * @param res
 * @returns void
 */
export function deleteComment(req, res) {
  Comment.findOne({ _id: req.params._id }).exec((err, comment) => {
    if (err) {
      res.status(500).send(err);
    }
    comment.remove(() => {
      res.status(200).end();
    });
  });
}
