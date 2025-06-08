'use client';

import React from 'react';
import FeatureCard from '../../ui/FeatureCard';

const Values = [
  {
    icon: '/images/wbs-right-part.png',
    title: 'Global Leadership in AI-Driven Stock Valuation',
    description: 'To become the world’s leading AI-powered stock valuation platform—a global destination where people from all walks of life can explore, understand, and simulate how stock prices are valued across the top 100 publicly traded companies.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Democratizing Financial Insight Through Innovation',
    description: 'We envision a world where anyone, anywhere can access Wall Street-grade insight, personalized learning, and actionable financial understanding through a fun, engaging, and gamified platform, built on the principles of fairness, access, and technological excellence.',
  },
  // {
  //   icon: '/images/wbs-right-part.png',
  //   title: 'Participation is Power',
  //   description: 'We seek to enable everyone to participate in the financial system',
  // },
  // {
  //   icon: '/images/wbs-right-part.png',
  //   title: 'First- Principles Thinking',
  //   description: 'Our first instinct is to take action. We strive for improvement and push for progress',
  // },
  // {
  //   icon: '/images/wbs-right-part.png',
  //   title: 'Lean and Disciplined',
  //   description: 'We are inventors, dreamers, and problem solvers. We question assumptions.',
  // },
  // {
  //   icon: '/images/wbs-right-part.png',
  //   title: 'High Performance',
  //   description: 'We pursue operational excellence so that we can deliver exceptional value to customers',
  // },
];

const ValueSection: React.FC = () => {
  return (
    // py-[100px] 
    <section className="w-full px-[40px] md:px-[80px] py-[50px] text-white">
      {/* Top Part: Highlight Cards */}
      <div className="max-w-[1200px] mx-auto">
        {/* flex flex-col sm:flex-row justify-between items-start gap-6 */}
        <div className="mb-10">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-medium text-center">
          Mission
          </h2>
          {/* <p className="text-sm text-[#9DA5A1] max-w-[400px]">
          our values are in service of our customers. We strive to uphold our values every day.
          </p> */}
        </div>

            {/* sm:grid-cols-2 md:grid-cols-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {Values.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
