import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Users, MapPin } from 'lucide-react'
import { trackEvent } from '../utils/analytics'
import { Link } from 'react-router-dom'
import originalLogo from '@/assets/logo.png'
import profileScreen from '@/assets/app-profile.png'
import discoverScreen from '@/assets/app-discover.png'
import communityScreen from '@/assets/app-community.png'

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
      'Choose your city, fatherhood stage, interests, and the things that matter most to you.',
    image: profileScreen,
  },
  {
    title: 'Connect & chat',
    description:
      'Find compatible dads and start a one-to-one conversation built around shared experiences.',
    image: discoverScreen,
  },
  {
    title: 'Join communities',
    description:
      'Explore local groups, discover shared interests, and find events happening near you.',
    image: communityScreen,
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
          <img
            src={originalLogo}
            alt="Next Level Dads"
            className="mx-auto w-56 object-contain sm:w-64"
          />

          <h1 className="mt-6 text-2xl font-black tracking-[-0.04em] text-[#1a1b1a] md:text-3xl">
            Next Level Dads App
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#1a1b1a]/75 md:text-lg">
            A platform designed to help fathers build connections and find
            community.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-6 h-11 rounded-full bg-[#c7a46a] px-7 text-sm font-semibold text-[#1a1b1a] shadow-none hover:bg-[#bb955d]"
          >
            <Link to="#explore-demo">Explore the app</Link>
          </Button>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl pb-16" aria-label="App features">
          <div className="grid gap-8 md:grid-cols-3">
            {PHONE_STEPS.map((phone, index) => {
              const isActive = activePhone === index

              return (
                <div key={phone.title} className="flex flex-col items-center">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-label={`Show details for ${phone.title}`}
                    onMouseEnter={() => setActivePhone(index)}
                    onFocus={() => setActivePhone(index)}
                    onClick={() => setActivePhone(index)}
                    className={`group relative h-[360px] w-[210px] rounded-[2rem] border-[9px] border-[#2d2d2d] bg-white p-3 text-left shadow-[0_18px_30px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c7a46a]/50 sm:h-[410px] sm:w-[240px] ${isActive ? '-translate-y-2' : ''}`}
                  >
                    <span className="absolute left-1/2 top-2 h-2 w-14 -translate-x-1/2 rounded-full bg-[#2d2d2d]" />
                    <span className="absolute left-1/2 top-6 h-2 w-16 -translate-x-1/2 rounded-full bg-[#2d2d2d]/70" />
                    <img
                      src={phone.image}
                      alt={`${phone.title} app screen`}
                      className="h-full w-full rounded-[1.35rem] object-contain"
                    />
                  </button>
                  {isActive && (
                    <div className="mt-6 max-w-xs text-center">
                      <h2 className="text-xl font-black text-[#1a1b1a]">{phone.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-[#1a1b1a]/70">{phone.description}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {activePhone === 2 && (
            <div className="mx-auto mt-12 max-w-5xl bg-[#e5ded4] px-6 py-10 text-center md:px-10">
              <h2 className="text-3xl font-black tracking-[-0.03em] text-[#1a1b1a] md:text-4xl">
                Find your people
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                Join communities in your city and around shared interests.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <Card className="text-left transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-[#c7a46a]" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Saturday Coffee Dads
                    </h3>
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Local community</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Weekly meetups for casual coffee and conversation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-left transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-[#c7a46a]" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Tech & Gaming Dads
                    </h3>
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Interest-based</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Connect with other dads through tech and gaming.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-left transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-[#c7a46a]" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Outdoors & Hiking Dads
                    </h3>
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Activity-based</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join hikes and outdoor meetups with other dads.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <section className="mb-10 -mx-4 bg-[#e5ded4] px-4 py-10 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="mobile-app" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left text-lg">
                  Is this a mobile app?
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground">
                  Not yet. Next Level Dads is currently in early preview, with
                  a web-based platform you can explore on your phone or
                  computer. A full launch in Canada, including a mobile app
                  version, is planned for the future.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left text-lg">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground">
                  Creating a profile and connecting will be free at launch.
                  Some events may have a fee set by hosts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fit" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left text-lg">
                  How do I know if this app is for me?
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground">
                  If you are a father looking to build meaningful connections,
                  find community, or meet other dads with shared interests,
                  Next Level Dads is designed for you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* App actions */}
        <section id="explore-demo" className="mx-auto max-w-3xl pb-12 pt-4 text-center scroll-mt-24">
          <h2 className="text-2xl font-black text-[#1a1b1a] md:text-3xl">Ready to take the next step?</h2>
          <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
            <Button
              asChild
              className="h-12 w-full rounded-full bg-[#c7a46a] text-[#1a1b1a] hover:bg-[#bb955d]"
              onClick={() => {
                trackButtonClick('View Preview')
              }}
            >
              <a
                href="https://next-level-dads-app.vercel.app/"
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
