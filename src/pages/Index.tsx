import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Shield, Users, Zap, TrendingUp, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-savings-circle.jpg";

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
              <img 
                src={heroImage} 
                alt="Savings Circle Community" 
                className="rounded-lg w-full max-w-md"
              />
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All transactions are secured by smart contracts, ensuring complete transparency and eliminating the need for a central authority.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Trusted Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join verified groups or create your own with friends, family, or colleagues. Build financial trust through shared goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Instant Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatic distributions when it's your turn. No delays, no manual processing. Smart contracts handle everything seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Growing Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pool funds can earn yield through DeFi protocols while waiting for distribution, maximizing value for all members.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Global Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with savers worldwide. No geographical limitations, supporting multiple currencies and payment methods.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your financial data remains private. Only circle members can see group activities, with optional anonymity features.
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