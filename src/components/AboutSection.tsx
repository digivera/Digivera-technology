import React from 'react';
export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#f4f5f7] py-20 md:py-28 px-8 md:px-16 lg:px-24">
      
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accentCyan font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
          About Us
        </p>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#2d2d2d] leading-tight mb-8">
          Your Trusted Technology Partner
        </h2>

        <p className="text-[#7a7f8e] text-base md:text-lg leading-relaxed font-body">
          Digivera Technologies India Pvt. Ltd. is a forward-looking technology
          and business solutions company delivering integrated IT, automation,
          customer support, and workforce management services. We enable
          organizations to accelerate digital transformation, optimize
          operations, and enhance customer experiences through innovative and
          scalable solutions.
        </p>
      </div>
    </section>);

}