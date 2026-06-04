import Spinner from '../components/Spinner';
import Header from '../components/Header';

import ContactUsC from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import Industries from '../components/Founders';

const Servic = () => {
  return (
    <>
      <Spinner />
      <Header />

      <section className="hero-section innersec">
        <div className="container">
          <div className="row align-items-center">


            <div className="col-lg-12">
              <div className="inner_title">
                <h1 className="page_title">WHY US</h1>

                <p>
                  <a href="/">Home</a> | <span>WHY US</span>
                </p>

              </div>
            </div>
          </div>
        </div>

      </section>

      <ContactUsC />
      <Industries />
      <Footer />
    </>
  );
};

export default Servic;
