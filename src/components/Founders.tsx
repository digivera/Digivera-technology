import { useCallback, useState } from 'react';

interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
  summary: string;
  details: string[];
  animation: string;
}

const FOUNDERS: Founder[] = [
  {
    id: 'gourav',
    name: 'Gourav Sharma',
    role: 'Co-Founder & Director, DigiVera Group',
    image: '/assets/img/gourav.webp',
    animation: 'fadeInUp',
    summary:
      'Gourav Sharma is the Co-Founder and Director of DigiVera Group, a next-generation technology organization delivering innovative solutions in digital transformation, cloud engineering, automation, AI-enabled services, cybersecurity, and IT consulting.',
    details: [
      'With over 23 years of global IT industry experience, Gourav has successfully led large-scale technology programs across cloud transformation, operational resilience, infrastructure management, compliance, client engagement, and critical escalation management. His expertise spans technology operations, service delivery, and enterprise modernization for global organizations across diverse industries.',
      'Founded with a vision to build a trusted and future-ready technology company, DigiVera Group helps businesses accelerate digital adoption through intelligent automation, cloud solutions, managed IT services, cybersecurity, staff augmentation, and strategic technology consulting. The organization is committed to delivering scalable, reliable, and customer-centric digital solutions that drive business growth and operational excellence.',
    ],
  },
  {
    id: 'shailender',
    name: 'Shailender K. Chauhan',
    role: 'Technical Advisor & IT Delivery Leader, DigiVera Technologies India',
    image: '/assets/img/shailender.webp',
    animation: 'fadeInRight',
    summary:
      'Shailender K. Chauhan is the Technical Advisor & IT Delivery Leader at DigiVera Technologies, India, bringing over 20 years of end-to-end technology delivery, program governance, and digital transformation leadership to every client engagement.',
    details: [
      'A seasoned technology executive, Shailender has led delivery organisations of 140+ engineers, project managers, and consultants across BFSI, Healthcare, Fintech, Mortgage, and IT Services, consistently delivering complex, multi-portfolio programs on time and within budget. His expertise spans cloud platforms (AWS, Azure, Oracle Cloud), data engineering (ETL, MDM, CDP, Pimcore), enterprise SaaS, AI/GenAI analytics, DevOps transformation, iPaaS integrations (Boomi, MuleSoft), and ITIL-aligned service management.',
      'Before DigiVera, Shailender held SVP and VP-level technology delivery and PMO roles at organisations including Flentis India, Navisite (an Accenture company), and DXC Technology, and worked with multi-million-dollar clients such as Dassault Systèmes, CBRE, HUDCO (Govt of India) and Dunlop Sports America (DSA). There he scaled delivery organisations, established enterprise-wide PMO governance frameworks, and drove 20–30% improvements in delivery predictability and on-time milestone achievement. He holds an MBA from Amity University, a degree in Computer Science & Engineering, and eight professional certifications, including PMP, PRINCE2 Practitioner, ITIL Foundation, EXIN DevOps Master, and Microsoft Azure Infrastructure.',
    ],
  },
];

const About = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = useCallback((id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section className="founders-section py-5 overflow-hidden" aria-labelledby="founders-heading">
      <div className="container">
        <header className="digi-about-content text-center full-w mb-4 mb-md-5">
          <div className="digi-about-tag">FOUNDERS</div>

          <h2 id="founders-heading" className="digi-about-title">
            THE MINDS DRIVING <span>OUR SUCCESS</span>
          </h2>

          <p className="digi-subtitle-text mx-auto col-12 col-md-8 col-lg-6">
            Meet the founders whose passion, expertise, and leadership continue to shape our journey.
          </p>
        </header>

        {/* 1 column on phones & tablets, 2 columns from lg (≥992px) */}
        <div className="row g-4 align-items-start">
          {FOUNDERS.map((f) => {
            const isOpen = !!expanded[f.id];
            const detailsId = `details-${f.id}`;

            return (
              <div className="col-12 col-lg-6" key={f.id}>
                <article className={`founder-card card shadow-sm border-0 wow ${f.animation}`} >
                  <div className="card-body p-3 p-md-4">
                    <div className="row g-3 align-items-start">
                      {/* Image: centered half-width on phones, 1/3 beside text from sm up */}
                      <div className="col-6 col-sm-4 mx-auto">
                        <img src={f.image} className="founder-img img-fluid rounded w-100 object-fit-cover" alt={`Portrait of ${f.name}`} width={240} height={300} loading="lazy" decoding="async" />
                      </div>

                      {/* Text: centered on phones, left-aligned from sm up */}
                      <div className="col-12 col-sm-8 text-center text-sm-start">
                        <h3 className="h5 fw-bold mb-1">{f.name}</h3>
                        <p className="text-muted small mb-2">{f.role}</p>

                        <p className="mb-2">{f.summary}</p>

                        <div id={detailsId} className={`collapse ${isOpen ? 'show' : ''}`}>
                          {f.details.map((para, i) => (
                            <p key={i} className="mb-2">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Full-width button on phones, auto width from sm up */}
                        <div className="d-grid d-sm-block mt-2">
                          <button type="button" className="btn btn-custom btn-green btn-sm toggle-btn" onClick={() => toggle(f.id)} aria-expanded={isOpen} aria-controls={detailsId} >
                            {isOpen ? 'READ LESS' : 'READ MORE'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;