import { Button } from '@/components/ui/button'
import homeScreen from '@/assets/NLD-Home-Image.png'
import discoverScreen from '@/assets/discover-dads.png'
import discussionScreen from '@/assets/discussion-threads.png'
import logo from '@/assets/logo-transparent.png'
import PhonePreview from '@/components/PhonePreview'
import HomeDemo from '@/components/HomeDemo'
import './Home.css'

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f1ed] px-4 py-8 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-6 h-[22rem] w-[22rem] rounded-full bg-[#c7a46a]/40 blur-3xl" />
        <div className="absolute right-4 top-14 h-[28rem] w-[28rem] rounded-full bg-[#c6a185]/35 blur-3xl" />
        <div className="absolute bottom-[-3rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#1a1b1a]/10 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[75vh] max-w-[1400px] items-center justify-center py-6 md:py-10">
        <div className="nld-home-hero-grid relative mx-auto w-full">
          <div className="nld-home-hero-copy flex min-w-0 flex-col items-start justify-center">
            {/* Crop the logo's transparent margins while preserving the original artwork. */}
            <svg
              viewBox="73 108 448 237"
              role="img"
              aria-label="Next Level Dads"
              className="nld-home-hero-logo block"
            >
              <image
                href={logo}
                width="624"
                height="468"
              />
            </svg>

            <h1 className="nld-home-hero-headline mt-3 text-left font-semibold leading-[1.12] tracking-[-0.04em] text-[#1a1b1a]">
              <span className="block">Empowering fathers.</span>
              <span className="block">Building community.</span>
            </h1>

            <Button
              asChild
              size="lg"
              className="mt-6 h-16 rounded-full bg-[#c7a46a] px-11 text-lg font-semibold text-[#1a1b1a] shadow-[0_6px_18px_-8px_rgba(139,104,48,0.4)] transition-colors hover:bg-[#bb955d] lg:text-xl"
            >
              <a
                href="https://app.nextleveldads.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the app!
              </a>
            </Button>
          </div>

          <div className="nld-home-phones">
            <div className="nld-home-phone nld-home-phone-discover">
              <PhonePreview
                src={discoverScreen}
                alt="Discover dads on the Next Level Dads app"
                viewBox="735 351 768 1556"
              />
            </div>
            <div className="nld-home-phone nld-home-phone-discussion">
              <PhonePreview
                src={discussionScreen}
                alt="Discussion threads in the Next Level Dads app"
                viewBox="695 302 768 1556"
              />
            </div>
            <div className="nld-home-phone nld-home-phone-main">
              <PhonePreview
                src={homeScreen}
                alt="Next Level Dads app home screen with community discussions"
                viewBox="732 264 768 1556"
              />
            </div>
          </div>
        </div>
      </section>
      <HomeDemo />
    </div>
  )
}

export default Home
