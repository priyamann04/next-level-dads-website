import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Next Level Dads</h1>
          <p className="text-xl text-muted-foreground">
            A student-led initiative empowering fathers through community,
            connection, and continuous growth.
          </p>
        </div>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="border-2">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Next Level Dads began as a vision to address a critical gap in
                  community support for fathers. Recognizing that fatherhood can be
                  both rewarding and challenging, our founding team at the
                  University of Toronto saw an opportunity to create something
                  meaningful.
                </p>
                <p>
                  As part of <span className="font-semibold text-foreground">Enactus UTSG</span>, 
                  a community of student leaders committed to creating positive impact 
                  through entrepreneurial action, we launched Next Level Dads with a 
                  simple but powerful mission: to empower fathers and strengthen families.
                </p>
                <p>
                  What started as conversations among passionate students has grown
                  into a comprehensive platform designed to provide fathers with the
                  resources, connections, and support they need to thrive. We're
                  building more than just an app—we're building a movement.
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
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in the power of connection and peer support to
                  transform lives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-secondary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Purpose-Driven</h3>
                <p className="text-muted-foreground">
                  Every feature, every event, every resource is designed with
                  fathers' needs in mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive to deliver quality resources and meaningful
                  experiences for every dad.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enactus Connection */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6">Part of Enactus UTSG</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Enactus</span> is 
                an international organization that brings together student, academic, 
                and business leaders committed to using the power of entrepreneurial 
                action to transform lives and shape a better, more sustainable world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At the University of Toronto St. George campus, our Enactus team
                develops innovative projects that create positive social impact.
                Next Level Dads represents our commitment to strengthening families
                and building stronger communities through student-led initiative and
                social entrepreneurship.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Student Leadership Team</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Next Level Dads is powered by a dedicated team of University of Toronto
            students passionate about creating positive social change.
          </p>
          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Our diverse team brings together expertise in business,
                  technology, social work, and design to build a platform that
                  truly serves fathers and families.
                </p>
                <p className="text-muted-foreground">
                  We're always looking for passionate students and volunteers to
                  join our mission. If you're interested in making a difference,
                  we'd love to hear from you.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
