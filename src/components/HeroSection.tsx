import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
      <div className="max-w-3xl">
        <p className="text-accentCyan font-medium text-xs md:text-sm uppercase tracking-widest mb-5">
          Digivera Technologies India Pvt. Ltd.
        </p>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
          Driving <span className="text-accentCyan">Innovation</span> &amp;{' '}
          <span className="text-accentCyan">Automation</span> for Secure,
          Sustainable Growth
        </h1>

        <p className="text-textMuted text-base md:text-lg max-w-2xl leading-relaxed mb-10 font-body">
          Integrated IT, automation, customer support, and workforce management
          services — accelerating digital transformation for businesses
          worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/services"
            className="flex items-center justify-center gap-2 bg-accentCyan hover:bg-[#00b4d4] text-bgDark font-semibold px-8 py-3.5 rounded-md transition-colors duration-200 font-body focus:outline-none focus:ring-2 focus:ring-accentCyan focus:ring-offset-2 focus:ring-offset-bgDark">
            
            Explore Services <ArrowRightIcon size={20} strokeWidth={2.5} />
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-200 font-body focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bgDark">
            
            Contact Us
          </Link>
        </div>

        <p className="text-textMuted text-base md:text-lg max-w-2xl leading-relaxed mt-10 font-body">
          DigiVera Technologies India Pvt. Ltd. is a technology and business
          services firm focused on enabling secure, scalable, and sustainable
          digital transformation. With strengths across software engineering,
          AI-led operations, IT service management, cybersecurity, BPO, and
          workforce management, DigiVera partners with enterprises and
          growth-stage companies to improve efficiency, resilience, and customer
          experience. Our delivery model emphasizes measurable outcomes,
          regulatory compliance, and cost optimization, positioning DigiVera as
          a long-term strategic partner for global clients.
        </p>
      </div>
    </section>);

}