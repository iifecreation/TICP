import { Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHome from "./DashboardHome";
import Reports from "./Reports";
import Certificates from "./Certificates";
import Claims from "./Claims";
import Settings from "./Settings";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  );
}