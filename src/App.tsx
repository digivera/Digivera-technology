import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Industries from './pages/Industries';
import WhyUs from './pages/WhyUs';
import ScrollToTop from './components/ScrollToTop';
import CanonicalTag from './components/CanonicalTag';
// import Terms from './pages/Terms';
// import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
  return (
    <BrowserRouter>
      <CanonicalTag />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
