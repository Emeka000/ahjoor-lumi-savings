import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Users, DollarSign, Calendar, Info } from "lucide-react";

interface CreateCircleDialogProps {
  children: React.ReactNode;
  onCircleCreated?: () => void;
}

interface CircleFormData {
  name: string;
  description: string;
  memberCount: number;
  contributionAmount: number;
  frequency: string;
  currency: string;
}

export const CreateCircleDialog = ({ children, onCircleCreated }: CreateCircleDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<CircleFormData>({
    name: "",
    description: "",
    memberCount: 2,
    contributionAmount: 0,
    frequency: "",
    currency: "USDC"
  });

  const handleInputChange = (field: keyof CircleFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Circle name is required",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.memberCount < 2 || formData.memberCount > 50) {
      toast({
        title: "Error", 
        description: "Member count must be between 2 and 50",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.contributionAmount <= 0) {
      toast({
        title: "Error",
        description: "Contribution amount must be greater than 0",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.frequency) {
      toast({
        title: "Error",
        description: "Payment frequency is required",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would integrate with Supabase to create the circle
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: `"${formData.name}" circle created successfully. Share the invitation link with ${formData.memberCount - 1} members.`,
      });
      
      // Reset form
      setFormData({
        name: "",
        description: "",
        memberCount: 2,
        contributionAmount: 0,
        frequency: "",
        currency: "USDC"
      });
      
      setOpen(false);
      onCircleCreated?.();
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create circle. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPoolAmount = formData.contributionAmount * formData.memberCount;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Create New Savings Circle
          </DialogTitle>
          <DialogDescription>
            Set up a new group savings circle for you and your members to save together using USDC.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Circle Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Circle Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Family Savings Group, Work Colleagues Fund"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Brief description of the circle's purpose..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={3}
            />
          </div>

          {/* Member Count */}
          <div className="space-y-2">
            <Label htmlFor="memberCount">Number of Members *</Label>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <Input
                id="memberCount"
                type="number"
                min="2"
                max="50"
                value={formData.memberCount}
                onChange={(e) => handleInputChange("memberCount", parseInt(e.target.value) || 2)}
                required
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Including yourself (2-50 members)
            </p>
          </div>

          {/* Contribution Amount */}
          <div className="space-y-2">
            <Label htmlFor="contributionAmount">Contribution Amount per Member *</Label>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <Input
                id="contributionAmount"
                type="number"
                min="1"
                step="0.01"
                placeholder="0.00"
                value={formData.contributionAmount || ""}
                onChange={(e) => handleInputChange("contributionAmount", parseFloat(e.target.value) || 0)}
                required
              />
              <Select
                value={formData.currency}
                onValueChange={(value) => handleInputChange("currency", value)}
              >
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USDC">USDC</SelectItem>
                  <SelectItem value="USDT">USDT</SelectItem>
                  <SelectItem value="DAI">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Payment Frequency */}
          <div className="space-y-2">
            <Label htmlFor="frequency">Payment Frequency *</Label>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select
                value={formData.frequency}
                onValueChange={(value) => handleInputChange("frequency", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pool Summary */}
          {formData.contributionAmount > 0 && formData.memberCount > 0 && (
            <div className="rounded-lg bg-muted/50 p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Info className="h-4 w-4 text-primary" />
                Circle Summary
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Pool Size</p>
                  <p className="font-semibold text-primary">
                    {totalPoolAmount.toFixed(2)} {formData.currency}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Payout per Round</p>
                  <p className="font-semibold text-success">
                    {totalPoolAmount.toFixed(2)} {formData.currency}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Your Contribution</p>
                  <p className="font-semibold">
                    {formData.contributionAmount.toFixed(2)} {formData.currency} / {formData.frequency}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Circle Duration</p>
                  <p className="font-semibold">
                    {formData.memberCount} rounds
                  </p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              {isSubmitting ? (
                "Creating..."
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Circle
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};