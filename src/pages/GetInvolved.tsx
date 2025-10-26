import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, DollarSign, Calendar } from "lucide-react";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Heart,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers. Help organize events, moderate forums, or contribute your skills to help fathers and families thrive.",
      action: "Volunteer Application",
      link: "https://forms.google.com/volunteer",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description:
        "Are you an organization that supports families? Partner with Next Level Dads to expand your reach and create greater impact together.",
      action: "Partnership Inquiry",
      link: "https://forms.google.com/partner",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: DollarSign,
      title: "Support Our Mission",
      description:
        "Your financial support helps us create resources, host events, and build technology that serves fathers and families in need.",
      action: "Make a Contribution",
      link: "https://forms.google.com/donate",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description:
        "Join our Dad + Me events and community gatherings. Connect with other fathers, participate in bonding activities, and build lasting relationships.",
      action: "View Events",
      link: "/contact",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-muted-foreground">
            There are many ways to support our mission of empowering fathers and
            strengthening families. Find the opportunity that's right for you.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {opportunities.map((opportunity, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${opportunity.bgColor} flex items-center justify-center mb-4`}>
                  <opportunity.icon className={`h-6 w-6 ${opportunity.color}`} />
                </div>
                <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {opportunity.description}
                </p>
                <Button
                  asChild
                  variant={index % 2 === 0 ? "default" : "secondary"}
                  className="w-full"
                >
                  <a
                    href={opportunity.link}
                    target={opportunity.link.startsWith("http") ? "_blank" : undefined}
                    rel={opportunity.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {opportunity.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Impact */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Your Impact Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every hour volunteered, every dollar contributed, and every
                  partnership formed helps us reach more fathers and strengthen
                  more families. Your involvement creates ripples of positive
                  change throughout our community.
                </p>
                <p>
                  Whether you have time, resources, or expertise to share, there's
                  a meaningful way for you to contribute to our mission. Together,
                  we're building a future where every father has the support they
                  need to thrive.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Student Opportunities */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Join Our Team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center leading-relaxed">
                We're always looking for passionate individuals to join our mission
                of empowering fathers and strengthening families.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Roles Available:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Marketing & Design</li>
                    <li>• Operations & Events</li>
                    <li>• Outreach & Community Engagement</li>
                    <li>• Research & Program Development</li>
                    <li>• Software Developer</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">What You'll Gain:</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Leadership experience</li>
                    <li>• Social entrepreneurship skills</li>
                    <li>• Professional network</li>
                    <li>• Portfolio projects</li>
                    <li>• Making real impact</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 text-center">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a
                    href="https://forms.google.com/student-team"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply to Join Our Team
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
