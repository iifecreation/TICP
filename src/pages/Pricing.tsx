import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Building, Users, Zap } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small insurance brokers and agencies",
      price: "₦50,000",
      period: "/month",
      features: [
        "Up to 1,000 certificates/month",
        "Basic verification system",
        "Standard reporting",
        "Email support",
        "Mobile app access",
        "Basic analytics dashboard"
      ],
      icon: Shield,
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional", 
      description: "Ideal for established insurance companies",
      price: "₦200,000",
      period: "/month",
      features: [
        "Up to 10,000 certificates/month",
        "Advanced verification with QR/USSD",
        "Automated NAICOM reporting",
        "Priority support (24/7)",
        "Fleet management tools",
        "Fraud detection alerts",
        "Custom branding",
        "API access"
      ],
      icon: Building,
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large insurers and government agencies",
      price: "Custom",
      period: "",
      features: [
        "Unlimited certificates",
        "Full compliance suite",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solution",
        "Advanced analytics & reporting",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      icon: Users,
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const additionalPricing = [
    {
      title: "Per-Certificate Fees",
      description: "Additional charges beyond plan limits",
      items: [
        { service: "Standard Certificate", price: "₦50 each" },
        { service: "Premium Certificate with QR", price: "₦100 each" },
        { service: "Fleet Bulk Issuance", price: "₦30 each (min. 100)" }
      ]
    },
    {
      title: "API & Integration",
      description: "Developer access and custom integrations",
      items: [
        { service: "API License (Basic)", price: "₦25,000/month" },
        { service: "API License (Premium)", price: "₦75,000/month" },
        { service: "Custom Integration Setup", price: "₦500,000 one-time" }
      ]
    },
    {
      title: "Premium Services",
      description: "Additional compliance and support services",
      items: [
        { service: "Dedicated Compliance Officer", price: "₦150,000/month" },
        { service: "Custom Training Program", price: "₦300,000 one-time" },
        { service: "Priority NAICOM Liaison", price: "₦100,000/month" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 text-white"
          >
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Simple, Fair Pricing
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Choose the perfect plan for your NIIRA 2025 compliance needs
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              All plans include core compliance features. Scale up as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-2">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`card-elevated h-full ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader className="text-center pb-8">
                    <plan.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="pt-4">
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      {plan.period && <div className="text-muted-foreground">{plan.period}</div>}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-primary' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <Link to={plan.cta === "Contact Sales" ? "/contact" : "/register"}>
                        {plan.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              Additional Services & Add-ons
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Extend your compliance capabilities with our premium services
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalPricing.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="card-elevated h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm">{item.service}</span>
                          <span className="font-semibold text-primary">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Is there a free trial available?",
                a: "Yes! All plans come with a 14-day free trial. No credit card required to start."
              },
              {
                q: "What happens if I exceed my certificate limit?",
                a: "You'll be charged the per-certificate fee for additional certificates, or you can upgrade to a higher plan."
              },
              {
                q: "Do you offer discounts for government agencies?",
                a: "Yes, we provide special pricing for NAICOM, VIO, FRSC, and other regulatory bodies. Contact sales for details."
              },
              {
                q: "Can I cancel or change my plan anytime?",
                a: "Absolutely. You can upgrade, downgrade, or cancel your subscription at any time with no penalties."
              },
              {
                q: "Is the platform NIIRA 2025 compliant?",
                a: "Yes, TICP is built specifically for NIIRA 2025 compliance and is regularly updated to meet all NAICOM requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="card-elevated">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of Nigerian insurers already using TICP for NIIRA 2025 compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold" asChild>
                <Link to="/register">
                  Start Free Trial
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg" asChild>
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