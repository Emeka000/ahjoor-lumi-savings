import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateCircleDialog } from "@/components/CreateCircleDialog";
import { 
  Plus, 
  Users, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  Wallet
} from "lucide-react";
import dashboardBg from "@/assets/dashboard-bg.jpg";

const Dashboard = () => {
  // Mock data for demonstration
  const userCircles = [
    {
      id: 1,
      name: "Family Savings Circle",
      members: 6,
      contribution: "$500",
      frequency: "Monthly",
      nextPayout: "Sarah Johnson",
      progress: 67,
      status: "active",
      yourTurn: 3,
      totalRounds: 6
    },
    {
      id: 2,
      name: "Work Colleagues Fund",
      members: 8,
      contribution: "$200",
      frequency: "Bi-weekly",
      nextPayout: "You!",
      progress: 25,
      status: "your-turn",
      yourTurn: 2,
      totalRounds: 8
    },
    {
      id: 3,
      name: "Investment Club",
      members: 4,
      contribution: "$1,000",
      frequency: "Quarterly",
      nextPayout: "Mike Chen",
      progress: 100,
      status: "completed",
      yourTurn: 2,
      totalRounds: 4
    }
  ];

  const stats = {
    totalSaved: "$8,400",
    activePools: 3,
    nextPayout: "$1,600",
    completedCycles: 5
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Connect Wallet Button - Top Right Corner */}
      <div className="fixed top-20 right-4 z-40">
        <Button className="bg-gradient-to-r from-accent to-warning hover:opacity-90 transition-opacity shadow-lg">
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </Button>
      </div>
      
      <div className="pt-16">
        {/* Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${dashboardBg})` }}
          />
          <div className="relative container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
                <p className="text-muted-foreground">
                  Manage your savings circles and track your progress toward financial goals.
                </p>
              </div>
              <CreateCircleDialog>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Circle
                </Button>
              </CreateCircleDialog>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-success" />
                  <span className="text-2xl font-bold text-success">{stats.totalSaved}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Pools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">{stats.activePools}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Next Payout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-accent">{stats.nextPayout}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Completed Cycles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-2xl font-bold">{stats.completedCycles}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="circles" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="circles">My Circles</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="circles" className="space-y-6">
              <div className="grid gap-6">
                {userCircles.map((circle) => (
                  <Card key={circle.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`h-3 w-3 rounded-full ${
                            circle.status === 'active' ? 'bg-success' :
                            circle.status === 'your-turn' ? 'bg-accent' :
                            'bg-muted-foreground'
                          }`} />
                          <CardTitle className="text-lg">{circle.name}</CardTitle>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          {circle.status === 'your-turn' && (
                            <div className="flex items-center space-x-1 text-accent font-medium">
                              <AlertCircle className="h-4 w-4" />
                              <span>Your Turn!</span>
                            </div>
                          )}
                          {circle.status === 'completed' && (
                            <div className="flex items-center space-x-1 text-success">
                              <CheckCircle className="h-4 w-4" />
                              <span>Completed</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Members</p>
                          <p className="font-medium flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {circle.members}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Contribution</p>
                          <p className="font-medium flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {circle.contribution}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Frequency</p>
                          <p className="font-medium flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {circle.frequency}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Next Recipient</p>
                          <p className="font-medium flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {circle.nextPayout}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">
                            Round {circle.yourTurn} of {circle.totalRounds}
                          </span>
                        </div>
                        <Progress value={circle.progress} className="h-2" />
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {circle.status === 'your-turn' && (
                          <Button size="sm" className="bg-gradient-to-r from-accent to-warning hover:opacity-90">
                            Collect Payout
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <div className="flex-1">
                        <p className="font-medium">Payment received from Family Savings Circle</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                      <span className="font-bold text-success">+$500</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <p className="font-medium">Contributed to Work Colleagues Fund</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                      <span className="font-bold text-primary">-$200</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <Users className="h-5 w-5 text-accent" />
                      <div className="flex-1">
                        <p className="font-medium">New member joined Investment Club</p>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Settings panel coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;