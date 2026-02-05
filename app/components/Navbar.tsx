export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xs italic">
            WCI
          </div>
          <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase">Wipa Chemicals</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Products</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Services</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Industries</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">About</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400">
             <span>EN</span> | <span>DE</span> | <span>NL</span>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-slate-900 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
