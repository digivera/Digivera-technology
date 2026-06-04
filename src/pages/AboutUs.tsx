import Spinner from '../components/Spinner';
import Header from '../components/Header';
import About from '../components/About';

import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import Founders from '../components/Founders';
const AboutUs = () => {
  return (
    <>
      <Spinner />
      <Header />

      <section className="hero-section innersec">
        <div className="container">
          <div className="row align-items-center">


            <div className="col-lg-12">
              <div className="inner_title">
                <h1 className="page_title">About Us</h1>

                <p>
                  <a href="/Dashboard">Home</a> | <span>About Us</span>
                </p>

              </div>
            </div>
          </div>
        </div>

      </section>


      <About />
      <Founders />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default AboutUs;
