import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Server, Globe, Shield } from "lucide-react";
import { useState } from "react";

type PricingCategory = "vps" | "hosting" | "domains";

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>("vps");

  const vpsPlans = [
    {
      name: "Starter",
      price: 5,
      specs: ["1 vCPU", "1 GB RAM", "25 GB SSD", "1 TB Bandwidth"],
      popular: false,
    },
    {
      name: "Standard",
      price: 15,
      specs: ["2 vCPU", "4 GB RAM", "80 GB SSD", "4 TB Bandwidth"],
      popular: true,
    },
    {
      name: "Pro",
      price: 40,
      specs: ["4 vCPU", "8 GB RAM", "160 GB SSD", "6 TB Bandwidth"],
      popular: false,
    },
    {
      name: "Enterprise",
      price: 80,
      specs: ["8 vCPU", "16 GB RAM", "320 GB SSD", "8 TB Bandwidth"],
      popular: false,
    },
  ];

  const hostingPlans = [
    {
      name: "Basic",
      price: 3,
      specs: ["1 Website", "10 GB Storage", "Free SSL", "Daily Backups"],
      popular: false,
    },
    {
      name: "Business",
      price: 8,
      specs: ["Unlimited Websites", "50 GB Storage", "Free SSL", "Priority Support"],
      popular: true,
    },
    {
      name: "Premium",
      price: 20,
      specs: ["Unlimited Websites", "200 GB Storage", "Free SSL", "Staging Environment"],
      popular: false,
    },
  ];

  const domainPricing = [
    { extension: ".com", price: 10.99, renewal: 12.99 },
    { extension: ".net", price: 11.99, renewal: 13.99 },
    { extension: ".org", price: 9.99, renewal: 11.99 },
    { extension: ".io", price: 39.99, renewal: 44.99 },
    { extension: ".dev", price: 14.99, renewal: 16.99 },
    { extension: ".app", price: 14.99, renewal: 16.99 },
  ];

  const categories = [
    { id: "vps" as const, label: "VPS Servers", icon: Server },
    { id: "hosting" as const, label: "Web Hosting", icon: Globe },
    { id: "domains" as const, label: "Domains", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include 24/7 support and a 30-day money-back guarantee.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass-card rounded-xl p-1.5 inline-flex gap-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* VPS Plans */}
          {activeCategory === "vps" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vpsPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-2xl p-6 relative ${
                    plan.popular ? "border-primary/50 glow-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Hosting Plans */}
          {activeCategory === "hosting" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {hostingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-2xl p-6 relative ${
                    plan.popular ? "border-primary/50 glow-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link to="/signup">
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Domain Pricing */}
          {activeCategory === "domains" && (
            <div className="max-w-3xl mx-auto">
              <div className="glass-card rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 font-display font-semibold text-foreground">
                        Extension
                      </th>
                      <th className="text-center p-4 font-display font-semibold text-foreground">
                        Registration
                      </th>
                      <th className="text-center p-4 font-display font-semibold text-foreground">
                        Renewal
                      </th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {domainPricing.map((domain, index) => (
                      <tr key={index} className="border-b border-border/30 last:border-0">
                        <td className="p-4">
                          <span className="font-display font-semibold text-foreground text-lg">
                            {domain.extension}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-foreground font-semibold">
                            ${domain.price}
                          </span>
                          <span className="text-muted-foreground text-sm">/year</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-muted-foreground">
                            ${domain.renewal}/year
                          </span>
                        </td>
                        <td className="p-4">
                          <Link to="/signup">
                            <Button variant="outline" size="sm">
                              Register
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
