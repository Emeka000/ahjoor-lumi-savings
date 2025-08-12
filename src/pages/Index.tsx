import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Shield, Users, Zap, TrendingUp, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-simple-circle.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Decentralized Savings Circles
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Join trusted savings groups where members contribute periodically and take turns collecting the lump sum. 
                  Powered by blockchain for complete transparency and security.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/dashboard" className="flex items-center">
                    Start Your Circle
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Simple Savings Circle Community" 
                  className="rounded-2xl w-full max-w-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/5 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose AhjoorCircle?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Traditional savings circles meet modern blockchain technology for unprecedented security and transparency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Secure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Blockchain-powered security ensures your funds are always protected.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Join trusted groups and build wealth together with friends.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Instant</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Automatic payouts when it's your turn. No waiting, no delays.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Growing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Earn yields while your funds wait for distribution.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Global</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Connect with savers worldwide, no geographical limits.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Private</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Your data stays private with optional anonymity features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Start Saving Together?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users already building wealth through decentralized savings circles. 
              Your financial future starts with a single click.
            </p>
            <Button size="lg" asChild>
              <Link to="/dashboard" className="flex items-center">
                Launch Your Circle Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;