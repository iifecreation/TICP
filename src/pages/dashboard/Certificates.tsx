import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Shield, 
  QrCode, 
  Download, 
  Search,
  Filter,
  Plus,
  Eye,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const certificates = [
    {
      id: "CERT-2024-001234",
      policyNumber: "POL-ABC-123456",
      vehicleNumber: "LAG-123-XYZ",
      holderName: "John Adebayo",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-14",
      status: "Active",
      premium: "₦45,000",
      insurer: "ABC Insurance Ltd",
      statusColor: "text-success"
    },
    {
      id: "CERT-2024-001235",
      policyNumber: "POL-ABC-123457",
      vehicleNumber: "ABJ-456-DEF",
      holderName: "Mary Okafor",
      issueDate: "2024-02-10",
      expiryDate: "2025-02-09",
      status: "Active",
      premium: "₦52,000",
      insurer: "ABC Insurance Ltd",
      statusColor: "text-success"
    },
    {
      id: "CERT-2024-001236",
      policyNumber: "POL-ABC-123458",
      vehicleNumber: "KAN-789-GHI",
      holderName: "David Okoro",
      issueDate: "2024-03-05",
      expiryDate: "2025-03-04",
      status: "Expiring Soon",
      premium: "₦38,000",
      insurer: "ABC Insurance Ltd",
      statusColor: "text-warning"
    },
    {
      id: "CERT-2024-001237",
      policyNumber: "POL-ABC-123459",
      vehicleNumber: "PH-101-JKL",
      holderName: "Grace Emeka",
      issueDate: "2023-12-01",
      expiryDate: "2024-11-30",
      status: "Expired",
      premium: "₦41,000",
      insurer: "ABC Insurance Ltd",
      statusColor: "text-destructive"
    },
    {
      id: "CERT-2024-001238",
      policyNumber: "POL-ABC-123460",
      vehicleNumber: "KD-202-MNO",
      holderName: "Ahmed Musa",
      issueDate: "2024-01-20",
      expiryDate: "2025-01-19",
      status: "Suspended",
      premium: "₦47,500",
      insurer: "ABC Insurance Ltd",
      statusColor: "text-muted-foreground"
    }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.holderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || cert.status.toLowerCase().replace(" ", "").includes(statusFilter.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "Expired":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "Expiring Soon":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <XCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-heading">Digital Certificates</h2>
          <p className="text-muted-foreground">
            Issue, manage and verify motor insurance certificates
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <QrCode className="h-4 w-4 mr-2" />
            Scan QR
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Issue Certificate
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Issued</p>
                <p className="text-2xl font-bold">1,204</p>
                <p className="text-xs text-success">+14% from last month</p>
              </div>
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">1,089</p>
                <p className="text-xs text-muted-foreground">98% validity rate</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Expiring Soon</p>
                <p className="text-2xl font-bold">47</p>
                <p className="text-xs text-warning">Next 30 days</p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Expired</p>
                <p className="text-2xl font-bold">68</p>
                <p className="text-xs text-destructive">Require renewal</p>
              </div>
              <XCircle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Certificate Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by vehicle number, holder name, or certificate ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expiringsoon">Expiring Soon</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>

          {/* Certificates Table - Responsive */}
          <div className="space-y-4">
            {/* Table header for md+ screens */}
            <div className="hidden md:grid grid-cols-9 gap-4 text-sm font-medium text-muted-foreground border-b pb-3">
              <div className="col-span-1">Certificate ID</div>
              <div className="col-span-1">Vehicle</div>
              <div className="col-span-1">Holder</div>
              <div className="col-span-1">Issue Date</div>
              <div className="col-span-1">Expiry Date</div>
              <div className="col-span-1">Premium</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Insurer</div>
              <div className="col-span-1">Actions</div>
            </div>
            {/* Table rows */}
            {filteredCertificates.map((cert, index) => (
              <div
                key={index}
                className="md:grid md:grid-cols-9 gap-4 text-sm items-center py-3 border-b border-muted/50 hover:bg-muted/30 rounded-lg px-2 -mx-2 flex flex-col md:flex-row md:items-center"
              >
                {/* Mobile stacked layout */}
                <div className="flex md:hidden flex-col w-full space-y-1 mb-2">
                  <div className="flex justify-between"><span className="font-semibold">Certificate ID</span><span className="font-mono text-xs">{cert.id}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Vehicle</span><span>{cert.vehicleNumber}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Policy</span><span className="text-xs text-muted-foreground">{cert.policyNumber}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Holder</span><span>{cert.holderName}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Issue Date</span><span>{cert.issueDate}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Expiry Date</span><span>{cert.expiryDate}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Premium</span><span>{cert.premium}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Status</span><span><span className="inline-flex items-center space-x-1">{getStatusIcon(cert.status)}<Badge 
                      variant={
                        cert.status === 'Active' ? 'secondary' : 
                        cert.status === 'Expiring Soon' ? 'outline' : 
                        cert.status === 'Expired' ? 'destructive' :
                        'outline'
                      }
                    >
                      {cert.status}
                    </Badge></span></span></div>
                  <div className="flex justify-between"><span className="font-semibold">Insurer</span><span className="text-xs text-muted-foreground">{cert.insurer}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Actions</span>
                    <span className="flex space-x-2">
                      <Button variant="ghost" size="sm" title="View Certificate"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" title="QR Code"><QrCode className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" title="Download"><Download className="h-4 w-4" /></Button>
                    </span>
                  </div>
                </div>
                {/* Desktop grid layout */}
                <div className="hidden md:block col-span-1"><div className="font-mono text-xs">{cert.id}</div></div>
                <div className="hidden md:block col-span-1"><div className="font-medium">{cert.vehicleNumber}</div><div className="text-xs text-muted-foreground">{cert.policyNumber}</div></div>
                <div className="hidden md:block col-span-1">{cert.holderName}</div>
                <div className="hidden md:block col-span-1 text-muted-foreground">{cert.issueDate}</div>
                <div className="hidden md:block col-span-1 text-muted-foreground">{cert.expiryDate}</div>
                <div className="hidden md:block col-span-1 font-medium">{cert.premium}</div>
                <div className="hidden md:block col-span-1"><div className="flex items-center space-x-2">{getStatusIcon(cert.status)}<Badge 
                      variant={
                        cert.status === 'Active' ? 'secondary' : 
                        cert.status === 'Expiring Soon' ? 'outline' : 
                        cert.status === 'Expired' ? 'destructive' :
                        'outline'
                      }
                    >
                      {cert.status}
                    </Badge></div></div>
                <div className="hidden md:block col-span-1 text-xs text-muted-foreground">{cert.insurer}</div>
                <div className="hidden md:block col-span-1 space-x-2">
                  <Button variant="ghost" size="sm" title="View Certificate"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" title="QR Code"><QrCode className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" title="Download"><Download className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}