'use client';

import React from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

interface PlanCardProps {
  title: string;
  description: string;
  price: string;
  buttonLabel: string;
  features: string[];
  highlight?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  buttonLabel,
  features,
  highlight = false,
}) => {
  return (
    <div
      className={clsx(
        'rounded-2xl p-6 border border-white/10 bg-[#121a15] backdrop-blur-sm flex flex-col justify-between transition',
        {
          'bg-gradient-to-b from-green-900/60 to-[#121a15] border-green-500': highlight,
        }
      )}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-white font-medium text-lg">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>

        <div className="border-t border-white/10 pt-4 mt-4">
          <div className="flex items-end gap-2">
            <span className="text-white text-[32px] font-semibold leading-none">{price}</span>
            <span className="text-gray-400 text-sm pb-1">/Month</span>
          </div>
          {highlight && (
            <p className="text-sm font-semibold text-white mt-1">Best Choice</p>
          )}
        </div>

        {/* Custom styled button */}
        <div className="mt-4">
          <button
            className="w-full h-12 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium text-sm transition-all duration-200"
          >
            {buttonLabel}
          </button>
        </div>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-gray-300 pt-4 border-t border-white/10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={16} className="text-green-400 mt-1" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
