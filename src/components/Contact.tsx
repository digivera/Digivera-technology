
import FAQ from '../pages/FAQ';
const Contact = () => {
  return (
    <>
      <section className="digi-about-wrapper">

        <div className="container-fluid p-0">

          <div className="row align-items-center g-0">


            <div className="col-lg-12">
              <div className="digi-about-image">
                <iframe className="mapframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.400260608663!2d77.43484180581231!3d28.56675776120811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceeb705b1e687%3A0x7e80db4bb743082!2sAce%20City%20by%20Ace%20Group!5e0!3m2!1sen!2sin!4v1779380509496!5m2!1sen!2sin" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>


          </div>

        </div>

      </section>

      <FAQ />




    </>
  );
};

export default Contact;
