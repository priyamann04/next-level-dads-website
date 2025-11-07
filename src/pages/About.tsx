import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";
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
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <img 
                    src={fatherSonImage} 
                    alt="Father and son"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Next Level Dads was created to empower fathers and strengthen families through 
                    genuine connection. Our goal is to reduce isolation among dads and build supportive 
                    communities across Canada.
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We recognized that many fathers experience isolation and lack opportunities to 
                  build meaningful friendships with other dads. Through our platform, we're changing 
                  that by creating spaces where fathers can connect, share experiences, and support 
                  one another.
                </p>
                <p>
                  What started as a vision has grown into a movement. We're not just building an 
                  app—we're building a community where every dad can find friendship, belonging, 
                  and the support they need to thrive.
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

        {/* Mission & Team */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Join Our Mission</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Next Level Dads is dedicated to creating meaningful connections and
            providing valuable resources for fathers everywhere.
          </p>
          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  We're building a platform that truly serves fathers and families,
                  bringing together resources, community support, and opportunities
                  for growth and connection.
                </p>
                <p className="text-muted-foreground">
                  We're always looking for passionate volunteers and supporters to
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
