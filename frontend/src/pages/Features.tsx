import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Users,
  MapPin,
  Star,
  MessageCircle,
  Send,
  Building2,
  Laptop,
  Baby,
} from 'lucide-react'
import { trackEvent } from '../utils/analytics'
import originalLogo from '@/assets/logo-transparent.png'
import PhonePreview from '@/components/PhonePreview'
import profileScreen from '@/assets/profile.png'
import discoverScreen from '@/assets/discover-dads.png'
import communityScreen from '@/assets/discussion-threads.png'

const EVENTS = {
  'Watch Demo': {
    eventName: 'watch_demo_video',
    contentID: 'watch_demo',
  },
  'View Preview': {
    eventName: 'try_app_demo',
    contentID: 'view_preview',
  },
  'Share Your Interest': {
    eventName: 'open_interest_form',
    contentID: 'share_your_interest',
  },
  'Give Feedback': {
    eventName: 'open_feedback_form',
    contentID: 'give_feedback',
  },
}

const trackButtonClick = (buttonLabel: string) => {
  const { eventName, contentID } = EVENTS[buttonLabel]
  trackEvent(eventName, {
    content_id: contentID,
    page_title: 'Features',
  })
}

const PHONE_STEPS = [
  {
    title: 'Create your profile',
    description:
      "Tell us about your dad life, what you're looking for, and what matters most to you.",
    image: profileScreen,
    viewBox: '762 302 768 1556',
  },
  {
    title: 'Connect & chat',
    description:
      'Find compatible dads and start a one-to-one conversation built around shared experiences.',
    image: discoverScreen,
    viewBox: '735 351 768 1556',
  },
  {
    title: 'Join communities',
    description:
      'Explore local groups, discover shared interests, and find events happening near you.',
    image: communityScreen,
    viewBox: '695 302 768 1556',
  },
]

// Use the public welcome flow so new visitors can set up their profile first.
const APP_ENTRY_URL = 'https://app.nextleveldads.ca'

const FEATURE_DETAILS = [
  {
    title: 'Start with you',
    description:
      "Tell us where you are, what you're looking for, and what matters most to you.",
    cta: 'Get started',
    cards: [
      {
        icon: MapPin,
        title: 'Where you are',
        description:
          "Share your city, your kids' ages, and where you are in your dad life.",
      },
      {
        icon: Users,
        title: "What you're looking for",
        description:
          "Tell us whether you're looking for dad friends, events, playdates, activities, or something else.",
      },
      {
        icon: Star,
        title: 'What matters to you',
        description:
          'Choose what matters most when meeting another dad, like living nearby, kids around the same age, shared interests, or being around your age.',
      },
      {
        icon: MessageCircle,
        title: 'Add your personality',
        description: 'Answer a few prompts to help other dads get to know you.',
      },
    ],
  },
  {
    title: 'Find dads',
    description:
      'Discover dads based on what matters to you and see what you have in common.',
    cta: 'Start connecting',
    cards: [
      {
        icon: Users,
        title: 'See what you have in common',
        description:
          "See shared interests, similar stages of fatherhood, what they're looking for, and other things you might have in common.",
      },
      {
        icon: Send,
        title: 'Make the first move',
        description:
          'Send a connection request with an optional note to introduce yourself and break the ice.',
      },
      {
        icon: MessageCircle,
        title: 'Take it one-to-one',
        description:
          "Once you're connected, continue the conversation in a private 1:1 chat and start building a meaningful friendship.",
      },
    ],
  },
  {
    title: 'Find your people',
    description:
      "Join communities around where you live, what you're into, and where you are in fatherhood.",
    cta: 'Explore communities',
    cards: [
      {
        icon: Building2,
        title: 'Toronto Dads',
        description:
          'Connect with dads nearby for conversations, recommendations, and local meetups.',
      },
      {
        icon: Laptop,
        title: 'Tech & Gaming Dads',
        description:
          'Talk tech, gaming, hobbies, and everything in between with dads who share your interests.',
      },
      {
        icon: Baby,
        title: 'New & Expecting Dads',
        description:
          'Connect with dads preparing for or navigating the early stages of fatherhood.',
      },
    ],
  },
]

