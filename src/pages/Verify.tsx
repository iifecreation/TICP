import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  QrCode, 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Car,
  Building,
  Calendar,
  User
} from "lucide-react";

export default function Verify() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [certificateId, setCertificateId] = useState("");
  const { toast } = useToast();

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock verification result based on certificate ID
    const mockResult = certificateId.toLowerCase().includes('invalid') ? {
      status: 'invalid',
      message: 'Certificate not found or has been revoked'
    } : certificateId.toLowerCase().includes('expired') ? {
      status: 'expired',
      message: 'Certificate has expired and needs renewal'
    } : {
      status: 'valid',
      message: 'Certificate is valid and active',
      details: {
        certificateNumber: certificateId.toUpperCase(),
        policyNumber: 'POL-2025-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        insurer: 'Sample Insurance Company Ltd',
        policyHolder: 'John Doe',
        vehicleDetails: 'Toyota Corolla 2020 - ABC123XY',
        issueDate: '2025-01-15',
        expiryDate: '2026-01-14',
        coverage: '₦1,000,000 Third Party',
        verificationTime: new Date().toLocaleString()
      }
    };
    
    setVerificationResult(mockResult);
    setIsVerifying(false);
    
    if (mockResult.status === 'valid') {
      toast({
        title: "Verification Successful",
        description: "Certificate is valid and active.",
      });
    } else {
      toast({
        title: "Verification Failed",
        description: mockResult.message,
        variant: "destructive"
      });
    }
  };

  const handleQRScan = () => {
    toast({
      title: "QR Scanner",
      description: "QR scanner would open here in a real implementation.",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid':
        return <CheckCircle className="h-6 w-6 text-success" />;
      case 'expired':
        return <AlertTriangle className="h-6 w-6 text-warning" />;
      case 'invalid':
        return <XCircle className="h-6 w-6 text-destructive" />;
      default:
        return <Shield className="h-6 w-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid':
        return 'status-success';
      case 'expired':
        return 'status-warning';
      case 'invalid':
        return 'status-error';
      default:
        return 'bg-muted';
    }
  };

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
              Public Verification
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              Verify Insurance Certificate
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Instantly verify any NIIRA 2025 compliant insurance certificate
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Enter a certificate ID or scan a QR code to check authenticity and coverage details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-elevated">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Certificate Verification</CardTitle>
                  <CardDescription>
                    Choose your preferred verification method below
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="manual" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="manual" className="flex items-center space-x-2">
                        <Search className="h-4 w-4" />
                        <span>Manual Entry</span>
                      </TabsTrigger>
                      <TabsTrigger value="qr" className="flex items-center space-x-2">
                        <QrCode className="h-4 w-4" />
                        <span>QR Scan</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="manual" className="space-y-6 mt-6">
                      <form onSubmit={handleVerification} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="certificateId">Certificate ID</Label>
                          <Input
                            id="certificateId"
                            placeholder="Enter certificate ID (e.g., CERT-2025-ABC123)"
                            value={certificateId}
                            onChange={(e) => setCertificateId(e.target.value)}
                            required
                          />
                        </div>
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-gradient-primary"
                          disabled={isVerifying || !certificateId.trim()}
                        >
                          {isVerifying ? (
                            "Verifying..."
                          ) : (
                            <>
                              Verify Certificate
                              <Search className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="qr" className="space-y-6 mt-6">
                      <div className="text-center space-y-4">
                        <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                          <QrCode className="h-16 w-16 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">
                          Click the button below to open the QR scanner
                        </p>
                        <Button 
                          onClick={handleQRScan}
                          size="lg" 
                          className="w-full bg-gradient-primary"
                        >
                          Open QR Scanner
                          <QrCode className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>

            {/* Verification Result */}
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8"
              >
                <Card className="card-elevated">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(verificationResult.status)}
                      <div>
                        <CardTitle className="text-xl">Verification Result</CardTitle>
                        <CardDescription>{verificationResult.message}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(verificationResult.status)} variant="secondary">
                        {verificationResult.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  {verificationResult.status === 'valid' && verificationResult.details && (
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Shield className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-semibold">Certificate Number</p>
                              <p className="text-muted-foreground">{verificationResult.details.certificateNumber}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Building className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-semibold">Insurance Company</p>
                              <p className="text-muted-foreground">{verificationResult.details.insurer}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-semibold">Policy Holder</p>
                              <p className="text-muted-foreground">{verificationResult.details.policyHolder}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Car className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-semibold">Vehicle Details</p>
                              <p className="text-muted-foreground">{verificationResult.details.vehicleDetails}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Calendar className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-semibold">Validity Period</p>
                              <p className="text-muted-foreground">
                                {verificationResult.details.issueDate} to {verificationResult.details.expiryDate}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Shield className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-semibold">Coverage</p>
                              <p className="text-muted-foreground">{verificationResult.details.coverage}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="text-sm text-muted-foreground text-center">
                          Verified on {verificationResult.details.verificationTime} via TICP Platform
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading">
              How to Verify Certificates
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Multiple ways to verify insurance certificate authenticity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Search,
                title: "Manual Entry",
                description: "Enter the certificate ID found on the insurance document",
                steps: ["Find certificate ID", "Enter in verification form", "Get instant results"]
              },
              {
                icon: QrCode,
                title: "QR Code Scan",
                description: "Scan the QR code printed on the certificate",
                steps: ["Open QR scanner", "Point camera at QR code", "Automatic verification"]
              },
              {
                icon: Shield,
                title: "USSD/SMS Check",
                description: "Use your mobile phone for quick verification",
                steps: ["Dial *123*CERT_ID#", "Or SMS VERIFY to 2025", "Receive verification result"]
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="card-elevated interactive-hover h-full text-center">
                  <CardHeader>
                    <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="text-sm text-muted-foreground space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center space-x-2">
                          <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                            {stepIndex + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
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