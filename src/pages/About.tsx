import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Home } from "lucide-react";
import { Link } from "react-router-dom";
import fatherSonImage from "@/assets/father-son.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Next Level Dads</h1>
          <p className="text-xl text-muted-foreground">
            Empowering fathers through community, connection, and continuous growth.
          </p>
        </div>

        {/* Photo and Story */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-2/5 flex-shrink-0 mx-auto lg:mx-0">
                  <img 
                    src={fatherSonImage} 
                    alt="Priya, founder of Next Level Dads"
                    className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto lg:max-w-none"
                  />
                </div>
                <div className="flex-1 space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    Hi, I'm Priya, the founder of Next Level Dads. I was raised by a single father who has been an incredible role model, doing everything he could to support me and my brother. Through many conversations with him, I began to understand the quiet challenges fathers face, especially when it comes to building connections, finding support, and navigating fatherhood without a strong community.
                  </p>
                  <p>
                    As I spoke to more dads, I noticed something powerful. While fatherhood comes with deep commitment and responsibility, many fathers don't always feel seen, supported, or connected to others who truly understand. They wanted encouragement, community, and real conversations, but there were very few places where they could find it.
                  </p>
                </div>
              </div>
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  That is what inspired Next Level Dads.
                </p>
                <p>
                  We are building an app designed to help fathers connect one-on-one, share experiences, and build meaningful friendships. By making it easier for dads to meet, talk, and support each other, we hope to help dads feel valued, empowered, and part of a genuine community.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connection Matters</h3>
                <p className="text-muted-foreground">
                  We believe every dad deserves spaces where real friendships can grow. Genuine connection is at the heart of everything we build.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-secondary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community with Purpose</h3>
                <p className="text-muted-foreground">
                  Behind every feature is a simple goal: help dads feel seen, supported, and understood through meaningful conversations and shared experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Belonging for Every Dad</h3>
                <p className="text-muted-foreground">
                  When fathers feel valued and connected, families and communities become stronger. Our mission is to make sure no dad has to feel alone in his journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission & Team */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Join Our Mission</h2>
          <Card className="border-2">
            <CardContent className="pt-10 pb-10">
              <div className="text-center space-y-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Next Level Dads is built on the belief that fatherhood should not be experienced alone. We are creating a place where dads can feel seen, connect with others, and build meaningful relationships.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We are looking for people who believe in the power of connection, whether you are a father, supporter, community leader, or someone passionate about helping dads feel valued and understood. If you would like to get involved, test the app, or collaborate, we would love to hear from you.
                </p>
                <div className="pt-2">
                  <Button asChild size="lg" className="text-base px-8 py-6">
                    <Link to="/get-involved">Learn More</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
