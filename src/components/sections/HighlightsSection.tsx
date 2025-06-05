'use client';

import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import Image from 'next/image';

const highlights = [
  {
    icon: '/images/wbs-right-part.png',
    title: 'AI-Powered Predictions',
    description: 'Harness machine learning to forecast stock performance',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Financial Model Builder',
    description: 'Tailored recommendations to help you reach your financial goals',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Gamified Learning',
    description: 'Master investing through quizzes, interactive tutorials & challenges.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Financial Chat Bot',
    description: 'Get answers to all your finance questions—anytime, anywhere.',
  },
];

const whyChoose = [
  {
    icon: '/images/wbs-right-part.png',
    title: 'Learn with ease',
    description:
      'Gamified learning experiences make mastering the stock market both simple and fun, transforming complex concepts into engaging challenges.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Focused, Fast Insights',
    description:
      'Save time with personalized insights that cut through the noise and focus on what matters. Unlock potential with tools tailored to your needs, making every task efficient and meaningful.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Level Up Skills',
    description:
      'Challenge yourself and earn rewards as you learn—because investing should be as exciting as it is rewarding. Turn learning into an adventure with interactive challenges that keep you engaged.',
  },
];

const HighlightsSection: React.FC = () => {
  return (
    <section className="w-full px-[40px] md:px-[80px] py-[100px] text-white">
      {/* Top Part: Highlight Cards */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-medium">
            Educational Platform Highlights
          </h2>
          <p className="text-sm text-gray-400 max-w-[400px]">
            Challenge yourself and earn rewards as you learn—because investing should be as exciting as it is rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-[100px]">
          {highlights.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Why Choose Calixto.Ai */}
        <div className="bg-[#112B1E] rounded-3xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium">
              Why Choose Calixto.Ai?
            </h2>
            <p className="text-sm text-gray-400 max-w-[400px]">
              Discover a new way to invest with a platform designed to educate, engage, and elevate your financial strategy.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="py-6 flex flex-col sm:flex-row sm:items-start sm:gap-6"
              >
                {/* Left: Icon + Title */}
                <div className="flex items-center gap-4 sm:w-1/3 mb-4 sm:mb-0">
                  <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-green-500 flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} width={20} height={20} />
                  </div>
                  <h3 className="text-white font-medium text-[16px]">{item.title}</h3>
                </div>

                {/* Right: Description */}
                <p className="text-sm text-gray-400 sm:w-2/3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
