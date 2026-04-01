import {
  CodeIcon,
  BrainIcon,
  WorkflowIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
  HeadphonesIcon,
  LifeBuoyIcon,
  UsersIcon } from
'lucide-react';
export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-[#f4f6f8] py-20 md:py-28 px-8 md:px-16 lg:px-24">
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accentCyan font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
            What We Do
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#2d2d2d] leading-tight mb-6">
            Services
          </h2>

          <p className="text-[#7a7f8e] text-base md:text-lg leading-relaxed font-body max-w-2xl mx-auto">
            End-to-end technology, support, and workforce management solutions
            under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Software Development */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <CodeIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Software Development
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Web & Mobile App Development
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Enterprise Software Solutions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  API Development & System Integration
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: AI Solutions */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <BrainIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              AI Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Predictive Analytics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  AI Chatbots & Virtual Assistants
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Data Intelligence & Insights
                </span>
              </li>
            </ul>
          </div>

          {/* Card 3: Automation Solutions */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <WorkflowIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Automation Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Robotic Process Automation (RPA)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Workflow Automation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Process Optimization
                </span>
              </li>
            </ul>
          </div>

          {/* Card 4: Digital Marketing */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <MegaphoneIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Digital Marketing
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  SEO & Performance Marketing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Social Media Marketing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Lead Generation
                </span>
              </li>
            </ul>
          </div>

          {/* Card 5: Cybersecurity */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <ShieldCheckIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Cybersecurity
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">VAPT</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Network & Application Security
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Security Audits & Risk Management
                </span>
              </li>
            </ul>
          </div>

          {/* Card 6: Compliance & Risk */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <ClipboardCheckIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Compliance & Risk
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Compliance Consulting
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Policy Development
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Audit Support & Risk Assessment
                </span>
              </li>
            </ul>
          </div>

          {/* Card 7: Call Center / BPO */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <HeadphonesIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Call Center / BPO
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Inbound & Outbound Call Services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Customer Support Operations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Back Office Processing
                </span>
              </li>
            </ul>
          </div>

          {/* Card 8: Helpdesk & IT Support */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <LifeBuoyIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Helpdesk & IT Support
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  IT Infrastructure Support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Remote & On-site Assistance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Incident Management
                </span>
              </li>
            </ul>
          </div>

          {/* Card 9: Workforce Management */}
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#eef6ff] flex items-center justify-center mb-6">
              <UsersIcon
                size={28}
                className="text-[#0070f3]"
                strokeWidth={1.5} />
              
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d] mb-5">
              Workforce Management
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Staffing & Manpower Outsourcing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  Payroll & Attendance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentCyan mt-2 flex-shrink-0"></div>
                <span className="text-[#7a7f8e] text-base font-body">
                  HR Operations & Compliance
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

}