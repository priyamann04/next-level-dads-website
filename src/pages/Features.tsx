import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Calendar, MapPin } from "lucide-react";
const Features = () => {
  return <div className="min-h-screen py-20">
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
              <p className="text-muted-foreground">Discover dad-led and partner-hosted events in your community, or request one by filling out our event form to have it posted on the Next Level Dads platform.</p>
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

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Is this a mobile app?</h3>
                  <p className="text-muted-foreground">Not yet. Next Level Dads is currently in early preview, with a web-based platform you can explore on your phone or computer. A full launch in Canada, including a mobile app version, is planned for the future.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">How much does it cost?</h3>
                  <p className="text-muted-foreground">Creating a profile and connecting will be free at launch. Some events may have a fee set by hosts.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">What is Next Level Dads?</h3>
                  <p className="text-muted-foreground">Next Level Dads is a Canadian-based social enterprise focused on helping fathers connect, build friendships, and find community. The platform is currently in early preview, with a demo available as we prepare for a broader launch in Canada.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Explore the Demo Section */}
        <section id="explore-demo" className="max-w-5xl mx-auto scroll-mt-24">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Explore the Demo
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Get a preview of what the Next Level Dads app could look like. Watch the demo, explore the experience, and help shape what we build next.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* View Demo Card */}
              <Card className="bg-background/95 backdrop-blur h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">View Demo</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    Watch a short walkthrough of the demo experience.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://drive.google.com/file/d/1YG2DGozy8nuG6PCLilz1zS9WwfcTYrqX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Watch Demo
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Mailing List Card */}
              <Card className="bg-background/95 backdrop-blur h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">Interest Form</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">Interested in beta testing or future updates? Let us know which features excite you most.</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://forms.gle/tZJCe1926HCCtpjKA" target="_blank" rel="noopener noreferrer" className="bg-primary">Share Your Interest</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Feedback Card */}
              <Card className="bg-background/95 backdrop-blur h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">Tried the Demo?</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    Share your thoughts by filling out our feedback form.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://forms.gle/feedback" target="_blank" rel="noopener noreferrer" className="bg-primary">
                      Give Feedback
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Raffle Banner */}
            <div className="backdrop-blur rounded-xl p-6 text-center bg-destructive-foreground">
              <p className="text-primary-foreground/80 text-sm">
                As a thank-you for participating, everyone who completes the feedback form will be entered into a raffle to win a <span className="font-medium">$25 Amazon gift card</span>. The winner will be selected randomly and contacted by email.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>;
};
export default Features;