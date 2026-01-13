import express from 'express'
import { sendMessage, addToMailingList } from '../controllers/controller.js'
import rateLimit from 'express-rate-limit'
import {
  MESSAGE_RATE_LIMIT_MAX_REQUESTS_PER_15_MINS,
  MAILING_LIST_RATE_LIMIT_MAX_REQUESTS_PER_15_MINS,
} from '../config/constants.js'

const messageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: MESSAGE_RATE_LIMIT_MAX_REQUESTS_PER_15_MINS,
  statusCode: 429,
  message: 'Too many messages sent. Please wait before trying again.',
})

const mailingListLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: MAILING_LIST_RATE_LIMIT_MAX_REQUESTS_PER_15_MINS,
  statusCode: 429,
  message: 'Too many signup attempts. Please wait before trying again.',
})

const router = express.Router()

router.post('/messages', messageLimiter, sendMessage)

router.post('/mailing-list', mailingListLimiter, addToMailingList)

export default router
