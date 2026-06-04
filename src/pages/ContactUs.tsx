import Spinner from '../components/Spinner';
import Header from '../components/Header';

import ContactUsC from '../components/Contact';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Spinner />
      <Header />

      <section className="hero-section innersec">
        <div className="container">
          <div className="row align-items-center">


            <div className="col-lg-12">
              <div className="inner_title">
                <h1 className="page_title">Contact Us</h1>

                <p>
                  <a href="/Dashboard">Home</a> | <span>Contact Us</span>
                </p>

              </div>
            </div>
          </div>
        </div>

      </section>

      <ContactUsC />
      <Footer addTFiveClass={false} />
    </>
  );
};

export default ContactUs;
