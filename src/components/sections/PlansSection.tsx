'use client';

import React from 'react';
import Image from 'next/image';
import PlanCard from '../ui/PlanCard';

const plans = [
  {
    title: 'Beginner Bundle',
    description: 'Ideal for new investors looking to build a solid foundation.',
    price: '$9.99',
    buttonLabel: 'Start Beginner Plan',
    features: [
      'Access to the Top 100 Stocks list',
      'Basic stock screener features',
      'Gamified learning modules for beginners',
      'AI Assistant for basic stock queries',
    ],
  },
  {
    title: 'Intermediate Bundle',
    description: 'Perfect for those who want deeper insights and advanced analysis.',
    price: '$19.99',
    buttonLabel: 'Start Intermediate Plan',
    features: [
      'All Beginner features',
      'Advanced stock screener filters and alerts',
      'Interactive model builder (DCF, FCF)',
      'Access to real-time market data',
    ],
    highlight: true,
  },
  {
    title: 'Advanced Bundle',
    description: 'Full access for serious investors.',
    price: '$29.99',
    buttonLabel: 'Start Advanced Plan',
    features: [
      'Full access for serious investors.',
      'Unlimited use of AI-based predictions',
      'Personalized investment advice with risk analysis',
      'Downloadable reports and data export',
      'Priority support',
    ],
  },
];

const PlansSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0D130E] text-white overflow-hidden px-[40px] md:px-[80px] py-[100px]">
      {/* Background Image */}
      <Image
        src="/images/priceBG.png"
        alt="Price Section Background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-medium leading-tight">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
