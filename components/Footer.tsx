export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-32 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xs italic">
                WCI
              </div>
              <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase">Wipa Chemicals</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              WIPA CHEMICALS INTERNATIONAL is an independent synthetic lubricant producer and specialist based in Belgium, serving global industrial markets.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">ECOSYN™ Compressor</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">ECOSYN™ Vacuum</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">ECOSYN™ Gas Engine</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Specialty Fluids</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Technical Advice</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest">Global Reach</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-light mb-4">
              Authorized distributors on every continent.
            </p>
            <button className="text-blue-600 text-sm font-bold hover:underline">
              Find a Distributor ↗
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">© 2026 WIPA Chemicals International. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900">Terms of Service</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
