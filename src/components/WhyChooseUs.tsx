

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <div className="digi-about-content wow fadeInDown" data-wow-delay="0.1s">

              <div className="digi-about-tag">
                WHY DIGIVERA
              </div>

              <h2 className="digi-about-title">
                WHY <span>CHOOSE US?</span>
              </h2>

            </div>

            <ul className="why-list wow fadeInLeft" data-wow-delay="0.3s">
              <li>Multi-domain expertise across IT, BPO, and workforce management.</li>
              <li>Agile and scalable execution model.</li>
              <li>Skilled professionals and industry experience.</li>
              <li>Strong focus on innovation, automation, and compliance.</li>
              <li>Reliable long-term support and partnership approach.</li>
            </ul>

            <h4 className="mt-4 wow fadeInLeft" data-wow-delay="0.5s">ENGAGEMENT MODELS</h4>
            <p className="wow fadeInLeft" data-wow-delay="0.7s"><strong>Flexible commercial models that fit how you want to work.</strong></p>
            <div className="row fadeInLeft" data-wow-delay="0.9s">
              <div className="col-12">
                <ul className="why-list small">
                  <li>Fixed Cost Projects.</li>
                  <li>Dedicated Resources.</li>
                  <li>Workforce Outsourcing.</li>
                  <li>Time &amp; Material.</li>
                  <li>Per Seat / Per Agent.</li>
                  <li>AMC.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 position-relative mt-4 mt-lg-0">

            <div className="right-wrapper">

              {/* IMAGE 1 */}
              <div className="img-box img-one wow fadeInLeft" data-wow-delay="0.1s">
                <img src="/assets/img/why1.jpg" className="img-fluid" alt="" />
              </div>

              {/* IMAGE 2 */}
              <div className="img-box img-two wow fadeInUp" data-wow-delay="0.1s">
                <img src="/assets/img/why2.jpg" className="img-fluid" alt="" />
              </div>

              {/* CARD */}
              <div className="info-card wow fadeInRight" data-wow-delay="0.1s">
                <h5>TRUSTED BY 5,000+ HAPPY CUSTOMERS</h5>
                <ul>
                  <li>100% Client Satisfaction.</li>
                  <li>World Class Worker.</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
