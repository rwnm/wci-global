export default function Metrics() {
  const stats = [
    { label: "Global Reach", value: "60+", sub: "Countries" },
    { label: "Product Lines", value: "150+", sub: "Specialized Fluids" },
    { label: "Experience", value: "30+", sub: "Years of Engineering" },
    { label: "Independence", value: "100%", sub: "Owner Operated" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 group">
              <div className="text-5xl font-bold tracking-tight text-blue-400 group-hover:text-white transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 italic">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
