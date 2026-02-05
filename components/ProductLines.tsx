export default function ProductLines() {
  const lines = [
    {
      title: "Compressor Fluids",
      desc: "Synthetic lubricants for rotary screw, vane, and centrifugal compressors.",
      icon: "⚙️",
    },
    {
      title: "Vacuum Pump Oil",
      desc: "Extreme low-volatility fluids for industrial vacuum applications.",
      icon: "🌀",
    },
    {
      title: "Gas Engine Oil",
      desc: "Optimized for high-temperature stability in power generation units.",
      icon: "⚡",
    },
    {
      title: "Hydraulic Fluids",
      desc: "High viscosity index synthetics for precision control systems.",
      icon: "💧",
    },
  ];

  return (
    <section id="products" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              The ECOSYN™ Portfolio.
            </h2>
            <p className="text-lg text-slate-600 font-light">
              We specialize in synthetic lubricants that outperform conventional oils in longevity, protection, and thermal stability.
            </p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300">
            View All Lines <span>→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lines.map((line, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                {line.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{line.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {line.desc}
              </p>
              <div className="w-10 h-1 bg-slate-100 group-hover:bg-blue-600 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
