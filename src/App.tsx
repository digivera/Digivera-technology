import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';
import { IndustriesSection } from './components/IndustriesSection';
export function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen flex flex-col font-body selection:bg-accentCyan/30 selection:text-white">
        <Navbar />

        <main className="flex-1 pt-[72px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesSection />} />
            <Route path="/why-us" element={<WhyUsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>);

}