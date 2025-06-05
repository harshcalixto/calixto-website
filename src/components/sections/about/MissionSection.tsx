'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FeatureCard from '../../ui/FeatureCard';

const features = [
  {
    image: '/images/wbs-left-img.png',
    icon: '/images/wbs-right-part.png',
    title: 'AI-Driven Insights',
    description: 'AI-driven insights for smarter investments.',
  },
  {
    image: '/images/wbs-left-img.png',
    icon: '/images/wbs-right-part.png',
    title: 'Investment Skills',
    description: 'Technical and fundamental analysis techniques.',
  },{
    image: '/images/wbs-left-img.png',
    icon: '/images/wbs-right-part.png',
    title: '2AI-Driven Insights',
    description: 'AI-driven insights for smarter investments.',
  },
  {
    image: '/images/wbs-left-img.png',
    icon: '/images/wbs-right-part.png',
    title: '2Investment Skills',
    description: 'Technical and fundamental analysis techniques.',
  },
];

const MissionSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < features.length - 2) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="relative w-full bg-[#0D130E] text-white overflow-hidden px-[40px] md:px-[80px] py-[60px] md:py-[100px] rounded-[60px] -mt-[50px] z-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full h-[380px] sm:h-[440px] md:h-[500px] rounded-3xl overflow-hidden bg-[#17221B] flex items-center justify-center transition-all duration-300">
          <Image
            src={features[index].image}
            alt="Feature Visual"
            width={500}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-medium leading-tight">
            Our Mission Statement
          </h2>

          <p className="text-gray-400 max-w-[90%]">
            Empowering investors with innovative AI-driven insights and comprehensive education to make informed financial decisions, fostering financial literacy, and promoting smart investment strategies for a secure future
          </p>

          {/* Divider with Arrows aligned right */}
          <div className="flex items-center justify-end mt-2">
            <div className="flex-grow border-t border-white/20 mr-4" />
                {/* Prev Button */}
                <button
                onClick={prev}
                disabled={index === 0}
                className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center mr-2 hover:bg-white/10 transition disabled:opacity-30"
                >
                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17.5C9.30716 15.335 8.57704 14.1376 6.9697 12.5303C5.36235 10.923 2 9.5 2 9.5C2 9.5 5.36235 8.07704 6.9697 6.4697C8.57704 4.86235 9.30716 3.66496 10 1.5" stroke="#868E96" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>

                {/* Next Button */}
                <button
                onClick={next}
                disabled={index >= features.length - 2}
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition disabled:opacity-30"
                >
                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5C1.69284 3.66497 2.42296 4.86235 4.0303 6.4697C5.63765 8.07704 9 9.5 9 9.5C9 9.5 5.63765 10.923 4.0303 12.5303C2.42296 14.1376 1.69284 15.335 1 17.5" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[features[index], features[index + 1]].map((feature, idx) => (
                    <FeatureCard
                    key={idx}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
