import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import { Label } from './ui/label.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx';
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import AuthLayout from './auth/AuthLayout.jsx';
import AuthFooter from './auth/AuthFooter.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Check against registered users
    setTimeout(() => {
      if (email && password) {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const user = registeredUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', user.fullName);
        toast({
          title: "Login Successful",
          description: `Welcome back, ${user.fullName}!`,
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please check your credentials or register first.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Missing Information",
          description: "Please enter both email and password.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
      <AuthLayout>

        <Card className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <CardHeader className="text-center items-center">
            <CardTitle className='font-display text-2xl'>Welcome Back</CardTitle>
            <CardDescription className='font-sans'>Sign in to your account to continue</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Email Input */}
              <div>
                <Label htmlFor="email"
                className="font-sans font-medium text-slate-700 dark:text-slate-300">Email Address</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  
                  <Input
                    id="email"
                    type="email"
                    placeholder="farmer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="font-sans pl-10"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label htmlFor="password" className="font-sans font-medium text-slate-700 dark:text-slate-300 mb-0">Password</Label>
                  <Link to="#" className="font-sans text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="font-sans pl-10 pr-10 placeholder:font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-2 font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            
            {/* Footer Text */}
            <AuthFooter
             text="New to PlantMitra AI?"
             link="/register"
             linkText="Create an account"
            />
              
          </CardContent>
        </Card>
    </AuthLayout>
  );
};

export default Login;