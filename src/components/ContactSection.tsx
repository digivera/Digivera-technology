import { MapPin, Mail, Phone, Globe } from 'lucide-react';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-bgDark py-20 md:py-28 px-8 md:px-16 lg:px-24">
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accentCyan font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
            Contact Us
          </h2>
          <p className="text-textMuted text-base md:text-lg font-body max-w-2xl mx-auto">
            Ready to accelerate your digital transformation? Let's talk.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Location */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-6 flex items-center gap-5 hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-accentCyan/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-accentCyan" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-white font-body text-base md:text-lg">India</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-6 flex items-center gap-5 hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-accentCyan/10 flex items-center justify-center flex-shrink-0">
              <Mail className="text-accentCyan" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-1">
                Email
              </p>
              <p className="text-white font-body text-base md:text-lg">
                info@digivera.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-6 flex items-center gap-5 hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-accentCyan/10 flex items-center justify-center flex-shrink-0">
              <Phone className="text-accentCyan" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-1">
                Phone
              </p>
              <p className="text-white font-body text-base md:text-lg">
                +91-XXXXXXXXXX
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="bg-[#131f2f] rounded-2xl border border-white/5 p-6 flex items-center gap-5 hover:bg-[#1a2738] transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-accentCyan/10 flex items-center justify-center flex-shrink-0">
              <Globe className="text-accentCyan" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-1">
                Website
              </p>
              <p className="text-white font-body text-base md:text-lg">
                www.digivera.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}