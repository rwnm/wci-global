export default function Services() {
  const services = [
    {
      title: "Technical Advice",
      desc: "Our tribologists provide in-depth support for equipment development and commissioning.",
      details: ["Application Analysis", "System Optimization", "Tribology Studies"]
    },
    {
      title: "Tailor Made Blends",
      desc: "Custom formulations for unique applications not covered by standard product lines.",
      details: ["Private Labeling", "Custom Viscosities", "Additive Tuning"]
    },
    {
      title: "Oil Analysis",
      desc: "Comprehensive diagnostic programs to monitor equipment health and fluid longevity.",
      details: ["Wear Meta Analysis", "Contamination Tracking", "Predictive Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">Specialized Support</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Beyond the Product.
          </h2>
          <p className="text-lg text-slate-600 font-light">
            We provide the technical expertise needed to ensure your systems run at peak efficiency with zero unplanned downtime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                    0{i+1}
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
              </div>
              <p className="text-slate-500 mb-8 font-light leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mt-auto border-t border-slate-100 pt-8">
                {service.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
