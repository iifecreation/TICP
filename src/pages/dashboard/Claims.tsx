import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Search,
  Filter,
  Plus,
  Eye,
  Flag,
  DollarSign
} from "lucide-react";

export default function Claims() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const claims = [
    {
      id: "CL-2108",
      policyNumber: "P-9091",
      claimant: "John Adebayo",
      vehicleNumber: "LAG-123-XYZ",
      incidentDate: "2024-11-15",
      reportedDate: "2024-11-16",
      amount: "₦450,000",
      status: "Open",
      priority: "High",
      slaTimer: "5 days",
      fraudFlag: true,
      adjuster: "Mike Johnson",
      statusColor: "text-destructive"
    },
    {
      id: "CL-2109",
      policyNumber: "P-9092",
      claimant: "Mary Okafor",
      vehicleNumber: "ABJ-456-DEF",
      incidentDate: "2024-11-10",
      reportedDate: "2024-11-11",
      amount: "₦1,200,000",
      status: "In Progress",
      priority: "Medium",
      slaTimer: "12 days",
      fraudFlag: false,
      adjuster: "Sarah Williams",
      statusColor: "text-warning"
    },
    {
      id: "CL-2110",
      policyNumber: "P-9093",
      claimant: "David Okoro",
      vehicleNumber: "KAN-789-GHI",
      incidentDate: "2024-11-05",
      reportedDate: "2024-11-06",
      amount: "₦180,000",
      status: "Closed",
      priority: "Low",
      slaTimer: "3 days",
      fraudFlag: false,
      adjuster: "James Brown",
      statusColor: "text-success"
    },
    {
      id: "CL-2111",
      policyNumber: "P-9094",
      claimant: "Grace Emeka",
      vehicleNumber: "PH-101-JKL",
      incidentDate: "2024-11-20",
      reportedDate: "2024-11-21",
      amount: "₦750,000",
      status: "Under Review",
      priority: "High",
      slaTimer: "8 days",
      fraudFlag: true,
      adjuster: "Lisa Anderson",
      statusColor: "text-blue-600"
    },
    {
      id: "CL-2112",
      policyNumber: "P-9095",
      claimant: "Ahmed Musa",
      vehicleNumber: "KD-202-MNO",
      incidentDate: "2024-11-18",
      reportedDate: "2024-11-19",
      amount: "₦320,000",
      status: "Approved",
      priority: "Medium",
      slaTimer: "6 days",
      fraudFlag: false,
      adjuster: "Robert Wilson",
      statusColor: "text-success"
    }
  ];

  const filteredClaims = claims.filter(claim => {
    const matchesSearch = claim.claimant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || claim.status.toLowerCase().replace(" ", "").includes(statusFilter.toLowerCase());
    return matchesSearch && matchesStatus;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-destructive";
      case "Medium":
        return "text-warning";
      case "Low":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Open":
        return "destructive";
      case "In Progress":
        return "outline";
      case "Under Review":
        return "secondary";
      case "Approved":
        return "default";
      case "Closed":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-heading">Claims Monitor</h2>
          <p className="text-muted-foreground">
            Track claims, monitor SLA timers, and detect potential fraud
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Fraud Alerts
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Claim
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Claims</p>
                <p className="text-2xl font-bold">847</p>
                <p className="text-xs text-success">+5.2% this month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Open Claims</p>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-warning">Avg 8.5 days</p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Fraud Flags</p>
                <p className="text-2xl font-bold">23</p>
                <p className="text-xs text-destructive">Under investigation</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">₦89.2M</p>
                <p className="text-xs text-muted-foreground">This quarter</p>
              </div>
              <DollarSign className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SLA Performance */}
      <Card>
        <CardHeader>
          <CardTitle>SLA Performance</CardTitle>
          <CardDescription>Claims processing performance against service level agreements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>First Notice of Loss</span>
                <span className="font-medium">94%</span>
              </div>
              <Progress value={94} className="h-2" />
              <p className="text-xs text-muted-foreground">Target: 24 hours</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Initial Assessment</span>
                <span className="font-medium">87%</span>
              </div>
              <Progress value={87} className="h-2" />
              <p className="text-xs text-muted-foreground">Target: 72 hours</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Claim Settlement</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground">Target: 30 days</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Claims Table */}
      <Card>
        <CardHeader>
          <CardTitle>Claims Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by claimant, vehicle number, or claim ID..."
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
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="inprogress">In Progress</SelectItem>
                <SelectItem value="underreview">Under Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {/* Table header for md+ screens */}
            <div className="hidden md:grid grid-cols-10 gap-4 text-sm font-medium text-muted-foreground border-b pb-3">
              <div className="col-span-1">Claim ID</div>
              <div className="col-span-1">Claimant</div>
              <div className="col-span-1">Vehicle</div>
              <div className="col-span-1">Amount</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Priority</div>
              <div className="col-span-1">SLA Timer</div>
              <div className="col-span-1">Adjuster</div>
              <div className="col-span-1">Flags</div>
              <div className="col-span-1">Actions</div>
            </div>
            {/* Table rows */}
            {filteredClaims.map((claim, index) => (
              <div
                key={index}
                className="md:grid md:grid-cols-10 gap-4 text-sm items-center py-3 border-b border-muted/50 hover:bg-muted/30 rounded-lg px-2 -mx-2 flex flex-col md:flex-row md:items-center"
              >
                {/* Mobile stacked layout */}
                <div className="flex md:hidden flex-col w-full space-y-1 mb-2">
                  <div className="flex justify-between"><span className="font-semibold">Claim ID</span><span className="font-medium">{claim.id}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Policy</span><span className="text-xs text-muted-foreground">{claim.policyNumber}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Claimant</span><span>{claim.claimant}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Vehicle</span><span>{claim.vehicleNumber}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Incident Date</span><span className="text-xs text-muted-foreground">{claim.incidentDate}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Amount</span><span className="font-medium">{claim.amount}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Status</span><span><Badge variant={getStatusBadgeVariant(claim.status)}>{claim.status}</Badge></span></div>
                  <div className="flex justify-between"><span className="font-semibold">Priority</span><span className={getPriorityColor(claim.priority)}>{claim.priority}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">SLA Timer</span><span className="flex items-center space-x-1"><Clock className="h-3 w-3 text-muted-foreground" /><span>{claim.slaTimer}</span></span></div>
                  <div className="flex justify-between"><span className="font-semibold">Adjuster</span><span className="text-xs">{claim.adjuster}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Flags</span>
                    <span>
                      {claim.fraudFlag && (
                        <span className="flex items-center space-x-1"><Flag className="h-4 w-4 text-destructive" /><span className="text-xs text-destructive">Fraud</span></span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between"><span className="font-semibold">Actions</span>
                    <span className="flex space-x-2">
                      <Button variant="ghost" size="sm" title="View Claim"><Eye className="h-4 w-4" /></Button>
                      {claim.fraudFlag && (<Button variant="ghost" size="sm" title="Fraud Alert"><AlertTriangle className="h-4 w-4 text-destructive" /></Button>)}
                    </span>
                  </div>
                </div>
                {/* Desktop grid layout */}
                <div className="hidden md:block col-span-1"><div className="font-medium">{claim.id}</div><div className="text-xs text-muted-foreground">{claim.policyNumber}</div></div>
                <div className="hidden md:block col-span-1">{claim.claimant}</div>
                <div className="hidden md:block col-span-1"><div className="font-medium">{claim.vehicleNumber}</div><div className="text-xs text-muted-foreground">{claim.incidentDate}</div></div>
                <div className="hidden md:block col-span-1 font-medium">{claim.amount}</div>
                <div className="hidden md:block col-span-1"><Badge variant={getStatusBadgeVariant(claim.status)}>{claim.status}</Badge></div>
                <div className={`hidden md:block col-span-1 font-medium ${getPriorityColor(claim.priority)}`}>{claim.priority}</div>
                <div className="hidden md:block col-span-1"><div className="flex items-center space-x-1"><Clock className="h-3 w-3 text-muted-foreground" /><span>{claim.slaTimer}</span></div></div>
                <div className="hidden md:block col-span-1 text-xs">{claim.adjuster}</div>
                <div className="hidden md:block col-span-1">
                  {claim.fraudFlag && (<div className="flex items-center space-x-1"><Flag className="h-4 w-4 text-destructive" /><span className="text-xs text-destructive">Fraud</span></div>)}
                </div>
                <div className="hidden md:block col-span-1 space-x-2">
                  <Button variant="ghost" size="sm" title="View Claim"><Eye className="h-4 w-4" /></Button>
                  {claim.fraudFlag && (<Button variant="ghost" size="sm" title="Fraud Alert"><AlertTriangle className="h-4 w-4 text-destructive" /></Button>)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}