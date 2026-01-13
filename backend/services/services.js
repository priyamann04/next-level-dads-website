import { Resend } from 'resend'
import { escapeHTML } from '../utils/utils.js'

const sendEmail = async (name, email, subject, message) => {
  const messageBodyHTML = `
  <p><strong>Name:</strong> ${escapeHTML(name)}</p>
  <p><strong>Email:</strong> ${escapeHTML(email)}</p>
  <p><strong>Subject:</strong> ${escapeHTML(subject)}</p>
  <p></p>
  <p>${escapeHTML(message).replace(/\n/g, '<br>')}</p>
  `

  const messageBodyText = `
  Name: ${name}
  Email: ${email}
  Subject: ${subject}
  
  ${message}
  `

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: `Next Level Dads <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: 'New Message from Next Level Dads Website',
    html: messageBodyHTML,
    text: messageBodyText,
  })

  if (error) {
    console.error('Error sending email:', error)
    throw new Error('Error sending email')
  }
}

export { sendEmail }
