import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller';
const router = new Router();

// Get all Comments
router.route('/comments/:cuid').get(CommentController.getComments);

// Get one post by cuid
// router.route('/comments/:cuid').get(CommentController.getComments);

// Add a new Comments
router.route('/comments').post(CommentController.addComment);

// Delete a comment by cuid
router.route('/comment/:_id').delete(CommentController.deleteComment);

router.route('/comments/:cuid').delete(CommentController.deleteAllComments);

export default router;
