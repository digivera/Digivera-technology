import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="w-full bg-bgDark border-t border-white/5 py-12 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* Left — Branding */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-3">
            DigiVera
          </h3>
          <p className="text-textMuted text-sm leading-relaxed font-body">
            Integrated IT, automation, customer support, and workforce management
services — accelerating digital transformation for businesses worldwide.
          </p>
        </div>

        {/* Center — Contact Details */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-4">
            Contact Details
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPinIcon
                className="text-textMuted mt-0.5 flex-shrink-0"
                size={18}
                strokeWidth={1.5} />
              
              <span className="text-textMuted text-sm font-body">
                Noida, Uttar Pradesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon
                className="text-textMuted flex-shrink-0"
                size={18}
                strokeWidth={1.5} />
              
              <span className="text-textMuted text-sm font-body">+91 9958795117</span>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon
                className="text-textMuted flex-shrink-0"
                size={18}
                strokeWidth={1.5} />
              
              <span className="text-textMuted text-sm font-body">
                digiveratecnologoies@gmail.com
              </span>
            </li>
          </ul>
        </div>

        {/* Right — Compliance */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white mb-3">
            Compliance
          </h3>
          <p className="text-textMuted text-sm font-body mt-1">
            © 2026 DigiVera Healthcare Services LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}