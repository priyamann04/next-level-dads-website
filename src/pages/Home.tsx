import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Next Level Dads
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Empowering fathers and strengthening families through connection, 
              conversation, and community. Join us in creating lasting bonds and 
              meaningful experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button asChild size="lg" className="text-lg group">
                <Link to="/get-involved">
                  Join the Community
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Next Level Dads is dedicated to helping fathers grow and build
              stronger connections with their children. We provide support,
              guidance, and opportunities for dads to develop confidence, learn
              practical parenting skills, and connect with peers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connection</h3>
                <p className="text-muted-foreground">
                  Meet and connect with other dads, share experiences, and build
                  lasting friendships in a supportive community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resources</h3>
                <p className="text-muted-foreground">
                  Access curated parenting materials, mental health resources,
                  and practical tools to enhance your parenting journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth</h3>
                <p className="text-muted-foreground">
                  Develop confidence, learn new skills, and strengthen bonds with
                  your children through guided activities and mentorship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Be Part of the Movement
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Whether you're a father looking for support or wanting to
              make a difference in the lives of dads and families,
              there's a place for you here.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/get-involved">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Building Community Together
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  100+
                </div>
                <div className="text-muted-foreground">Dads Connected</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Events Hosted</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground">Community Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
