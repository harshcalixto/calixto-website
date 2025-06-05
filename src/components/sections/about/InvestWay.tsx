'use client';

import React from 'react';
import Image from 'next/image';

const InvestWays = [
  {
    icon: '/images/wbs-right-part.png',
    title: 'A more human way to learn',
    description:
      'We’re redefining what it means to learn about finance—and that means education resources that are built for today. Revolutionizing Finance Education: Modern Resources for Today’s World.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Truly digestible financial news',
    description:
      'Investing news—made for today. Sherwood Snacks is revolutionizing how we talk about the markets. Investing News Redefined: Sherwood Snacks is Changing the Way We Talk About the Markets, Empowering You with Insights for Today’s World.',
  },
  {
    icon: '/images/wbs-right-part.png',
    title: 'Quality execution on every trade',
    description:
      'Challenge yourself and earn rewards as you learn—because investing should be as exciting as it is rewarding. Turn learning into an adventure with interactive challenges that keep you engaged.',
  },
];

const InvestWay: React.FC = () => {
  return (
    <section className="w-full px-[40px] md:px-[80px] py-[40px] md:py-[100px] text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#112B1E] rounded-3xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium">
              Invest Your Way
            </h2>
            <p className="text-sm text-gray-400 max-w-[400px]">
              We believe the financial system should be built to work for everyone. 
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {InvestWays.map((item, index) => (
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

export default InvestWay;
