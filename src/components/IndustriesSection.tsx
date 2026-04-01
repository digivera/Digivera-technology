import {
  Heart,
  Monitor,
  Landmark,
  ShoppingCart,
  Factory,
  Rocket } from
'lucide-react';
export function IndustriesSection() {
  return (
    <section className="w-full bg-bgDark py-20 md:py-28 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accentCyan font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
            Who We Serve
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
            Industries
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Healthcare */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1a3644] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart size={32} className="text-accentCyan" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Healthcare
            </h3>
          </div>

          {/* IT & ITES */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1a3644] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Monitor
                size={32}
                className="text-accentCyan"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              IT & ITES
            </h3>
          </div>

          {/* Banking & Finance */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1a3644] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Landmark
                size={32}
                className="text-accentCyan"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Banking & Finance
            </h3>
          </div>

          {/* Retail & E-commerce */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1a3644] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart
                size={32}
                className="text-accentCyan"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Retail & E-commerce
            </h3>
          </div>

          {/* Manufacturing */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1a3644] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Factory
                size={32}
                className="text-accentCyan"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Manufacturing
            </h3>
          </div>

          {/* Startups & SMEs */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-10 flex flex-col items-center justify-center text-center group hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1a3644] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket size={32} className="text-accentCyan" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">
              Startups & SMEs
            </h3>
          </div>
        </div>
      </div>
    </section>);

}