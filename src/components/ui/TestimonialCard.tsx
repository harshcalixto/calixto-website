'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface TestimonialCardProps {
  quote?: string;
  author?: string;
  role?: string;
  avatar?: string;
  imageOnly?: boolean;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
  imageOnly = false,
  imageSrc,
}) => {
  return (
    <div
      className={clsx(
        'relative rounded-[16px] bg-[#172119] border border-white/10 overflow-hidden backdrop-blur-sm self-start',
        {
          'p-0': imageOnly,
          'p-[20px] md:p-[30px]': !imageOnly,
        }
      )}
    >
      {!imageOnly && (
        <Image
          src="/images/userTCardBG.png"
          alt="background grid"
          width={150}
          height={150}
          className="absolute bottom-2 right-2 opacity-10 pointer-events-none select-none"
        />
      )}

      {imageOnly && imageSrc && (
        <Image
          src={imageSrc}
          alt="Testimonial visual"
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-[16px]"
        />
      )}

      {!imageOnly && (
        <div className="relative z-10 flex flex-col justify-between h-full gap-6">
          <p className="text-sm sm:text-base text-[#7B8380] leading-relaxed">“{quote}”</p>
          <div className="flex items-center gap-4">
            {avatar && (
              <Image
                src={avatar}
                alt={author || ''}
                width={70}
                height={70}
                className="w-[70px] h-[70px] rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-base sm:text-lg font-semibold text-[#D6DFDB]">{author}</p>
              <p className="text-sm text-[#9DA5A1]">{role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
