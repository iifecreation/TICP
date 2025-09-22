import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  FileText, 
  BarChart3, 
  Truck, 
  AlertTriangle, 
  CheckCircle,
  Users,
  Building,
  Car,
  ArrowRight,
  Zap,
  Lock,
  Globe
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Digital Certificates",
      description: "Secure, verifiable insurance certificates with QR codes, USSD, and SMS verification options.",
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "NAICOM-compliant annual reports generated automatically from your policy data.",
      color: "text-secondary"
    },
    {
      icon: BarChart3,
      title: "Compliance Dashboard",
      description: "Real-time KPIs, compliance tracking, and regulatory reporting in one centralized platform.",
      color: "text-primary"
    },
    {
      icon: Truck,
      title: "Fleet Management",
      description: "Bulk certificate issuance, renewal tracking, and compliance monitoring for large fleets.",
      color: "text-secondary"
    },
    {
      icon: AlertTriangle,
      title: "Fraud Detection",
      description: "Advanced algorithms to detect and flag fraudulent claims and suspicious activities.",
      color: "text-warning"
    },
    {
      icon: CheckCircle,
      title: "Public Verification",
      description: "Allow anyone to verify certificate authenticity through multiple channels.",
      color: "text-success"
    }
  ];

  const users = [
    {
      icon: Building,
      title: "Insurance Companies",
      description: "Streamline operations and ensure NIIRA 2025 compliance",
      userCount: "50+ Insurers"
    },
    {
      icon: Users,
      title: "Government Agencies",
      description: "NAICOM, VIO, FRSC, and state transport authorities",
      userCount: "12 Agencies"
    },
    {
      icon: Car,
      title: "Motorists & Fleets",
      description: "Individual drivers and commercial fleet operators",
      userCount: "1M+ Vehicles"
    }
  ];

  const stats = [
    { label: "Certificates Issued", value: "2.5M+", icon: Shield },
    { label: "Compliance Rate", value: "98.7%", icon: CheckCircle },
    { label: "Fraud Detected", value: "15,000+", icon: AlertTriangle },
    { label: "Processing Time", value: "< 30s", icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <Badge variant="secondary" className="text-sm px-4 py-2">
              🇳🇬 NIIRA 2025 Ready
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Toplorgical Insurance
              <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Compliance Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Driving Trust. Enforcing Compliance. Empowering Coverage.
            </p>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Digital insurance compliance platform for Nigeria's NIIRA 2025 law. 
              Automate certificate issuance, ensure regulatory compliance, and eliminate fraud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold" asChild>
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-transparent bg-transparent px-8 py-3 text-lg" asChild>
                <Link to="/verify">
                  Verify Certificate
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <stat.icon className="h-8 w-8 text-white/80 mx-auto" />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NIIRA 2025 Context */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <Badge variant="outline" className="text-lg px-6 py-3">
              📋 Understanding NIIRA 2025
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              The Challenge Before NIIRA 2025
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Nigeria faced a massive insurance compliance crisis that TICP directly addresses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span className="text-lg font-semibold">Less than 25% insurance coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span className="text-lg font-semibold">Billions lost to fake certificates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span className="text-lg font-semibold">Manual enforcement processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span className="text-lg font-semibold">Victims left uncompensated</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="card-elevated p-8 space-y-4">
                <h3 className="text-2xl font-bold text-success">TICP Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Digital certificates with QR verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Automated NAICOM compliance reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Real-time fraud detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Instant public verification</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              Comprehensive Compliance Suite
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Everything you need to comply with NIIRA 2025 and modernize insurance operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="card-elevated interactive-hover h-full">
                  <CardHeader>
                    <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              Built for Every Stakeholder
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Serving the entire Nigerian insurance ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {users.map((user, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="card-elevated interactive-hover text-center h-full">
                  <CardHeader className="pb-4">
                    <user.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                    <CardTitle className="text-2xl">{user.title}</CardTitle>
                    <Badge variant="outline" className="text-sm py-2 justify-center">
                      {user.userCount}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {user.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready for NIIRA 2025?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join the digital insurance revolution. Start issuing compliant certificates today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold" asChild>
                <Link to="/register">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:text-white hover:bg-transparent bg-transparent px-8 py-3 text-lg" asChild>
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}