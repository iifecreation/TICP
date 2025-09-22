import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@ticp.ng", "sales@ticp.ng"],
      description: "24/7 support for technical issues"
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
      description: "Mon-Fri, 8AM-6PM WAT"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["TICP Nigeria Limited", "Victoria Island, Lagos"],
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: ["General: 24 hours", "Enterprise: 4 hours"],
      description: "Average response times"
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
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Contact Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Ready to transform your insurance compliance? Let's discuss your NIIRA 2025 needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="compliance">Compliance Questions</SelectItem>
                          <SelectItem value="demo">Product Demo</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your needs and how we can help..."
                        className="min-h-[120px]"
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-heading mb-4">Get in Touch</h2>
                <p className="text-lg text-body">
                  Our team is here to help you navigate NIIRA 2025 compliance and 
                  implement the perfect solution for your organization.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="card-elevated">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <info.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div className="space-y-1">
                            <h3 className="font-semibold">{info.title}</h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Need immediate assistance? Try these options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:support@ticp.ng">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Support
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/verify">
                      <Badge className="mr-2 h-4 w-4" />
                      Verify Certificate
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/pricing">
                      <span className="mr-2">💰</span>
                      View Pricing
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              Common Questions
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Find quick answers to frequently asked questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How quickly can we get started?",
                a: "Most organizations can be onboarded within 48 hours. Enterprise setups may take 1-2 weeks depending on integration requirements."
              },
              {
                q: "Do you provide training?",
                a: "Yes! We offer comprehensive training programs for all user types, from basic users to system administrators."
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. We use bank-level encryption and comply with international security standards. All data is stored in Nigeria."
              },
              {
                q: "Can you integrate with our existing systems?",
                a: "Yes, we offer APIs and custom integrations for most insurance management systems and government databases."
              },
              {
                q: "What about regulatory compliance?",
                a: "TICP is designed specifically for NIIRA 2025 and NAICOM requirements. We handle all compliance automatically."
              },
              {
                q: "Do you offer 24/7 support?",
                a: "Yes, our Enterprise and Professional plans include 24/7 technical support with guaranteed response times."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="card-elevated h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}