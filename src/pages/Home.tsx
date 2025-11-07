import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Next Level Dads
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Connect with fathers to find friendship, community, and belonging. One connection at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button asChild size="lg" className="text-lg">
                <Link to="/features">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <a href="https://forms.gle/mailing-list" target="_blank" rel="noopener noreferrer">
                  Join the Mailing List
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Be first to try the app
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join our mailing list to stay updated on our launch and be part of building the future of dad connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/features">Learn More</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="https://forms.gle/mailing-list" target="_blank" rel="noopener noreferrer">
                  Join the Mailing List
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Building Community Together</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">100+</div>
                <p className="text-lg text-muted-foreground">Dads Connected</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</div>
                <p className="text-lg text-muted-foreground">Events Hosted</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">24/7</div>
                <p className="text-lg text-muted-foreground">Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Next Level Dads is a social enterprise dedicated to helping fathers build genuine, lasting connections. We believe that every dad deserves friendship, community, and a sense of belonging.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is to make it easier for fathers to meet and support one another through shared experiences and meaningful conversation — both online and in person. By fostering real relationships, we aim to reduce isolation, strengthen families, and create a community where dads feel seen, valued, and connected.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Connection</h3>
                  <p className="text-muted-foreground">
                    Meet and connect with other dads, share experiences, and build lasting friendships in a supportive community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Join local and interest-based groups where you can share the journey of fatherhood with others who understand.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Belonging</h3>
                  <p className="text-muted-foreground">
                    Find your place in a welcoming community where every dad is valued and supported on their unique journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;