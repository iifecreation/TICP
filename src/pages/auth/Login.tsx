import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Shield, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Login successful!",
      description: "Welcome back to TICP.",
    });
    
    setIsLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Link to="/" className="flex items-center space-x-3">
              <Shield className="h-12 w-12" />
              <div>
                <div className="text-2xl font-bold">TICP</div>
                <div className="text-sm opacity-90">NIIRA 2025 Ready</div>
              </div>
            </Link>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Welcome Back</h1>
              <p className="text-xl opacity-90">
                Continue managing your insurance compliance with NIIRA 2025's most trusted platform.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full opacity-80" />
                <span className="opacity-90">Digital certificate management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full opacity-80" />
                <span className="opacity-90">Automated NAICOM reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full opacity-80" />
                <span className="opacity-90">Real-time compliance monitoring</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Mobile Branding */}
          <div className="lg:hidden text-center">
            <Link to="/" className="inline-flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-left">
                <div className="text-xl font-bold text-primary">TICP</div>
                <div className="text-xs text-muted-foreground">NIIRA 2025</div>
              </div>
            </Link>
          </div>

          <Card className="card-elevated">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your TICP dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-8 w-8"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="text-center">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <Link to="/register" className="text-primary hover:underline font-semibold">
                    Sign up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Demo Accounts */}
          <Card className="border-dashed">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-center">Demo Accounts</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Insurer:</span>
                  <span className="font-mono">insurer@demo.ticp.ng</span>
                </div>
                <div className="flex justify-between">
                  <span>Regulator:</span>
                  <span className="font-mono">regulator@demo.ticp.ng</span>
                </div>
                <div className="flex justify-between">
                  <span>Fleet:</span>
                  <span className="font-mono">fleet@demo.ticp.ng</span>
                </div>
                <div className="text-center text-muted-foreground mt-3">
                  Password: <span className="font-mono">demo123</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}