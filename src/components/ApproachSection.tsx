import React from 'react';
import { ArrowRight } from 'lucide-react';
export function ApproachSection() {
  return (
    <section className="w-full bg-[#f8f9fa] pb-20 md:pb-28 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-accentCyan font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
            Our Approach
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#2d2d2d] leading-tight">
            Structured & Agile Methodology
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-y-8 gap-x-4 md:gap-x-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0066cc] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              1
            </div>
            <span className="font-heading text-xl font-bold text-[#2d2d2d]">
              Discover
            </span>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={20} />

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0066cc] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              2
            </div>
            <span className="font-heading text-xl font-bold text-[#2d2d2d]">
              Design
            </span>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={20} />

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0066cc] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              3
            </div>
            <span className="font-heading text-xl font-bold text-[#2d2d2d]">
              Develop
            </span>
          </div>
          <ArrowRight className="text-gray-400 hidden lg:block" size={20} />

          {/* Step 4 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0066cc] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              4
            </div>
            <span className="font-heading text-xl font-bold text-[#2d2d2d]">
              Deploy
            </span>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={20} />

          {/* Step 5 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0066cc] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              5
            </div>
            <span className="font-heading text-xl font-bold text-[#2d2d2d]">
              Support
            </span>
          </div>
          <ArrowRight className="text-gray-400 hidden sm:block" size={20} />

          {/* Step 6 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0066cc] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              6
            </div>
            <span className="font-heading text-xl font-bold text-[#2d2d2d]">
              Manage
            </span>
          </div>
        </div>
      </div>
    </section>);

}