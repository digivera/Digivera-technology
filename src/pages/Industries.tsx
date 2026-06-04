import Spinner from '../components/Spinner';
import Header from '../components/Header';

import ContactUsC from '../components/Industries';
import Footer from '../components/Footer';

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
                <h1 className="page_title">INDUSTRIES</h1>

                <p>
                  <a href="/Dashboard">Home</a> | <span>INDUSTRIES</span>
                </p>

              </div>
            </div>
          </div>
        </div>

      </section>

      <ContactUsC />
      <Footer />
    </>
  );
};

export default Servic;
