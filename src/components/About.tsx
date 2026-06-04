



const About = () => {
  return (
    <>
      <section className="digi-about-wrapper">

        <div className="container-fluid p-0">

          <div className="row align-items-center g-0">

            {/* LEFT IMAGE */}

            <div className="col-lg-6">
              <div className="digi-about-image wow fadeInLeft" data-wow-delay="0.1s">
                <img src="/assets/img/about-us.jpg" alt="About Us" />
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="col-lg-6">

              <div className="digi-about-main wow fadeInRight" data-wow-delay="0.1s">
                <div className="digi-about-content">

                  <div className="digi-about-tag">
                    ABOUT US
                  </div>

                  <h2 className="digi-about-title">
                    YOUR TRUSTED <br />
                    <span>TECHNOLOGY PARTNER</span>
                  </h2>

                  <p className="digi-about-text">
                    Digivera Technologies India Pvt. Ltd. is a forward-looking
                    technology and business solutions company delivering integrated IT,
                    automation, customer support, and workforce management services.
                    We enable organizations to accelerate digital transformation,
                    optimize operations, and enhance customer experiences through
                    innovative and scalable solutions.
                  </p>

                  {/* BOXES */}

                  <div className="row g-4">

                    {/* VISION */}

                    <div className="col-md-6">

                      <div className="digi-info-box digi-vision-box wow fadeInUp" data-wow-delay="0.6s">

                        <h3 className="digi-info-title">
                          OUR VISION
                        </h3>

                        <p className="digi-info-text">
                          To be a globally recognized technology and business
                          solutions provider, driving innovation, efficiency,
                          and digital excellence.
                        </p>

                        {/*a href="#" className="btn btn-custom btn-green className-sm">
                        KNOW MORE
                      </a*/}

                      </div>

                    </div>

                    {/* MISSION */}

                    <div className="col-md-6">

                      <div className="digi-info-box digi-mission-box wow fadeInUp" data-wow-delay="0.6s">

                        <h3 className="digi-info-title">
                          OUR MISSION
                        </h3>

                        <p className="digi-info-text">
                          To deliver high-quality, scalable, and secure
                          solutions that empower businesses to grow,
                          streamline operations, and remain compliant in an
                          evolving digital landscape.
                        </p>

                        {/*a href="#" className="btn btn-custom btn-green className-sm">
                        KNOW MORE
                      </a*/}

                      </div>

                    </div>

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