const Features = () => {
  const [activePhone, setActivePhone] = useState(0)

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f1ed] px-4 py-8 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-6 h-[22rem] w-[22rem] rounded-full bg-[#c7a46a]/40 blur-3xl" />
        <div className="absolute right-4 top-14 h-[28rem] w-[28rem] rounded-full bg-[#c6a185]/35 blur-3xl" />
        <div className="absolute bottom-[-3rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#1a1b1a]/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* App hero */}
        <section className="relative z-10 mx-auto max-w-5xl py-12 text-center md:py-16">
          {/* The 624x468 PNG's visible logo occupies y=109..341.
              Crop transparent vertical padding without rescaling the artwork. */}
          <div className="relative mx-auto aspect-[624/236] w-72 max-w-full overflow-hidden sm:w-80 md:w-[34rem]">
            <img
              src={originalLogo}
              alt="Next Level Dads"
              className="absolute left-0 top-[-45.7627%] h-auto w-full"
            />
          </div>

          <h1 className="mt-10 text-4xl font-black tracking-[-0.04em] text-[#1a1b1a] sm:text-5xl md:mt-12 md:text-6xl lg:text-7xl">
            Next Level Dads App
          </h1>
          <p className="mx-auto mt-3 max-w-full text-xl leading-relaxed text-[#1a1b1a]/75 md:mt-5">
            A platform designed to help fathers build friendships and find
            community.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-full bg-[#c7a46a] px-8 text-base font-semibold text-[#1a1b1a] shadow-none hover:bg-[#bb955d] md:mt-12 md:h-14 md:text-lg"
          >
            <a
              href={APP_ENTRY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the app
            </a>
          </Button>
        </section>

        <section
          className="relative z-10 pb-16"
          aria-label="App features"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-[#1a1b1a] md:text-4xl">
              See how it works
            </h2>
            <p className="mt-3 text-base text-[#1a1b1a]/70 md:text-lg">
              Select a feature below to explore Next Level Dads.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {PHONE_STEPS.map((phone, index) => {
              const isActive = activePhone === index

              return (
                <div
                  key={phone.title}
                  className="flex min-w-0 flex-col items-center"
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-controls={`feature-details-${index}`}
                    aria-label={`Show details for ${phone.title}`}
                    onClick={() => setActivePhone(index)}
                    className={`relative aspect-[768/1556] w-full max-w-[210px] shrink-0 cursor-pointer rounded-[2rem] bg-transparent p-0 text-left transition-transform duration-300 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1b1a] sm:max-w-[240px] lg:max-w-[256px] ${isActive ? '-translate-y-2' : ''}`}
                  >
                    <PhonePreview
                      src={phone.image}
                      alt={`${phone.title} app screen`}
                      viewBox={phone.viewBox}
                    />
                  </button>
                  <div
                    className={`mt-6 max-w-xs text-center ${isActive ? 'visible' : 'invisible'}`}
                    aria-hidden={!isActive}
                  >
                    <h2 className="text-xl font-black text-[#1a1b1a]">
                      {phone.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-[#1a1b1a]/70">
                      {phone.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="-mx-4 mt-12 md:-mx-8 lg:-mx-12">
            {FEATURE_DETAILS.map((feature, index) => {
              const isActive = activePhone === index

              return (
                <section
                  key={feature.title}
                  id={`feature-details-${index}`}
                  aria-labelledby={`feature-heading-${index}`}
                  aria-hidden={!isActive}
                  className={`min-w-0 flex-col bg-[#e5ded4] px-6 py-10 text-center md:px-10 ${isActive ? 'flex' : 'hidden'}`}
                >
                  <h2
                    id={`feature-heading-${index}`}
                    className="text-3xl font-black tracking-[-0.03em] text-[#1a1b1a] md:text-4xl"
                  >
                    {feature.title}
                  </h2>
                  <p className="mx-auto mt-3 max-w-full text-lg text-muted-foreground">
                    {feature.description}
                  </p>

                  <div
                    className={`my-6 grid gap-4 ${index === 0 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}
                  >
                    {feature.cards.map((card) => (
                      <Card
                        key={card.title}
                        className="text-left transition-all hover:-translate-y-1 hover:shadow-xl"
                      >
                        <CardContent className="flex items-start gap-4 p-5 lg:p-6">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <card.icon
                              aria-hidden="true"
                              className="h-6 w-6 text-[#c7a46a]"
                            />
                          </div>
                          <div>
                            <h3 className="mb-2 text-xl font-semibold">
                              {card.title}
                            </h3>
                            <p className="text-base leading-relaxed text-muted-foreground">
                              {card.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="mx-auto h-12 w-full max-w-xl rounded-full bg-[#c7a46a] px-7 text-sm font-semibold text-[#1a1b1a] shadow-none hover:bg-[#bb955d]"
                    onClick={() => trackButtonClick('View Preview')}
                  >
                    <a
                      href={APP_ENTRY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={isActive ? 0 : -1}
                    >
                      {feature.cta}
                    </a>
                  </Button>
                </section>
              )
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10 -mx-4 bg-[#e5ded4] px-4 py-10 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="space-y-3"
            >
              <AccordionItem
                value="mobile-app"
                className="rounded-lg border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-lg">
                  Is this a mobile app?
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground">
                  Not yet. Next Level Dads is currently in early preview, with a
                  web-based platform you can explore on your phone or computer.
                  A full launch in Canada, including a mobile app version, is
                  planned for the future.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="cost"
                className="rounded-lg border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-lg">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground">
                  Next Level Dads will be free to join and use at launch. Some
                  events may have a cost depending on the activity or host.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="fit"
                className="rounded-lg border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-lg">
                  Who is Next Level Dads for?
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground">
                  Next Level Dads is for all fathers, whether you're a new dad,
                  experienced dad, single dad, married dad, or anywhere in
                  between. If you're looking to meet other dads, build
                  friendships, find activities and events, or simply be part of
                  a community, there's a place for you here.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* App actions */}
        <section
          id="explore-demo"
          className="mx-auto max-w-3xl pb-12 pt-4 text-center scroll-mt-24"
        >
          <h2 className="text-2xl font-black text-[#1a1b1a] md:text-3xl">
            Ready to take the next step?
          </h2>
          <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
            <Button
              asChild
              className="h-12 w-full rounded-full bg-[#c7a46a] text-[#1a1b1a] hover:bg-[#bb955d]"
              onClick={() => {
                trackButtonClick('View Preview')
              }}
            >
              <a
                href="https://app.nextleveldads.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the app
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-full border-[#c7a46a] bg-transparent text-[#1a1b1a] hover:bg-[#e5ded4]"
              onClick={() => {
                trackButtonClick('Give Feedback')
              }}
            >
              <a
                href="https://forms.gle/kFXuhWFceWyf3vjw6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Feedback
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Features
