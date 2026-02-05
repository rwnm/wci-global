export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-bl-[100px]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase">
              Independent Synthetic Producer
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Advanced <br />
              <span className="text-blue-600">Synthetic</span> <br />
              Solutions.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg font-light">
              Engineering high-performance ECOSYN lubricants for the world's most demanding industrial applications. Precision-crafted, independent, and globally distributed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200">
                Explore Product Lines
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-medium rounded-lg hover:border-slate-900 transition-all duration-300">
                Technical Advice
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Main Visual Element */}
            <div className="relative z-10 aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
              {/* This would be a high-end industrial photo of a turbine or lubricant detail */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                 <div className="text-white opacity-20 text-9xl font-bold tracking-tighter">WCI</div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute bottom-8 -left-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                    E
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">ECOSYN™</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Premium Line</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engineered to withstand extreme pressures and temperatures in mission-critical hardware.
                </p>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
