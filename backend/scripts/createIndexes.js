import Message from '../models/messageModel.js'
import MailingList from '../models/mailingListModel.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from '../config/db.js'

const createIndexes = async () => {
  try {
    await connectDB()
    await Promise.all([Message.syncIndexes(), MailingList.syncIndexes()])
    console.log('Indexes created successfully.')
    process.exit(0)
  } catch (error) {
    console.error('Error creating indexes:', error)
    process.exit(1)
  }
}

createIndexes()
