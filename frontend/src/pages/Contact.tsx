import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import validator from 'validator'
import {
  MAX_NAME_LENGTH,
  MAX_SUBJECT_LENGTH,
  MAX_MESSAGE_LENGTH,
} from '@/config/constants'

const Contact = () => {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const lengthLimits = {
    name: MAX_NAME_LENGTH,
    subject: MAX_SUBJECT_LENGTH,
    message: MAX_MESSAGE_LENGTH,
  }

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'email'
          ? e.target.value
          : e.target.value.slice(0, lengthLimits[e.target.name]),
    })
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const name = formData.name.trim()
    const email = formData.email.trim().toLowerCase()
    const subject = formData.subject.trim()
    const message = formData.message.trim()

    if (!name || !email || !subject || !message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    if (!validator.isEmail(email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    try {
      await axios.post(
        '/api/messages',
        {
          name,
          email,
          subject,
          message,
        },
        {
          timeout: 5000,
        }
      )
      setFormData({ name: '', email: '', subject: '', message: '' })
      toast({
        title: 'Message sent!',
        description:
          "Thank you for reaching out. We'll get back to you as soon as possible.",
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: `${
          error.response?.data?.message ||
          'Failed to send message. Please try again later.'
        }`,
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const emailCleaned = email.trim().toLowerCase()

    if (!emailCleaned) {
      toast({
        title: 'Error',
        description: 'Please enter your email address.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    if (!validator.isEmail(emailCleaned)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    try {
      await axios.post(
        '/api/mailing-list',
        { email: emailCleaned },
        { timeout: 5000 }
      )
      toast({
        title: 'Subscribed!',
        description:
          'You have been added to our mailing list. Stay tuned for updates!',
      })
      setEmail('')
    } catch (error) {
      toast({
        title: 'Error',
        description: `${
          error.response?.data?.message ||
          'Failed to subscribe. Please try again later.'
        }`,
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions, suggestions, or want to learn more? We'd love to
            hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@nextleveldads.ca"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@nextleveldads.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        We usually respond within 1–2 business days
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold mb-3">Follow Us</h3>
                    <div className="space-y-3">
                      <a
                        href="https://www.instagram.com/next_level_dads/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Next Level Dads on Instagram"
                        className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Instagram className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/Nextleveldads/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Next Level Dads on Facebook"
                        className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Facebook className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/next-level-dads/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Next Level Dads on LinkedIn"
                        className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>Join Our Mailing List</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay informed about app updates, events, and ways to get
                  involved.
                </p>
                <form
                  className="space-y-3"
                  onSubmit={handleSubmitEmail}
                >
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="md:col-span-2 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmitForm}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by Next
                  Level Dads regarding your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
