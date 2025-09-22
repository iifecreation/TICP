import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, FileText, Shield, TrendingUp, Settings, Bell, Plus } from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    current: true
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
    current: false
  },
  {
    name: "Certificates",
    href: "/dashboard/certificates",
    icon: Shield,
    current: false
  },
  {
    name: "Claims",
    href: "/dashboard/claims",
    icon: TrendingUp,
    current: false
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    current: false
  }
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("insurer");
  // Responsive nav state
  const [mobileOpen, setMobileOpen] = useState(false);
  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-heading">TICP</h1>
                <p className="text-sm text-muted-foreground">NIIRA 2025 - Insurance Compliance Hub</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  // Add any logout logic here (e.g., clearing tokens)
                  navigate("/login");
                }}
              >
                logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Navigation */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-6">
          {/* Mobile nav toggle */}
          <div className="flex items-center justify-between md:hidden py-2">
            <span className="font-semibold text-lg">Menu</span>
            <button
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 text-sm font-medium transition-colors
                    ${isActive 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
          {/* Mobile nav drawer */}
          {typeof window !== 'undefined' && (
            <div
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onClick={() => setMobileOpen(false)}
              aria-hidden={!mobileOpen}
            >
              <nav
                className={`fixed left-0 top-0 h-full w-64 bg-background shadow-lg transform transition-transform duration-300 z-50 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={e => e.stopPropagation()}
                aria-label="Dashboard navigation"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <span className="font-bold text-lg">TICP</span>
                  <button
                    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Close navigation menu"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col px-6 py-4 space-y-2">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-2 py-2 px-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
                        onClick={() => setMobileOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>


      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}