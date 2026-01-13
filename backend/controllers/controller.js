import asyncHandler from 'express-async-handler'
import validator from 'validator'
import Message from '../models/messageModel.js'
import MailingList from '../models/mailingListModel.js'
import { sendEmail } from '../services/services.js'
import {
  MAX_NAME_LENGTH,
  MAX_SUBJECT_LENGTH,
  MAX_MESSAGE_LENGTH,
} from '../config/constants.js'

// @desc Send NLD a message
// @route POST /api/messages
// @access Public
const sendMessage = asyncHandler(async (req, res) => {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.email ||
    !req.body.subject ||
    !req.body.message
  ) {
    res.status(400)
    throw new Error('Missing fields')
  }

  const name = req.body.name.trim()
  const email = req.body.email.trim().toLowerCase()
  const subject = req.body.subject.trim()
  const message = req.body.message.trim()

  if (!validator.isEmail(email)) {
    res.status(400)
    throw new Error('Invalid email address')
  }

  if (name.length > MAX_NAME_LENGTH) {
    res.status(400)
    throw new Error(`Name cannot exceed ${MAX_NAME_LENGTH} characters`)
  }

  if (subject.length > MAX_SUBJECT_LENGTH) {
    res.status(400)
    throw new Error(`Subject cannot exceed ${MAX_SUBJECT_LENGTH} characters`)
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    res.status(400)
    throw new Error(`Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`)
  }

  let successfullySent = false

  try {
    await sendEmail(name, email, subject, message)
    successfullySent = true
  } catch (_) {}

  try {
    await Message.create({ name, email, subject, message, successfullySent })
  } catch (error) {
    console.error('Error saving message to database:', error)
    if (!successfullySent) {
      res.status(500)
      throw new Error('Error sending message, please try again later')
    }
  }

  res.status(201).json({ message: 'Message sent successfully' })
})

// @desc Add email to mailing list
// @route POST /api/mailing-list
// @access Public
const addToMailingList = asyncHandler(async (req, res) => {
  if (!req.body?.email) {
    res.status(400)
    throw new Error('Missing fields')
  }

  const email = req.body.email.trim().toLowerCase()

  if (!validator.isEmail(email)) {
    res.status(400)
    throw new Error('Invalid email address')
  }

  try {
    await MailingList.create({ email })
    res
      .status(201)
      .json({ message: 'You have been successfully added to our mailing list' })
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(200)
        .json({ message: 'You are already in our mailing list' })
    }
    res.status(500)
    throw new Error('Something went wrong, please try again later')
  }
})

export { sendMessage, addToMailingList }
