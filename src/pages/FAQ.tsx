import { Link } from 'react-router-dom';


const FAQ = () => {
  return (
    <>




      <section className="faq-section">
        <div className="container">
          <div className="row">


            <div className="col-lg-5">

              <div className="digi-about-content wow fadeInLeft">

                <div className="digi-about-tag">
                  FAQ
                </div>

                <h2 className="digi-about-title">
                  MOST COMMON QUESTION <span>ABOUT OUR SERVICES</span>
                </h2>

              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/services" className="btn btn-custom btn-blue">Explore Services</Link>
              </div>


            </div>


            <div className="col-lg-7">

              <div className="accordion wow fadeInRight" id="faqAccordion">


                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What does Digivera Technologies do?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Digivera Technologies India Pvt. Ltd. is a forward-looking technology and business solutions company delivering integrated IT, automation, customer support, and workforce management services.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq2">
                    How do you scope engagements?
                  </button>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Plans vary by scope. Our team scopes engagements as Fixed Cost, Time & Material, Dedicated Resources, or AMC depending on your goals and timeline.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq3">
                    Where do I start?
                  </button>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Reach out via the contact details on the next page. We schedule a discovery call, audit your current operations, and propose a structured roadmap aligned to your business outcomes.
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="cta-section dark_bg">
        <div className="container">
          <div className="cta-out">
            <div className="cta-box wow fadeInUp">

              <div className="row align-items-center">

                <div className="col-lg-7">
                  <div className="digi-about-content">
                    <div className="digi-about-tag">
                      GET IN TOUCH
                    </div>
                    <h2 className="digi-about-title">
                      LET'S BUILD SOMETHING <br /><span>REMARKABLE.</span>
                    </h2>
                    <p className="digi-subtitle-text">Talk to our team about your project, automation needs or workforce requirements.</p>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="digi-phone">
                    <p><i className="bi bi-headset"></i></p>
                    <h5>TRUSTED BY 5,000+ HAPPY CUSTOMERS</h5>
                    <h3>+91 87962 94441</h3>
                    <p> +91 87962 94442, +91 87962 94443</p>
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
