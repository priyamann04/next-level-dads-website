import mongoose from 'mongoose'

const mailingListSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please add an email address'],
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
    minimize: true,
  }
)

export default mongoose.model('MailingList', mailingListSchema, 'mailing_list')
