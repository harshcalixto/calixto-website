'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'filled' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({ label, href, variant = 'filled' }) => {
  return (
    <Link href={href}>
      <button
        className={clsx(
          'px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-200',
          {
            'bg-[#18B76C] text-white hover:bg-green-600': variant === 'filled',
            'border border-[#18B76C] text-green-400 hover:bg-green-600 hover:text-white':
              variant === 'outlined',
          }
        )}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
