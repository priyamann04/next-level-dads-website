import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email address'],
    },
    subject: {
      type: String,
      required: [true, 'Please add a subject'],
    },
    message: {
      type: String,
      required: [true, 'Please add a message'],
    },
    successfullySent: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
    minimize: true,
  }
)

export default mongoose.model('Message', messageSchema, 'messages')
