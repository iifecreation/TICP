import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  FileText, 
  TrendingUp, 
  CheckCircle,
  AlertTriangle,
  Clock,
  Download,
  Search
} from "lucide-react";

export default function DashboardHome() {
  const complianceData = [
    { label: "Compliant", value: 78, color: "bg-success" },
    { label: "Pending", value: 17, color: "bg-warning" },
    { label: "Breaches", value: 4, color: "bg-destructive" }
  ];

  const reports = [
    {
      id: "RPT-001",
      name: "Annual Financials",
      period: "FY 2024",
      status: "Ready",
      updated: "2025-06-10",
      statusColor: "bg-success"
    },
    {
      id: "RPT-002",
      name: "Solvency & LAT",
      period: "FY 2024",
      status: "Draft",
      updated: "2025-06-12",
      statusColor: "bg-muted"
    },
    {
      id: "RPT-003",
      name: "Outstanding Premiums",
      period: "FY 2024",
      status: "Submitted",
      updated: "2025-06-25",
      statusColor: "bg-primary"
    }
  ];

  const claims = [
    {
      id: "CL-2108 • P-9091",
      amount: "₦450,000",
      days: "5 days",
      status: "Open",
      statusColor: "text-destructive"
    },
    {
      id: "CL-2109 • P-9092",
      amount: "₦1,200,000",
      days: "12 days",
      status: "In Progress",
      statusColor: "text-warning"
    },
    {
      id: "CL-2110 • P-9093",
      amount: "₦180,000",
      days: "3 days",
      status: "Closed",
      statusColor: "text-success"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Dashboard Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Compliance Overview */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Compliance Overview</CardTitle>
            </div>
            <CardDescription>Annual obligations to NAICOM</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {complianceData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
            <div className="pt-2 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Record retention:</span>
                <span className="font-medium">10 years</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solvency & LAT */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Solvency & LAT</CardTitle>
            </div>
            <CardDescription>Liability adequacy & certificates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">LAT Uploaded</span>
              <Badge variant="secondary" className="bg-success text-success-foreground">Yes</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Solvency Cert</span>
              <Badge variant="secondary" className="bg-warning text-warning-foreground">Awaiting Sign-off</Badge>
            </div>
            <div className="space-y-2">
              <Progress value={72} className="h-2" />
              <p className="text-xs text-muted-foreground">72% ready for FY 2024 filings</p>
            </div>
          </CardContent>
        </Card>

        {/* Digital Certificates */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle className="text-lg">Digital Certificates</CardTitle>
                  <CardDescription>Motor policy issuance & checks</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-2xl font-bold">1204</div>
                  <div className="text-xs text-muted-foreground">Issued (30d)</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-muted-foreground">Valid</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">+14%</div>
                  <div className="text-xs text-muted-foreground">MoM</div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Verify
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reports to NAICOM */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg">Reports to NAICOM</CardTitle>
                <CardDescription>Due by end of June (following FY)</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                <div>ID</div>
                <div>Name</div>
                <div>Period</div>
                <div>Status</div>
                <div>Updated</div>
                <div>Action</div>
              </div>
              {reports.map((report, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 text-sm items-center">
                  <div className="font-medium">{report.id}</div>
                  <div>{report.name}</div>
                  <div className="text-muted-foreground">{report.period}</div>
                  <div>
                    <Badge variant={report.status === 'Ready' ? 'secondary' : report.status === 'Submitted' ? 'default' : 'outline'}>
                      {report.status}
                    </Badge>
                  </div>
                  <div className="text-muted-foreground">{report.updated}</div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Open</Button>
                    <Button size="sm">Submit</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Claims Monitor */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg">Claims Monitor</CardTitle>
                <CardDescription>Fraud flags & SLA timers</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {claims.map((claim, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <div className="font-medium text-sm">{claim.id}</div>
                    <div className="text-xs text-muted-foreground">
                      {claim.amount} • {claim.days}
                    </div>
                  </div>
                  <Badge variant="outline" className={claim.statusColor}>
                    {claim.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}