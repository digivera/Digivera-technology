import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConsultationForm from '../components/Consultationform';

const FAQ_ITEMS = [
  {
    id: 'faq1',
    question: 'What does Digivera Technologies do?',
    answer:
      'Digivera Technologies India Pvt. Ltd. is a forward-looking technology and business solutions company delivering integrated IT, automation, customer support, and workforce management services.',
  },
  {
    id: 'faq2',
    question: 'How do you scope engagements?',
    answer:
      'Plans vary by scope. Our team scopes engagements as Fixed Cost, Time & Material, Dedicated Resources, or AMC depending on your goals and timeline.',
  },
  {
    id: 'faq3',
    question: 'Where do I start?',
    answer:
      'Reach out using the contact details below. We schedule a discovery call, audit your current operations, and propose a structured roadmap aligned to your business outcomes.',
  },
];

const PHONES = [
  { label: '+91 87962 94441', href: 'tel:+918796294441' },
  { label: '+91 87962 94442', href: 'tel:+918796294442' },
];

const FAQ = () => {
  // Controlled accordion: no dependency on Bootstrap's JS, works with React Router
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => setOpenId((current) => (current === id ? null : id));

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="row gy-4 gy-lg-0 align-items-start">
            {/* Left column */}
            <div className="col-12 col-lg-5">
              <div className="digi-about-content wow fadeInLeft">
                <div className="digi-about-tag">FAQ</div>
                <h2 className="digi-about-title">
                  MOST COMMON QUESTIONS <span>ABOUT OUR SERVICES</span>
                </h2>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/services" className="btn btn-custom btn-blue">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="col-12 col-lg-7">
              <div className="accordion wow fadeInRight" id="faqAccordion">
                {FAQ_ITEMS.map(({ id, question, answer }) => {
                  const isOpen = openId === id;
                  return (
                    <div className="accordion-item" key={id}>
                      <h3 className="accordion-header" id={`${id}-heading`}>
                        <button type="button" className={`accordion-button${isOpen ? '' : ' collapsed'}`} aria-expanded={isOpen} aria-controls={`${id}-panel`} onClick={() => toggle(id)} >
                          {question}
                        </button>
                      </h3>
                      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-heading`} className={`accordion-collapse collapse${isOpen ? ' show' : ''}`} >
                        <div className="accordion-body">{answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm />

      <section className="cta-section dark_bg">
        <div className="container">
          <div className="cta-out">
            <div className="cta-box wow fadeInUp">
              <div className="row align-items-center gy-4">
                <div className="col-12 col-lg-7">
                  <div className="digi-about-content">
                    <div className="digi-about-tag">GET IN TOUCH</div>
                    <h2 className="digi-about-title">
                      LET&apos;S BUILD SOMETHING <span>REMARKABLE.</span>
                    </h2>
                    <p className="digi-subtitle-text">
                      Talk to our team about your project, automation needs or workforce requirements.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-lg-5">
                  <div className="digi-phone">
                    <p>
                      <i className="bi bi-headset" aria-hidden="true"></i>
                    </p>
                    <h5>TRUSTED BY 50+ HAPPY CUSTOMERS</h5>
                    <h3>
                      <a href={PHONES[0].href}>{PHONES[0].label}</a>
                    </h3>
                    <p>
                      <a href={PHONES[1].href}>{PHONES[1].label}</a>
                    </p>
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

export default FAQ;