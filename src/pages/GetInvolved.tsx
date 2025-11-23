import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, DollarSign, Calendar } from "lucide-react";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Heart,
      title: "Volunteer",
      description:
        "Help us build a welcoming community for dads. Volunteer in outreach, design, events, operations, or research, either remotely or in person. Roles are flexible and designed to fit your schedule.",
      action: "Volunteer Application",
      link: "https://forms.google.com/volunteer",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description:
        "Are you an organization that supports dads or parents? Partner with Next Level Dads to reach more fathers, share resources, and create more opportunities for connection.",
      action: "Partnership Inquiry",
      link: "https://forms.google.com/partner",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: DollarSign,
      title: "Support Our Mission",
      description:
        "Help us reach more dads across Canada so they can find community and support. You can sponsor outreach, help cover app costs, or contribute in-kind support such as printing, venues, snacks, or childcare.",
      action: "Make a Contribution",
      link: "https://forms.google.com/donate",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Calendar,
      title: "Host an Event",
      description:
        "Use the Next Level Dads app to host a group chat, virtual meetup, or local gathering for fathers. We will work with you to set up the event and make it easy for dads to join and connect.",
      action: "Event Form",
      link: "https://forms.google.com/event",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-muted-foreground">
            There are many ways to support our mission of helping fathers feel connected, supported, and seen. Choose the opportunity that is right for you.
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
                  variant="default"
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
                  Every hour volunteered, every connection formed, every dollar contributed and every event hosted helps us reach more fathers and build a stronger community of support.
                </p>
                <p>
                  Whether you have time, skills, resources, or ideas to share, there is a meaningful way for you to get involved. Together, we are creating a future where every dad has the connection and encouragement he needs to thrive.
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
                Join Our Team and Help Shape the Journey
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
