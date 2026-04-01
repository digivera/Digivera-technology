import React from 'react';
import { HeroSection } from '../components/HeroSection';
export function Home() {
  return (
    <div className="relative min-h-[calc(100vh-88px)] w-full bg-bgDark overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 bg-tech-pattern opacity-60 pointer-events-none"></div>
      <HeroSection />
    </div>);

}