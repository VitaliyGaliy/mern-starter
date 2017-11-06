import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  post: {
   type: Schema.ObjectId,
   ref: 'Post',
 },
  name: { type: 'String', required: true },
  content: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  cuid: { type: 'String', required: true },
});

export default mongoose.model('Comment', commentSchema);
