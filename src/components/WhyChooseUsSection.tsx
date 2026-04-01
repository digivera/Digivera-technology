import React from 'react';
import { CheckCircle2 } from 'lucide-react';
export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 md:py-28 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-accentCyan font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
            Why Digivera
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#2d2d2d] leading-tight">
            Why Choose Us?
          </h2>
        </div>

        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-4">
            <CheckCircle2
              className="text-accentCyan flex-shrink-0"
              size={24}
              strokeWidth={2} />
            
            <span className="text-[#7a7f8e] text-lg font-body">
              Multi-domain expertise across IT, BPO, and workforce management
            </span>
          </li>
          <li className="flex items-center gap-4">
            <CheckCircle2
              className="text-accentCyan flex-shrink-0"
              size={24}
              strokeWidth={2} />
            
            <span className="text-[#7a7f8e] text-lg font-body">
              Agile and scalable execution model
            </span>
          </li>
          <li className="flex items-center gap-4">
            <CheckCircle2
              className="text-accentCyan flex-shrink-0"
              size={24}
              strokeWidth={2} />
            
            <span className="text-[#7a7f8e] text-lg font-body">
              Skilled professionals and industry experience
            </span>
          </li>
          <li className="flex items-center gap-4">
            <CheckCircle2
              className="text-accentCyan flex-shrink-0"
              size={24}
              strokeWidth={2} />
            
            <span className="text-[#7a7f8e] text-lg font-body">
              Strong focus on innovation, automation, and compliance
            </span>
          </li>
          <li className="flex items-center gap-4">
            <CheckCircle2
              className="text-accentCyan flex-shrink-0"
              size={24}
              strokeWidth={2} />
            
            <span className="text-[#7a7f8e] text-lg font-body">
              Reliable long-term support and partnership approach
            </span>
          </li>
        </ul>
      </div>
    </section>);

}