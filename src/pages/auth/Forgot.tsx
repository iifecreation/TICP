import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Shield, Mail } from "lucide-react";

export default function Forgot() {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const { toast } = useToast();
	const navigate = useNavigate();

	const handleForgot = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate sending reset email
		await new Promise(resolve => setTimeout(resolve, 2000));
		toast({
			title: "Reset link sent!",
			description: "Check your email for password reset instructions.",
		});
		setIsLoading(false);
		setTimeout(() => navigate("/login"), 1500);
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
							<h1 className="text-4xl font-bold">Forgot Password</h1>
							<p className="text-xl opacity-90">
								Enter your email to receive a password reset link.
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Right Side - Forgot Password Form */}
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
							<CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
							<CardDescription className="text-center">
								Enter your email address and we'll send you a reset link.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleForgot} className="space-y-6">
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
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</div>
								</div>
								<Button
									type="submit"
									className="w-full bg-gradient-primary"
									size="lg"
									disabled={isLoading}
								>
									{isLoading ? "Sending..." : "Send Reset Link"}
								</Button>
								<div className="text-center">
									<Link to="/login" className="text-primary hover:underline font-semibold">
										Back to Login
									</Link>
								</div>
							</form>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
}
