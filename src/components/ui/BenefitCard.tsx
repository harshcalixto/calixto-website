// src/components/ui/BenefitCard.tsx
import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon for visual appeal
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
      {icon && <div className="text-blue-400 text-4xl mb-4">{icon}</div>}
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitCard;