import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import originalLogo from '@/assets/logo.png'

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f1ed] px-4 py-8 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-6 h-[22rem] w-[22rem] rounded-full bg-[#c7a46a]/40 blur-3xl" />
        <div className="absolute right-4 top-14 h-[28rem] w-[28rem] rounded-full bg-[#d9c7a4]/45 blur-3xl" />
        <div className="absolute bottom-[-3rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#1a1b1a]/10 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
          <div className="flex flex-col items-start justify-center lg:items-start">
            <div className="mb-2 flex flex-col items-start leading-none">
              <div className="relative inline-block">
                <div className="select-none text-[3.1rem] font-black tracking-[-0.08em] text-[#c7a46a] sm:text-[4rem] md:text-[5.2rem] lg:text-[6.8rem]">
                  NEXT
                </div>
              </div>
              <div className="mt-0 rounded-md bg-[#c7a46a] px-3 py-2 text-[#1a1b1a] shadow-sm sm:px-4 md:px-5">
                <div className="select-none text-[1.8rem] font-black tracking-[-0.08em] sm:text-[2.2rem] md:text-[3rem] lg:text-[4rem]">
                  LEVEL DADS
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-1 text-left text-[1.8rem] font-medium leading-[1.05] tracking-[-0.04em] text-[#1a1b1a] md:text-[2.2rem] lg:text-[2.5rem]">
              <p>Empowering fathers.</p>
              <p>Building community.</p>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-6 h-12 rounded-full bg-[#c7a46a] px-7 text-sm font-semibold text-[#1a1b1a] shadow-none transition-opacity hover:bg-[#bb955d] sm:text-base"
            >
              <Link to="/features">Try our app!</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[430px] w-[260px] rounded-[2.2rem] border-[10px] border-[#2d2d2d] bg-white shadow-[0_24px_40px_rgba(0,0,0,0.18)] sm:h-[500px] sm:w-[300px]">
              <div className="absolute left-1/2 top-3 h-2.5 w-16 -translate-x-1/2 rounded-full bg-[#2d2d2d]" />
              <div className="absolute left-1/2 top-8 h-2.5 w-20 -translate-x-1/2 rounded-full bg-[#2d2d2d]/80" />

              <div className="flex h-full flex-col items-center justify-start px-4 pb-5 pt-10">
                <img
                  src={originalLogo}
                  alt="Next Level Dads"
                  className="w-[92%] max-w-[220px] object-contain"
                />

                <div className="mt-7 text-center text-[1rem] font-medium leading-snug text-[#1a1b1a] sm:text-[1.15rem]">
                  <p>Empowering Fathers.</p>
                  <p>Building Community.</p>
                </div>

                <div className="mt-7 flex w-full flex-col gap-3">
                  <button className="h-11 rounded-full bg-[#c7a46a] text-sm font-semibold text-[#1a1b1a] shadow-sm transition-opacity hover:opacity-95">
                    Continue with Email
                  </button>
                  <button className="h-11 rounded-full border border-[#d4d0ca] bg-white text-sm font-medium text-[#1a1b1a] shadow-sm transition-opacity hover:opacity-95">
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
