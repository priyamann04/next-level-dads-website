import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Users, 
  MessageCircle, 
  Calendar,
  Shield,
  Lock,
  CreditCard,
  AlertCircle,
  MapPin,
  QrCode
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                  Join communities and find community.
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  A simple way for dads to connect — one genuine friendship at a time.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                  Meet local dads by life stage and shared interests. Join communities, chat one-to-one, and attend events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <Button asChild size="lg" className="text-lg group">
                    <a href="https://forms.gle/beta-signup" target="_blank" rel="noopener noreferrer">
                      Get the App (Beta)
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg">
                    <a href="https://forms.gle/mailing-list" target="_blank" rel="noopener noreferrer">
                      Join the Mailing List
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* QR Code Block */}
              <div className="flex justify-center md:justify-end">
                <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <QrCode className="w-32 h-32 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-2">Scan to join the beta</p>
                    <p className="text-xs text-muted-foreground">iOS & Android</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">One-on-one connections</h3>
                  <p className="text-muted-foreground">
                    Match with dads by fatherhood stage and interests — from newborn to teens and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Communities & group chats</h3>
                  <p className="text-muted-foreground">
                    Join communities in your city and around shared interests, then hop into group chats to plan meetups.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Events (with easy checkout)</h3>
                  <p className="text-muted-foreground">
                    Discover local dad-led or partner-hosted events and pay securely in-app. Instant confirmation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Create your profile</h3>
                <p className="text-muted-foreground">
                  Choose your city & province, fatherhood stage, interests, and a short bio.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect & chat</h3>
                <p className="text-muted-foreground">
                  See compatible matches and start a one-to-one conversation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Join communities & events</h3>
                <p className="text-muted-foreground">
                  Browse groups, jump into chats, and register for events with simple, secure checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Find your people</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join communities in your city and around shared interests
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Saturday Coffee Dads</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>Local community</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Weekly meetups for casual coffee and conversation
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tech & Gaming Dads</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>Interest-based</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Connect over tech, gaming, and digital parenting
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Outdoors & Hiking Dads</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>Activity-based</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Explore nature together with your kids
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Privacy Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for trust</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Report & block tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Easy-to-use safety features to protect your experience
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community guidelines</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear standards that keep our community respectful
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure payments (Stripe)</h3>
                  <p className="text-sm text-muted-foreground">
                    Bank-level encryption for all event payments
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">We don't sell your data</h3>
                  <p className="text-sm text-muted-foreground">
                    Your privacy is protected — always
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="flex gap-4 justify-center text-sm">
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-primary hover:underline">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Is this a mobile app?</h3>
                  <p className="text-muted-foreground">
                    Yes — iOS and Android (beta). The website is a simple landing page for info and sign-ups.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">How much does it cost?</h3>
                  <p className="text-muted-foreground">
                    Creating a profile and connecting is free. Some events may have a fee set by hosts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Who runs Next Level Dads?</h3>
                  <p className="text-muted-foreground">
                    A Canada-based social enterprise focused on empowering fathers and strengthening families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Be first to try the app
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Join the beta and help us build the future of dad connections
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="text-lg bg-background text-foreground hover:bg-background/90"
                  >
                    <a href="https://forms.gle/beta-signup" target="_blank" rel="noopener noreferrer">
                      Join the Beta
                    </a>
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

              {/* QR Code Repeat */}
              <div className="flex justify-center md:justify-end">
                <Card className="p-6 text-center bg-background">
                  <CardContent className="p-0">
                    <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <QrCode className="w-32 h-32 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-2">Scan to join the beta</p>
                    <p className="text-xs text-muted-foreground">iOS & Android</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;