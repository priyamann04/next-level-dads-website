import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Home } from "lucide-react";
import { Link } from "react-router-dom";
import fatherSonImage from "@/assets/father-son.jpg";
import teamImage from "@/assets/next-level-dads-team.png";

const FadeInImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(image);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`${className} transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
    />
  );
};

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f1ed]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-6 h-[22rem] w-[22rem] rounded-full bg-[#c7a46a]/40 blur-3xl" />
        <div className="absolute right-4 top-14 h-[28rem] w-[28rem] rounded-full bg-[#d9c7a4]/45 blur-3xl" />
        <div className="absolute left-1/4 top-[28%] h-[20rem] w-[20rem] rounded-full bg-[#c7a46a]/25 blur-3xl" />
        <div className="absolute -right-20 top-[42%] h-[24rem] w-[24rem] rounded-full bg-[#d9c7a4]/35 blur-3xl" />
        <div className="absolute -left-20 top-[62%] h-[26rem] w-[26rem] rounded-full bg-[#c7a46a]/20 blur-3xl" />
        <div className="absolute right-1/4 top-[78%] h-[22rem] w-[22rem] rounded-full bg-[#d9c7a4]/30 blur-3xl" />
        <div className="absolute bottom-[-3rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#1a1b1a]/10 blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative z-10 bg-[#0f172a] py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-[1.6rem] font-black tracking-[-0.03em] text-white md:text-[2.3rem] lg:text-[2.8rem]">
              <span className="text-white">About </span>
              <span className="text-[#f5d7a1]">Next Level Dads</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="relative z-10 container mx-auto px-4">

        {/* Mission Section */}
        <section id="our-mission" className="scroll-mt-24 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 text-center text-3xl font-black tracking-[-0.03em] text-[#1a1b1a] md:text-4xl">
                <span className="inline-block rounded-md bg-[#c7a46a] px-3 py-2 text-[#1a1b1a]">
                  Our Mission
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Next Level Dads is an organization dedicated to helping fathers
                build genuine, lasting connections. Our mission
                is to make it easier for dads to meet and support one another
                through shared experiences and meaningful conversation. We
                believe every dad deserves community and a sense of belonging.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-0 mt-0">
          <h3 className="mb-5 text-center text-2xl font-black tracking-[-0.03em] text-[#1a1b1a]">
            Our Values
          </h3>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">

            {/* Connection */}
            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-black tracking-[-0.03em] text-[#1a1b1a]">
                  Connection
                </h3>

                <p className="text-muted-foreground">
                  We create spaces where dads can foster real, 1:1 friendships.
                </p>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="text-center border-2 hover:border-secondary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>

                <h3 className="mb-3 text-xl font-black tracking-[-0.03em] text-[#1a1b1a]">
                  Community
                </h3>

                <p className="text-muted-foreground">
                  We host in-person and online groups so fathers can find one
                  another through shared interests.
                </p>
              </CardContent>
            </Card>

            {/* Belonging */}
            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-black tracking-[-0.03em] text-[#1a1b1a]">
                  Belonging
                </h3>

                <p className="text-muted-foreground">
                  When fathers feel valued and connected, families and
                  communities become stronger. Our mission is to make sure no
                  dad has to feel alone on his journey.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Who We Are Section */}
        <section id="our-story" className="scroll-mt-24 mb-8 mt-12">
          <h2 className="mb-8 text-center text-3xl font-black tracking-[-0.03em] text-[#1a1b1a] md:text-4xl">
            <span className="inline-block rounded-md bg-[#c7a46a] px-3 py-2 text-[#1a1b1a]">
              Our Story
            </span>
          </h2>
        </section>

        {/* Photo and Story */}
        <section className="relative mx-auto mb-16 w-full max-w-6xl">
          <div className="relative z-10">
            <Card className="w-full border-2">
              <CardContent className="space-y-8 pt-8">

                <div className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {/* Photo */}
                  <FadeInImage
                    src={fatherSonImage}
                    alt="Priya, founder of Next Level Dads"
                    className="mx-auto mb-4 h-auto w-full max-w-md rounded-lg shadow-lg lg:float-left lg:mr-8 lg:mx-0 lg:w-[38%] lg:max-w-none"
                  />

                  {/* Story */}
                  <div className="space-y-4">
                    <p>
                      Hi, I’m Priya! I’m the founder of Next Level Dads.
                    </p>

                    <p>
                      I was raised by a single father, and my dad has always
                      been one of the most important people in my life. We are
                      incredibly close, and growing up, I saw just how much he
                      showed up for my brother and me.
                    </p>

                  <p>
                    As I got older, I became more curious about the support
                    that exists for fathers. I also grew interested in
                    entrepreneurship, and wanted to explore whether I could
                    build a resource of my own. At the University of Toronto,
                    I joined an entrepreneurial club called Enactus UTSG,
                    where I received business training on how to ask better
                    questions, and develop people-first solutions. I began
                    outreach:
                  </p>

                  <p>
                    I spoke with dads who felt like their friendships had
                    changed after having children. One father told me about
                    being the first person in his friend group to become a dad
                    and how difficult it could be to relate to people who were
                    at a different stage in life. I also spoke with people
                    working directly with fathers and learned more about the
                    gaps that still exist in the support available to dads.
                  </p>

                  <p>
                    Enactus has continued to be an important part of the
                    journey. It gave me support early on as I started reaching
                    out, learning from fathers, and figuring out where I
                    wanted to take the idea. It also gave me access to a
                    community where I could start building a team around
                    something I really believed in.
                  </p>

                  <p>
                    Through Enactus and the broader University of Toronto
                    community, I met other students who believed in what I was
                    building and wanted to help bring it to life. Since then,
                    Next Level Dads has grown into a team of UofT students
                    working together to build the platform and the community
                    around it.
                  </p>

                  <p>
                    Through all of those conversations, I kept thinking about
                    connection. There are resources out there for fathers, and
                    those are important, but there was still a need for more
                    opportunities to actually meet other dads who understand
                    what this part of life can look like; whether that’s a close
                    friend, a mentor figure, or just someone to chat and share
                    experiences with.
                  </p>

                  <p>
                    I built Next Level Dads with this value in mind. I’m
                    creating an app that helps fathers connect with other dads
                    in similar stages of life and build real friendships. Some
                    of those connections might stay online, while others might
                    lead to meeting in person. I wanted to create something
                    that could fit into the reality of fatherhood, especially
                    when time can be such a big barrier.
                  </p>

                  <p>
                    The mission behind Next Level Dads is something I care
                    deeply about. I think about my own dad and how much he gave
                    to us, and I also think about the kind of support I would
                    want the father of my own children to have one day. Dads
                    deserve to have people in their corner too, and I hope Next
                    Level Dads can help make that a reality.
                  </p>
                </div>
                </div>

              </CardContent>
            </Card>

            <div className="relative h-20" aria-hidden="true">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#c7a46a]" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#c7a46a] bg-[#f4f1ed]" />
              <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#c7a46a] bg-[#f4f1ed]" />
            </div>

            <Card className="w-full border-2">
              <CardContent className="space-y-4 pt-8 text-[0.95rem] leading-relaxed text-muted-foreground">
                <h3 className="mb-5 text-center text-2xl font-black tracking-[-0.03em] text-[#1a1b1a]">
                  From an idea to a team
                </h3>

                <FadeInImage
                  src={teamImage}
                  alt="Next Level Dads team"
                  className="mx-auto mb-6 h-auto w-full max-w-lg rounded-lg shadow-lg"
                />

                <p>
                  Through Enactus and the broader University of Toronto community, I met other students who believed in what I was building and wanted to help bring it to life. Since then, Next Level Dads has grown into a team of UofT students working together to build the platform and the community around it.
                  </p>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
