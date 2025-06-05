'use client';

import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative rounded-2xl border border-white/10 p-6 bg-[#121a15] backdrop-blur-sm overflow-hidden transition">
      {/* Top-right BG image */}
      <Image
        src="/images/featureCardBG.png" // Make sure the file is placed in `public/images`
        alt=""
        width={150}
        height={150}
        className="absolute top-0 right-0 pointer-events-none select-none"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center mb-4">
          <Image src={icon} alt={title} width={20} height={20} />
        </div>
        <h3 className="text-white font-medium text-[16px] mb-1">{title}</h3>
        <p className="text-sm text-[#9DA5A1]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
