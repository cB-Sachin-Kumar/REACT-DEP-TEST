import { Users, Activity, BarChart3, Settings } from "lucide-react";
import QuickActions from "../../components/dashboard/QuickActionCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import StatusCard from "../../components/dashboard/StatusCard";

const DashboardContainer = () => {
  const handleManageSettings = () => {
    alert("Manage Settings clicked!");
  };
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      color: "bg-blue-500",
      change: "+12%",
    },
    {
      title: "Active Sessions",
      value: "892",
      icon: Activity,
      color: "bg-green-500",
      change: "+8%",
    },
    {
      title: "New Registrations",
      value: "156",
      icon: BarChart3,
      color: "bg-purple-500",
      change: "+24%",
    },
    {
      title: "System Health",
      value: "99.9%",
      icon: Settings,
      color: "bg-orange-500",
      change: "+0.1%",
    },
  ];
  const actions = [
    { label: "Add User", icon: Users, color: "bg-blue-500" },
    {
      label: "Manage Settings",
      icon: Settings,
      color: "bg-orange-500",
      onClick: handleManageSettings,
    },
    { label: "View Reports", icon: BarChart3, color: "bg-purple-500" },
    {
      label: "Monitor Activity",
      icon: Activity,
      color: "bg-green-500",
    },
    { label: "Submit Proposal", icon: Users, color: "bg-blue-500" },
    {
      label: "Manage Data",
      icon: Settings,
      color: "bg-blue-500",
    },
    {
      label: "Download Reports",
      icon: BarChart3,
      color: "bg-purple-500",
    },
    {
      label: "Application Checklist",
      icon: Activity,
      color: "bg-green-500",
    },
  ];
  const recent = [
    {
      action: "payment processed to Sachin",
      who: "john.doe@example.com",
      when: "2 min ago",
    },
    { action: "System backup completed", who: "System", when: "15 min ago" },
    {
      action: "Security scan finished",
      who: "Security Bot",
      when: "1 hour ago",
    },
    { action: "Database optimized", who: "Admin", when: "2 hours ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 text-white">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-blue-100">
          Quick demo view for testing layout and wiring
        </p>
      </div>
      {/* STATUS CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatusCard key={i} {...s} />
          // {...s}This is the spread operator.It takes all properties from the object s and passes them as props.
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RECENT ACTIVITY CARD */}
        <RecentActivity items={recent} />
        {/* QUICK ACTIONS CARD */}
        <QuickActions
          title="Quick Actions"
          onManageSettings={handleManageSettings}
          actions={actions}
        />
      </div>
    </div>
  );
};

export default DashboardContainer;
