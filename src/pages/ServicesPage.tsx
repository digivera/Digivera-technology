import { useEffect } from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { IndustriesSection } from '../components/IndustriesSection';
export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>);

}