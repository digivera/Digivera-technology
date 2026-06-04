

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">


        {/* HEADING */}

        <div className="digi-about-content text-center full-w wow fadeInDown" data-wow-delay="0.1s">

          <div className="digi-about-tag">
            INDUSTRIES
          </div>

          <h2 className="digi-about-title">
            INDUSTRIES  <span>WE SERVE</span>
          </h2>
          <p className="digi-subtitle-text">
            Deep domain experience across regulated and fast-moving sectors.
          </p>
        </div>


        <div className="row g-4">

          {/* CARD */}
          <div className="col-lg-4 col-md-6">
            <div className="industry-card wow fadeInLeft">
              <img src="/assets/img/healthcare.jpg" className="img-fluid" alt="HEALTHCARE" />
              <div className="industry-label"><span>HEALTHCARE</span></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-card  wow fadeInDown">
              <img src="/assets/img/it.jpg" className="img-fluid" alt="IT &amp; ITES" />
              <div className="industry-label"><span>IT &amp; ITES</span></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-card wow fadeInRight">
              <img src="/assets/img/banking.jpg" className="img-fluid" alt="BANKING &amp; FINANCE" />
              <div className="industry-label"><span>BANKING &amp; FINANCE</span></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-card wow fadeInLeft">
              <img src="/assets/img/retail.jpg" className="img-fluid" alt="RETAIL &amp; E-COMMERCE" />
              <div className="industry-label"><span>RETAIL &amp; E-COMMERCE</span></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-card wow fadeInUp">
              <img src="/assets/img/manufacturing.jpg" className="img-fluid" alt="MANUFACTURING" />
              <div className="industry-label"><span>MANUFACTURING</span></div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="industry-card wow fadeInRight">
              <img src="/assets/img/startups.jpg" className="img-fluid" alt="STARTUPS &amp; SMES" />
              <div className="industry-label"><span>STARTUPS &amp; SMES</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;
