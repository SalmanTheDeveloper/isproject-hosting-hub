import { Zap, Shield, Clock, Headphones, HardDrive, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "NVMe SSD storage and optimized networks for blazing speed",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Enterprise-grade protection against attacks included free",
    },
    {
      icon: Clock,
      title: "Instant Deploy",
      description: "Get your server up and running in under 60 seconds",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert technical support available around the clock",
    },
    {
      icon: HardDrive,
      title: "Daily Backups",
      description: "Automatic daily backups with easy one-click restore",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "10+ data centers worldwide for optimal latency",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">isproject</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for developers and businesses who demand reliability, speed, and exceptional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
