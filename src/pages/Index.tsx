import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Users, Shield, Zap, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { useAuth } from "@/components/auth/AuthProvider";

const Index = () => {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Save Together,
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Grow Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join decentralized savings circles. Simple, secure, transparent.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/dashboard" className="flex items-center">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <>
                <AuthDialog>
                  <Button size="lg" className="text-lg px-8 py-6" disabled={loading}>
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign In / Sign Up
                  </Button>
                </AuthDialog>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </>
            )}
          </div>
          
          {/* Simple Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16">
            <div className="text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Secure</h3>
              <p className="text-muted-foreground text-sm">Blockchain protected</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Social</h3>
              <p className="text-muted-foreground text-sm">Save with friends</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Simple</h3>
              <p className="text-muted-foreground text-sm">Easy to use</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;