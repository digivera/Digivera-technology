import { useEffect } from 'react';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ApproachSection } from '../components/ApproachSection';
import { EngagementModelsSection } from '../components/EngagementModelsSection';
export function WhyUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20">
      <WhyChooseUsSection />
      <ApproachSection />
      <EngagementModelsSection />
    </div>);

}