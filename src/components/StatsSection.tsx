const StatsSection = () => {
  const stats = [
    { value: "99.99%", label: "Uptime" },
    { value: "50K+", label: "Customers" },
    { value: "10+", label: "Data Centers" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-20 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
