import { useState } from 'react';

const About = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <>






      <section className="founders-section">
        <div className="container">

          <div className="digi-about-content text-center full-w">

            <div className="digi-about-tag">
              FOUNDERS
            </div>

            <h2 className="digi-about-title">
              THE MINDS DRIVING  <span>OUR SUCCESS</span>
            </h2>

            <p className="digi-subtitle-text">
              Meet the founders whose passion, expertise, and leadership continue to shape our journey.
            </p>
          </div>


          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="founder-card wow fadeInLeft" data-wow-delay="0.1s">
                <div className="row g-3 align-items-center">

                  <div className="col-4">
                    <img src="/assets/img/ritesh.jpg" className="img-fluid founder-img" alt="" />
                  </div>

                  <div className="col-8">
                    <h5>RITESH SHARMA</h5>

                    <p className="short-text">
                      Ritesh Sharma is a seasoned director with over 15 years of leadership experience in the Pharmaceutical and Training sectors. Holding an MSc in Biochemistry from H.N.B...
                    </p>

                    <p className={`full-text ${expandedCards.ritesh ? '' : 'd-none'}`}>
                      Garhwal University, he combines a strong scientific foundation with proven expertise in  operations management, product development, and team leadership. Throughout his career at Tianjin Tianshi India Pvt Ltd, he spearheaded CI/CD automation, drove engineering excellence, and managed end-to-end product development processes. Ritesh is committed to advancing research and innovation that improves quality of life — bringing analytical rigour, strategic thinking, and a collaborative approach to every initiative she leads.
                    </p>

                    <button className="btn btn-custom btn-green btn-sm toggle-btn" onClick={() => toggleCard('ritesh')}>
                      {expandedCards.ritesh ? 'READ LESS' : 'READ MORE'}
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="founder-card wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-3 align-items-center">

                  <div className="col-4">
                    <img src="/assets/img/gourav.jpg" className="img-fluid founder-img" alt="" />
                  </div>

                  <div className="col-8">
                    <h5>GOURAV SHARMA</h5>

                    <p className="short-text">
                      Gourav Sharma is the Co-Founder and Director of DigiVera Group, a next-generation technology organization delivering innovative solutions in digital transformation, cloud engineering, automation,..
                    </p>

                    <p className={`full-text ${expandedCards.gourav ? '' : 'd-none'}`}>
                      AI-enabled services, cybersecurity, and IT consulting. With over 23 years of global IT industry experience, Gourav has successfully led large-scale technology programs across cloud transformation, operational resilience, infrastructure management, compliance, client engagement, and critical escalation management. His expertise spans technology operations, service delivery, and enterprise modernization for global organizations across diverse industries.<br /><br />

                      Founded with a vision to build a trusted and future-ready technology company, DigiVera Group helps businesses accelerate digital adoption through intelligent automation, cloud solutions, managed IT services, cybersecurity, staff augmentation, and strategic technology consulting. The organization is committed to delivering scalable, reliable, and customer-centric digital solutions that drive business growth and operational excellence.
                    </p>

                    <button className="btn btn-custom btn-green btn-sm toggle-btn" onClick={() => toggleCard('gourav')}>
                      {expandedCards.gourav ? 'READ LESS' : 'READ MORE'}
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="founder-card wow fadeInRight" data-wow-delay="0.1s">
                <div className="row g-3 align-items-center">

                  <div className="col-4">
                    <img src="/assets/img/shailender.jpg" className="img-fluid founder-img" alt="" />
                  </div>

                  <div className="col-8">
                    <h5>SHAILENDER</h5>

                    <p className="short-text">
                      Shailender K. Chauhan is the Technical Advisor &amp; IT Delivery Leader at DigiVera Technologies, India bringing over 20 years of end-to-end technology delivery, program governance,..
                    </p>

                    <p className={`full-text ${expandedCards.shailender ? '' : 'd-none'}`}>
                      and digital transformation leadership to every client engagement. A seasoned technology executive, Shailender has led delivery organisations of 140+ engineers, project managers, and consultants across BFSI, Healthcare, Fintech, Mortgage, and IT Services — consistently delivering complex, multi-portfolio programs on time and within budget. His expertise spans cloud platforms (AWS, Azure, Oracle Cloud), data engineering (ETL, MDM, CDP, Pimcore), enterprise SaaS, AI/GenAI analytics, DevOps transformation, iPaaS integrations (Boomi, MuleSoft), and ITIL-aligned service management.<br /><br />
                      Before DigiVera, Shailender held SVP and VP-level technology delivery and PMO roles at organisations including Flentis India, Navisite (an Accenture company), DXC Technology and for various muli million dollars client like Dassault system, CBRE, HUDCO (Govt of India) &amp; Dunlop Sports America(DSA)  where he scaled delivery organizations, established enterprise-wide PMO governance frameworks, and drove 20–30% improvements in delivery predictability and on-time milestone achievement. He holds an MBA from Amity University, a degree in Computer Science &amp; Engineering, and eight professional certifications — including PMP, PRINCE2 Practitioner, ITIL Foundation, EXIN DevOps Master, and Microsoft Azure Infrastructure.
                    </p>

                    <button className="btn btn-custom btn-green btn-sm toggle-btn" onClick={() => toggleCard('shailender')}>
                      {expandedCards.shailender ? 'READ LESS' : 'READ MORE'}
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
};

export default About;
