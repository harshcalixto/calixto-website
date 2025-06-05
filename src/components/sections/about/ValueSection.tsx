'use client';

import React from 'react';
import FeatureCard from '../../ui/FeatureCard';

const Values = [
  {
    icon: '/images/wbs-right-part.png',
    title: 'Safety First',
    description: 'e create with care, make changes thoughtfully, and we obsess over details.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Radical Customer Focus',
    description: 'We listen to them, design for their needs, and aim to make our user experience simple and intuitive.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Participation is Power',
    description: 'We seek to enable everyone to participate in the financial system',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'First- Principles Thinking',
    description: 'Our first instinct is to take action. We strive for improvement and push for progress',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Lean and Disciplined',
    description: 'We are inventors, dreamers, and problem solvers. We question assumptions.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'High Performance',
    description: 'We pursue operational excellence so that we can deliver exceptional value to customers',
  },
];

const ValueSection: React.FC = () => {
  return (
    <section className="w-full px-[40px] md:px-[80px] py-[100px] text-white">
      {/* Top Part: Highlight Cards */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-medium">
          Values in Service of You
          </h2>
          <p className="text-sm text-[#9DA5A1] max-w-[400px]">
          our values are in service of our customers. We strive to uphold our values every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
