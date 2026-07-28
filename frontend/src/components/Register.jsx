import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../api.js';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import { Label } from './ui/label.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx';
import { Eye, EyeOff, User, Mail, Lock, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import AuthLayout from './auth/AuthLayout.jsx';
import AuthFooter from './auth/AuthFooter.jsx';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return false;
    }

    // Check if email is already registered
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (registeredUsers.some(user => user.email === formData.email)) {
      toast({
        title: "Email Already Exists",
        description: "This email is already registered. Please login instead.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Make POST request to backend
      const { data } = await api.post('/api/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });

      // Show success toast
      toast({
        title: "Registration Successful",
        description: data.message || "Your account has been created."
      });

      // Redirect to login page
      navigate('/login');

    } catch (error) {
      // Show error toast
      toast({
        title: "Registration Failed",
        description: error.response?.data?.message || error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
        
        {/* Register Card */}
        <Card className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <CardHeader className="text-center items-center">
            <CardTitle className='font-display text-2xl'>Create Account</CardTitle>
            <CardDescription className='font-sans'>Join PlantMitra AI to protect your plants</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              
              {/* Full Name Input */}
              <div>
                <Label htmlFor="fullName"
                 className='font-sans font-medium text-slate-700 dark:text-slate-300'>Full Name</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400
                    dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="font-sans pl-10"
                  />
                </div>
              </div>
              
              {/* Email Input */}
              <div>
                <Label htmlFor="email"
                 className='font-sans font-medium text-slate-700
                 dark:text-slate-300'>Email Address</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="farmer@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-sans pl-10"
                  />
                </div>
              </div>
              
              {/* Password Input */}
              <div>
                <Label htmlFor="password"
                 className='font-sans font-medium text-slate-700
                 dark:text-slate-300'>Password</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="font-sans pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400
                    dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300  transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              {/* Confirm Password Input */}
              <div>
                <Label htmlFor="confirmPassword"
                className="font-sans font-medium text-slate-700 dark:text-slate-300">Confirm Password</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 dark:text-slate-500 group-focus-within:text-green-500 transition-colors" />
                  </div>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="font-sans pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full mt-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
            
            {/* Footer Text */}
            <AuthFooter
             text="Already have an account?"
             link="/login"
             linkText="Sign In" 
            />
            
          </CardContent>
        </Card>
    </AuthLayout>
  );
};

export default Register;