import Spinner from '../components/Spinner';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import FAQ from '../pages/FAQ';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Founders from '../components/Founders';
import Approach from '../components/Approach';


import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Spinner />
      <Header />
      <HeroCarousel />

      <About />

      <Services />
      <WhyChooseUs />
      <Founders />
      <Approach />
      <Industries />

      <FAQ />

      <Footer addTFiveClass={false} />

    </>
  );
};

export default Dashboard;
