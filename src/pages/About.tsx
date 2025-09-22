import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Users, Globe, Award, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building unshakeable trust through advanced security and transparent processes."
    },
    {
      icon: Target,
      title: "Compliance First",
      description: "Every feature designed with NIIRA 2025 and NAICOM regulations at its core."
    },
    {
      icon: Users,
      title: "Stakeholder Focus",
      description: "Serving all ecosystem participants: insurers, regulators, and citizens."
    },
    {
      icon: Globe,
      title: "Digital Innovation",
      description: "Leveraging technology to modernize Nigeria's insurance landscape."
    }
  ];

  const achievements = [
    { icon: Users, label: "Users Served", value: "1M+" },
    { icon: Shield, label: "Certificates Issued", value: "2.5M+" },
    { icon: Award, label: "Compliance Rate", value: "98.7%" },
    { icon: TrendingUp, label: "Fraud Prevented", value: "₦5B+" }
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
              About TICP
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Transforming Nigerian Insurance
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Leading the digital transformation of insurance compliance in Nigeria through NIIRA 2025 readiness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-heading">Our Mission</h2>
              <p className="text-xl text-body leading-relaxed">
                To drive trust, enforce compliance, and empower coverage across Nigeria's insurance ecosystem through innovative digital solutions that serve every stakeholder.
              </p>
              <p className="text-lg text-muted-foreground">
                Before NIIRA 2025, Nigeria faced a massive compliance crisis with less than 25% insurance coverage, 
                rampant fraud, and billions in losses. TICP was born to solve these systemic challenges through 
                technology, transparency, and trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-elevated text-center">
                  <CardHeader className="pb-2">
                    <achievement.icon className="h-8 w-8 text-primary mx-auto" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              NIIRA 2025: The Challenge & Our Response
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Understanding the regulatory landscape that drives our innovation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">The NIIRA 2025 Challenge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-destructive mb-2">Before NIIRA 2025:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Less than 25% vehicle insurance coverage</li>
                        <li>• Widespread fake certificate fraud</li>
                        <li>• Manual, inefficient enforcement</li>
                        <li>• Billions in uncompensated claims</li>
                        <li>• Poor regulatory oversight</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-success mb-2">TICP's NIIRA 2025 Solution:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Digital certificate authentication</li>
                        <li>• Real-time verification systems</li>
                        <li>• Automated compliance reporting</li>
                        <li>• Fraud detection algorithms</li>
                        <li>• Comprehensive stakeholder platform</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">Our Core Values</h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              The principles that guide every decision and feature we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="card-elevated interactive-hover h-full text-center">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              Built for Nigeria, by Nigeria
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Our team combines deep insurance industry expertise with cutting-edge technology 
              to deliver solutions that truly understand the Nigerian market.
            </p>
            <div className="pt-8">
              <Card className="card-elevated max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <p className="text-lg italic text-center text-muted-foreground">
                    "We're not just building software – we're building the foundation for a 
                    more trusted, transparent, and accessible insurance ecosystem for every Nigerian."
                  </p>
                  <p className="text-center mt-4 font-semibold">— TICP Leadership Team</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}