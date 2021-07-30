import mongoose from '../database';

const MessageSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  from: {
    type: String,
    require: true,
  },
  target: {
    type: String,
    require: true,
  },
  media: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  messageStatus: {
    type: String,
    require: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: {
    created_at: 'crAt',
    updated_at: 'upAt',
  },
}, { multi: false, omitUndefined: true });

const Message = mongoose.model('Message', MessageSchema);

export default Message;
