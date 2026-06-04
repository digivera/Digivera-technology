
import { Link } from 'react-router-dom';
import CountUpNumber from './CountUpNumber';

const HeroCarousel = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-7">
            <div className="hero-content">
              <h1 className="wow fadeInLeft" data-wow-delay="0.1s">
                Driving <span>Innovation</span><br />
                &amp; Automation For<br />
                Sustainable Growth.
              </h1>

              <p className="wow fadeInLeft" data-wow-delay="0.2s">
                Integrated IT, automation, customer support, and workforce
                management services — accelerating digital transformation
              </p>

              <div className="d-flex flex-wrap gap-3 wow fadeInLeft" data-wow-delay="0.3s">
                <Link to="/services" className="btn btn-custom btn-blue">Explore Services</Link>
                <Link to="/contact-us" className="btn btn-custom btn-green">Contact Us</Link>
              </div>

              {/* Counters */}
              <div className="row stats mt-5 wow fadeInUp" data-wow-delay="0.3s">

                <div className="col-md-4 col-12 stat-box">
                  <h2><CountUpNumber target={5000} className="counter" />+</h2>
                  <p>Happy Customers</p>
                </div>

                <div className="col-md-4 col-12 stat-box">
                  <h2><CountUpNumber target={100} className="counter" /> +</h2>
                  <p>Client Satisfaction</p>
                </div>

                <div className="col-md-4 col-12 stat-box">
                  <h2>24/7</h2>
                  <p>World Class Support</p>
                </div>

              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5">
            <div className="hero-image wow fadeInRight" data-wow-delay="0.5s">
              <img src="/assets/img/hero.gif" alt="AI Robot" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
