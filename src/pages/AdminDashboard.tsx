import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Server,
  Users,
  Globe,
  CreditCard,
  Settings,
  LogOut,
  TrendingUp,
  Activity,
  HardDrive,
  BarChart3,
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Users", value: "2,543", change: "+12%", icon: Users },
    { label: "Active VPS", value: "1,234", change: "+8%", icon: Server },
    { label: "Domains", value: "856", change: "+15%", icon: Globe },
    { label: "Revenue", value: "$45,231", change: "+23%", icon: CreditCard },
  ];

  const recentOrders = [
    { id: "#12345", user: "john@example.com", product: "VPS Standard", amount: "$15.00", status: "Active" },
    { id: "#12344", user: "jane@example.com", product: "Web Hosting Pro", amount: "$20.00", status: "Active" },
    { id: "#12343", user: "bob@example.com", product: "Domain .com", amount: "$10.99", status: "Pending" },
    { id: "#12342", user: "alice@example.com", product: "VPS Enterprise", amount: "$80.00", status: "Active" },
  ];

  const sidebarLinks = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Users, label: "Users" },
    { icon: Server, label: "VPS Servers" },
    { icon: Globe, label: "Hosting" },
    { icon: HardDrive, label: "Domains" },
    { icon: CreditCard, label: "Billing" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/30 bg-card/30 flex flex-col">
        <div className="p-4 border-b border-border/30">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Server className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              is<span className="gradient-text">project</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    link.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-border/30">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border/30 bg-card/30 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
            </div>
            <Button variant="hero" size="sm">
              <Activity className="w-4 h-4 mr-2" />
              View Reports
            </Button>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border/30">
              <h2 className="font-display text-lg font-semibold text-foreground">Recent Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Order ID</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Product</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="border-b border-border/30 last:border-0">
                      <td className="p-4 text-sm font-medium text-foreground">{order.id}</td>
                      <td className="p-4 text-sm text-muted-foreground">{order.user}</td>
                      <td className="p-4 text-sm text-foreground">{order.product}</td>
                      <td className="p-4 text-sm font-medium text-foreground">{order.amount}</td>
                      <td className="p-4">
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === "Active"
                              ? "bg-green-500/10 text-green-400"
                              : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
