import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield,
  Key,
  Users,
  FileText,
  Database,
  Save,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    fraudAlerts: true,
    slaReminders: true,
    reportDue: true
  });

  const users = [
    {
      id: 1,
      name: "John Administrator",
      email: "john@company.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-11-25 09:30"
    },
    {
      id: 2,
      name: "Sarah Manager",
      email: "sarah@company.com",
      role: "Manager",
      status: "Active",
      lastLogin: "2024-11-25 08:15"
    },
    {
      id: 3,
      name: "Mike Analyst",
      email: "mike@company.com",
      role: "Analyst",
      status: "Inactive",
      lastLogin: "2024-11-20 16:45"
    }
  ];

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-heading">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account, users, and system preferences
          </p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <CardTitle>Profile Information</CardTitle>
              </div>
              <CardDescription>Update your personal and company information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Administrator" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" defaultValue="ABC Insurance Ltd" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="admin">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Security</CardTitle>
              </div>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* API Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-primary" />
                <CardTitle>API Configuration</CardTitle>
              </div>
              <CardDescription>Manage API keys and integration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>API Key</Label>
                <div className="flex space-x-2">
                  <Input value="sk_live_51HqD9..." type="password" readOnly />
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm">Regenerate</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhookUrl">Webhook URL</Label>
                <Input id="webhookUrl" placeholder="https://your-app.com/webhook" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Rate Limiting</Label>
                  <p className="text-sm text-muted-foreground">1000 requests per hour</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-primary" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>Configure your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Switch 
                  checked={notifications.email}
                  onCheckedChange={(value) => handleNotificationChange('email', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS Alerts</Label>
                  <p className="text-sm text-muted-foreground">Urgent notifications via SMS</p>
                </div>
                <Switch 
                  checked={notifications.sms}
                  onCheckedChange={(value) => handleNotificationChange('sms', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Browser notifications</p>
                </div>
                <Switch 
                  checked={notifications.push}
                  onCheckedChange={(value) => handleNotificationChange('push', value)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Fraud Alerts</Label>
                  <p className="text-sm text-muted-foreground">Suspicious activity notifications</p>
                </div>
                <Switch 
                  checked={notifications.fraudAlerts}
                  onCheckedChange={(value) => handleNotificationChange('fraudAlerts', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SLA Reminders</Label>
                  <p className="text-sm text-muted-foreground">Deadline reminders</p>
                </div>
                <Switch 
                  checked={notifications.slaReminders}
                  onCheckedChange={(value) => handleNotificationChange('slaReminders', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Report Due Dates</Label>
                  <p className="text-sm text-muted-foreground">NAICOM report reminders</p>
                </div>
                <Switch 
                  checked={notifications.reportDue}
                  onCheckedChange={(value) => handleNotificationChange('reportDue', value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>System Status</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Database</span>
                <Badge variant="secondary" className="bg-success text-success-foreground">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Services</span>
                <Badge variant="secondary" className="bg-success text-success-foreground">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Backup System</span>
                <Badge variant="secondary" className="bg-success text-success-foreground">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Backup</span>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </div>
            </div>
            <Button>
              <User className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Table header for md+ screens */}
            <div className="hidden md:grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground border-b pb-3">
              <div>Name</div>
              <div>Email</div>
              <div>Role</div>
              <div>Status</div>
              <div>Last Login</div>
              <div>Actions</div>
            </div>
            {/* Table rows */}
            {users.map((user) => (
              <div
                key={user.id}
                className="md:grid md:grid-cols-6 gap-4 text-sm items-center py-3 border-b border-muted/50 hover:bg-muted/30 rounded-lg px-2 -mx-2 flex flex-col md:flex-row md:items-center"
              >
                {/* Mobile stacked layout */}
                <div className="flex md:hidden flex-col w-full space-y-1 mb-2">
                  <div className="flex justify-between"><span className="font-semibold">Name</span><span className="font-medium">{user.name}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Email</span><span className="text-muted-foreground">{user.email}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Role</span><span><Badge variant='outline'>{user.role}</Badge></span></div>
                  <div className="flex justify-between"><span className="font-semibold">Status</span><span><Badge variant={user.status === 'Active' ? 'secondary' : 'outline'}>{user.status}</Badge></span></div>
                  <div className="flex justify-between"><span className="font-semibold">Last Login</span><span className="text-muted-foreground">{user.lastLogin}</span></div>
                  <div className="flex justify-between"><span className="font-semibold">Actions</span>
                    <span className="flex space-x-2">
                      <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                    </span>
                  </div>
                </div>
                {/* Desktop grid layout */}
                <div className="hidden md:block font-medium">{user.name}</div>
                <div className="hidden md:block text-muted-foreground">{user.email}</div>
                <div className="hidden md:block"><Badge variant='outline'>{user.role}</Badge></div>
                <div className="hidden md:block"><Badge variant={user.status === 'Active' ? 'secondary' : 'outline'}>{user.status}</Badge></div>
                <div className="hidden md:block text-muted-foreground">{user.lastLogin}</div>
                <div className="hidden md:block space-x-2">
                  <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}