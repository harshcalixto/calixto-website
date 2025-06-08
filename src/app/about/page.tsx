'use client';

import React from 'react';
import HeroSection from '@/components/sections/about/HeroSection';
// import MissionSection from '@/components/sections/about/MissionSection';
import InvestWay from '@/components/sections/about/InvestWay';
import ValueSection from '@/components/sections/about/ValueSection';
// import JoinUsSection from '@/components/sections/about/JoinUsSection';
import FounderSection from '@/components/sections/about/FounderSection';

const AboutPage = () => {
  return (
    <main className="min-h-screen">
        <HeroSection />
        {/* <MissionSection/> */}
        <InvestWay/> {/* about us */}
        <ValueSection/> {/* mission */}
        {/* <JoinUsSection/> */}
        <FounderSection/>
    </main>
  );
};

export default AboutPage;
