import { Eye, Target } from 'lucide-react';
export function VisionMissionSection() {
  return (
    <section className="w-full bg-[#f4f5f7] pb-20 md:pb-28 px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Our Vision Card */}
        <div className="bg-white rounded-xl border border-gray-200/60 p-8 md:p-10">
          <div className="w-12 h-12 rounded-lg bg-accentCyan/10 flex items-center justify-center mb-5">
            <Eye size={24} className="text-accentCyan" />
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-3">
            Our Vision
          </h3>
          <p className="text-[#7a7f8e] text-base leading-relaxed font-body">
            To be a globally recognized technology and business solutions
            provider, driving innovation, efficiency, and digital excellence.
          </p>
        </div>

        {/* Our Mission Card */}
        <div className="bg-white rounded-xl border border-gray-200/60 p-8 md:p-10">
          <div className="w-12 h-12 rounded-lg bg-accentCyan/10 flex items-center justify-center mb-5">
            <Target size={24} className="text-accentCyan" />
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-3">
            Our Mission
          </h3>
          <p className="text-[#7a7f8e] text-base leading-relaxed font-body">
            To deliver high-quality, scalable, and secure solutions that empower
            businesses to grow, streamline operations, and remain compliant in
            an evolving digital landscape.
          </p>
        </div>
      </div>
    </section>);

}