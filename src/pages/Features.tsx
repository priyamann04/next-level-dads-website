import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Users, 
  Calendar,
  Shield,
  Lock,
  CreditCard,
  AlertCircle,
  MapPin,
  QrCode
} from "lucide-react";

const Features = () => {

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Next Level Dads App
          </h1>
          <p className="text-xl text-muted-foreground">
            A mobile platform designed to help fathers build genuine connections and find community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connections</h3>
              <p className="text-muted-foreground">
                Match with dads based on shared experiences and interests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Communities</h3>
              <p className="text-muted-foreground">
                Join communities across Canada based on your interests. Connect with other dads in each group and get updates when that community hosts new events or meetups.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Events</h3>
              <p className="text-muted-foreground">
                Discover dad led and partner hosted events in your communities. Browse upcoming meetups and sign up.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <section className="mb-20 bg-muted/30 -mx-4 px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Create your profile</h3>
                <p className="text-muted-foreground">
                  Choose your city & province, child age range, interests, etc.
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
                  Explore communities based on your interests and join or host dad-led events and meetups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="mb-20">
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
                    Connect with other dads through tech and gaming.
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
                    Join hikes and outdoor meetups with other dads.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety & Privacy Section */}
        <section className="mb-20 bg-card -mx-4 px-4 py-20">
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
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Is this a mobile app?</h3>
                  <p className="text-muted-foreground">
                    Not yet. Right now, Next Level Dads is a web-based platform you can use on your phone or computer. A mobile app version is planned for the future.
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
                  <h3 className="text-lg font-semibold mb-2">What is Next Level Dads?</h3>
                  <p className="text-muted-foreground">
                    Next Level Dads is a Canadian-based social enterprise focused on helping fathers connect, build friendships, and find community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA with QR Code */}
        <section className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Stay updated on our launch
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Join our mailing list to be the first to know when the app is available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://forms.gle/mailing-list"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-md bg-background text-foreground hover:bg-background/90 transition-colors">
                      Join the Mailing List
                    </button>
                  </a>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center md:justify-end">
                <Card className="p-6 text-center bg-background">
                  <CardContent className="p-0">
                    <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <QrCode className="w-32 h-32 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-2">Scan for updates</p>
                    <p className="text-xs text-muted-foreground">Join the mailing list</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
