'use client';

import React from 'react';
import Image from 'next/image';

const InvestWays = [
  {
    icon: '/images/wbs-right-part.png',
    title: 'Who We Are',
    description:
      'Calixto is a global collective of passionate mathematicians, AI engineers, data scientists, investment bankers, and educators spanning three continents. Our unified mission? To demystify the stock market and bring Wall Street to Main Street. We believe financial insight should not be a privilege of the few but a right of the many—regardless of education, geography, or socio-economic background.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'What We Do',
    description:
      'Our platform merges fundamental stock valuation with an intuitive, gamified experience, powered by CalixtoGPT and Agentic AI technology. Whether you&apos;re a curious student, a retail investor, or a lifelong learner, Calixto transforms financial education into a fun, visual, and insightful journey. See for yourself how a company&apos;s stock price is determined—and why it matters.',
  },
  // {
  //   icon: '/images/wbs-right-part.png',
  //   title: 'Quality execution on every trade',
  //   description:
  //     'Challenge yourself and earn rewards as you learn—because investing should be as exciting as it is rewarding. Turn learning into an adventure with interactive challenges that keep you engaged.',
  // },
];

const InvestWay: React.FC = () => {
  return (
    <section className="w-full px-[40px] md:px-[80px] py-[40px] md:py-[100px] text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#112B1E] rounded-3xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4 md:mb-10 gap-6">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium">
            About Us
            </h2>
            <p className="text-sm text-gray-400 w-full md:max-w-[400px]">
              At Calixto, you&apos;re not just learning finance. You&apos;re unlocking a superpower.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {InvestWays.map((item, index) => (
              <div
                key={index}
                className="py-6 flex flex-col sm:flex-row sm:items-start sm:gap-6"
              >
                {/* Left: Icon + Title */}
                <div className="flex items-center gap-4 sm:w-1/4 mb-4 sm:mb-0">
                  <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-green-500 flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} width={20} height={20} />
                  </div>
                  <h3 className="text-white font-medium text-[16px]">{item.title}</h3>
                </div>

                {/* Right: Description */}
                <p className="text-sm text-gray-400 sm:w-3/4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestWay;
