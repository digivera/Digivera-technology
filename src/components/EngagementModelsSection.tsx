import React from 'react';
export function EngagementModelsSection() {
  return (
    <section className="w-full bg-[#f8f9fa] pb-20 md:pb-28 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200/60 p-8 md:p-12 shadow-sm">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-8">
            Engagement Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accentCyan flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base md:text-lg font-body">
                  Fixed Cost Projects
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accentCyan flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base md:text-lg font-body">
                  Dedicated Resources
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accentCyan flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base md:text-lg font-body">
                  Workforce Outsourcing
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accentCyan flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base md:text-lg font-body">
                  Time & Material
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accentCyan flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base md:text-lg font-body">
                  Per Seat / Per Agent
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accentCyan flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base md:text-lg font-body">
                  AMC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}