import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BookOpen, Target, Users, MapPin, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Community Forum",
      description:
        "Connect with other dads in a safe, supportive space. Share experiences, ask questions, and offer advice. Our moderated forum ensures respectful and meaningful conversations.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description:
        "Access a curated collection of articles, videos, and guides on parenting, mental health, child development, and family wellness. Expert-vetted content you can trust.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Target,
      title: "Goal Tracker",
      description:
        "Set and track family bonding goals and milestones. Plan activities, celebrate achievements, and build lasting memories with your children through guided challenges.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Mentorship Matches",
      description:
        "Connect with experienced dads who can provide guidance and support. Our matching system pairs you with mentors who understand your unique situation and can offer valuable insights.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: MapPin,
      title: "Local Connections",
      description:
        "Discover nearby fatherhood programs, support groups, and family events in your community. Build local connections and find resources right in your neighborhood.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Next Level Dads App
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive platform designed to support fathers at every stage of
            their parenting journey. Coming soon to iOS and Android.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why These Features */}
        <section className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-accent/30 to-background border-2">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Built with Dads in Mind
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every feature in the Next Level Dads app has been carefully
                  designed based on real feedback from fathers. We understand that
                  being a dad is both incredibly rewarding and uniquely challenging.
                </p>
                <p>
                  Whether you're a first-time father navigating new territory, a
                  single dad balancing multiple responsibilities, or an experienced
                  parent looking to deepen your connection with your children, our
                  app provides the tools and community you need to succeed.
                </p>
                <p className="font-semibold text-foreground">
                  Our mission is simple: give fathers the support they deserve and
                  help families thrive together.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Stay Updated on Our Launch
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Be the first to know when the Next Level Dads app is available.
              Join our community today and help shape the future of fatherhood
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">Join Waitlist</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/20 text-primary-foreground hover:bg-background/10"
              >
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
