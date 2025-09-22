import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { 
  FileText, 
  Upload, 
  Download, 
  Search,
  Filter,
  Calendar,
  Eye,
  Send
} from "lucide-react";

function Reports() {

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showNewReport, setShowNewReport] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const reports = [
    {
      id: "RPT-001",
      name: "Annual Financials",
      period: "FY 2024",
      status: "Ready",
      updated: "2025-06-10",
      dueDate: "2025-06-30",
      type: "Mandatory",
      size: "2.4 MB",
      statusColor: "bg-success"
    },
    {
      id: "RPT-002",
      name: "Solvency & LAT",
      period: "FY 2024",
      status: "Draft",
      updated: "2025-06-12",
      dueDate: "2025-06-30",
      type: "Mandatory",
      size: "1.8 MB",
      statusColor: "bg-muted"
    },
    {
      id: "RPT-003",
      name: "Outstanding Premiums",
      period: "FY 2024",
      status: "Submitted",
      updated: "2025-06-25",
      dueDate: "2025-06-30",
      type: "Mandatory",
      size: "892 KB",
      statusColor: "bg-primary"
    },
    {
      id: "RPT-004",
      name: "Claims Analysis",
      period: "Q2 2024",
      status: "Pending Review",
      updated: "2025-05-15",
      dueDate: "2025-07-15",
      type: "Optional",
      size: "3.1 MB",
      statusColor: "bg-warning"
    },
    {
      id: "RPT-005",
      name: "Risk Assessment",
      period: "FY 2024",
      status: "Overdue",
      updated: "2025-04-20",
      dueDate: "2025-05-30",
      type: "Mandatory",
      size: "1.2 MB",
      statusColor: "bg-destructive"
    }
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || report.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-heading">Reports to NAICOM</h2>
          <p className="text-muted-foreground">
            Manage and submit regulatory reports and compliance documents
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => setShowUploadModal(true)}>
            <Upload className="h-4 w-4 mr-2" />
            Upload Report
          </Button>
          <Button onClick={() => setShowNewReport(true)}>
            <FileText className="h-4 w-4 mr-2" />
            New Report
          </Button>
        </div>
      {/* New Report Form Modal */}
      <Dialog open={showNewReport} onOpenChange={setShowNewReport}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Report</DialogTitle>
            <DialogDescription>Fill in the details to create a new report.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Report Name" required />
            <Input placeholder="Period (e.g. FY 2025)" required />
            <Textarea placeholder="Description (optional)" />
            <Select>
              <SelectTrigger className="w-full"><SelectValue placeholder="Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Mandatory">Mandatory</SelectItem>
                <SelectItem value="Optional">Optional</SelectItem>
              </SelectContent>
            </Select>
            <DialogFooter>
              <Button type="submit">Create</Button>
              <Button type="button" variant="outline" onClick={() => setShowNewReport(false)}>Cancel</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Upload Report Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Report</DialogTitle>
            <DialogDescription>Select a file to upload your report document.</DialogDescription>
          </DialogHeader>
          <Input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" />
          <DialogFooter>
            <Button type="button">Upload</Button>
            <Button type="button" variant="outline" onClick={() => setShowUploadModal(false)}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Submitted</p>
                <p className="text-2xl font-bold">18</p>
              </div>
              <Send className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">4</p>
              </div>
              <Calendar className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <Calendar className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Report Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reports..."
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
                <SelectItem value="ready">Ready</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
                <SelectItem value="pending review">Pending Review</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reports Table - Responsive */}
          <div className="space-y-4">
            {/* Table header for md+ screens */}
            <div className="hidden md:grid grid-cols-8 gap-4 text-sm font-medium text-muted-foreground border-b pb-3">
              <div className="col-span-1">ID</div>
              <div className="col-span-2">Name</div>
              <div className="col-span-1">Period</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1">Due Date</div>
              <div className="col-span-1">Size</div>
              <div className="col-span-1">Actions</div>
            </div>
            {/* Table rows */}
            {filteredReports.map((report, index) => (
              <div
                key={index}
                className="md:grid md:grid-cols-8 gap-4 text-sm items-center py-3 border-b border-muted/50 hover:bg-muted/30 rounded-lg px-2 -mx-2 flex flex-col md:flex-row md:items-center"
              >
                {/* Mobile stacked layout */}
                <div className="flex md:hidden flex-col w-full space-y-1 mb-2">
                  <div className="flex justify-between"><span className="font-semibold">ID</span><span>{report.id}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Name</span><span>{report.name}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Type</span><span>{report.type}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Period</span><span>{report.period}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Status</span><span><Badge variant={
                    report.status === 'Ready' ? 'secondary' : 
                    report.status === 'Submitted' ? 'default' : 
                    report.status === 'Overdue' ? 'destructive' :
                    'outline'
                  }>{report.status}</Badge></span></div>
                  <div className="flex justify-between"><span className="font-semibold">Due</span><span>{report.dueDate}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Size</span><span>{report.size}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Actions</span>
                    <span className="flex space-x-2">
                      <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                      {report.status === 'Ready' && (<Button size="sm"><Send className="h-4 w-4" /></Button>)}
                    </span>
                  </div>
                </div>
                {/* Desktop grid layout */}
                <div className="hidden md:block col-span-1 font-medium">{report.id}</div>
                <div className="hidden md:block col-span-2">
                  <div className="font-medium">{report.name}</div>
                  <div className="text-xs text-muted-foreground">{report.type}</div>
                </div>
                <div className="hidden md:block col-span-1 text-muted-foreground">{report.period}</div>
                <div className="hidden md:block col-span-1">
                  <Badge 
                    variant={
                      report.status === 'Ready' ? 'secondary' : 
                      report.status === 'Submitted' ? 'default' : 
                      report.status === 'Overdue' ? 'destructive' :
                      'outline'
                    }
                  >
                    {report.status}
                  </Badge>
                </div>
                <div className="hidden md:block col-span-1 text-muted-foreground">{report.dueDate}</div>
                <div className="hidden md:block col-span-1 text-muted-foreground">{report.size}</div>
                <div className="hidden md:block col-span-1 space-x-2">
                  <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                  {report.status === 'Ready' && (<Button size="sm"><Send className="h-4 w-4" /></Button>)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Reports;