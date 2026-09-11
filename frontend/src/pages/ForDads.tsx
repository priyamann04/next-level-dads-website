import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForDads = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f1ed] px-4 py-8 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-6 h-[22rem] w-[22rem] rounded-full bg-[#c7a46a]/40 blur-3xl" />
        <div className="absolute right-4 top-14 h-[28rem] w-[28rem] rounded-full bg-[#d9c7a4]/45 blur-3xl" />
        <div className="absolute bottom-[-3rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#1a1b1a]/10 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex w-full max-w-xl flex-col items-start justify-center">
            <div className="mb-2 flex flex-col items-start leading-none">
              <div className="select-none text-[3.1rem] font-black tracking-[-0.08em] text-[#c7a46a] sm:text-[4rem] md:text-[5.2rem]">
                NEXT
              </div>
              <div className="rounded-md bg-[#c7a46a] px-3 py-2 text-[#1a1b1a] shadow-sm sm:px-4 md:px-5">
                <div className="select-none text-[1.8rem] font-black tracking-[-0.08em] sm:text-[2.2rem] md:text-[3rem]">
                  LEVEL DADS
                </div>
              </div>
            </div>

            <h1 className="mt-7 text-3xl font-black tracking-[-0.04em] text-[#1a1b1a] md:text-4xl">
              Host an event.
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#1a1b1a]/75 md:text-xl">
              Host a meetup or local gathering for fathers. Submit an event
              request and we&apos;ll help get it set up and shared with the Next
              Level Dads community.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 h-12 rounded-full bg-[#c7a46a] px-7 text-base font-semibold text-[#1a1b1a] shadow-none hover:bg-[#bb955d]"
            >
              <a
                href="https://forms.gle/3hjzXi1RGPG1deAY7"
                target="_blank"
                rel="noreferrer"
              >
                Event Form
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex w-full max-w-xl items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85"
              alt="Food cooking on a BBQ grill"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_24px_40px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForDads;
