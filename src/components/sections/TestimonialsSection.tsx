'use client';

import React, { useState, useMemo, useEffect } from 'react';
import TestimonialCard from '../ui/TestimonialCard';

type TestimonialItem = {
  quote?: string;
  author?: string;
  role?: string;
  avatar?: string;
  imageOnly?: boolean;
  imageSrc?: string;
};

const testimonials: TestimonialItem[] = [
  {
    quote: "1 I love the real-time alerts and the AI assistant. It's like having a financial advisor in my pocket. Calixto.ai has transformed my learning experience—access to in-depth resources and real-time market analysis has boosted my confidence in the stock market. The real-time alerts and AI assistant feel like having a personal financial advisor, guiding me every step of the way.",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "2 Calixto.ai transformed the way I approach investing. The AI recommendations are spot on and the gamified learning makes it fun!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "3 I used to be overwhelmed by stock analysis, but now I feel confident making decisions. The interactive model builder is a game changer!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "4 Calixto.ai transformed the way I approach investing. The AI recommendations are spot on and the gamified learning makes it fun!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "5 I used to be overwhelmed by stock analysis, but now I feel confident making decisions. The interactive model builder is a game changer!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "6 I love the real-time alerts and the AI assistant. It's like having a financial advisor in my pocket. Calixto.ai has transformed my learning experience—access to in-depth resources and real-time market analysis has boosted my confidence in the stock market.",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "7 Calixto.ai transformed the way I approach investing. The AI recommendations are spot on and the gamified learning makes it fun!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    imageOnly: true,
    imageSrc: '/images/Test-profile2.png',
  },
  {
    quote: "8 Calixto.ai transformed the way I approach investing. The AI recommendations are spot on and the gamified learning makes it fun!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "9 I used to be overwhelmed by stock analysis, but now I feel confident making decisions. The interactive model builder is a game changer!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "10 I love the real-time alerts and the AI assistant. It's like having a financial advisor in my pocket. Calixto.ai has transformed my learning experience—access to in-depth resources and real-time market analysis has boosted my confidence in the stock market.",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "11 Calixto.ai transformed the way I approach investing. The AI recommendations are spot on and the gamified learning makes it fun!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "12 I love the real-time alerts and the AI assistant. It's like having a financial advisor in my pocket. Calixto.ai has transformed my learning experience—access to in-depth resources and real-time market analysis has boosted my confidence in the stock market.",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
  {
    quote: "13 Calixto.ai transformed the way I approach investing. The AI recommendations are spot on and the gamified learning makes it fun!",
    author: 'Sophia',
    role: 'Business Owner',
    avatar: '/images/Test-profile.png',
  },
];

const useResponsiveConfig = () => {
  const [config, setConfig] = useState({ maxHeight: 650, columns: 3 });

  useEffect(() => {
    const updateConfig = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width < 640) {
        setConfig({ maxHeight: 520, columns: 1 }); // show 2 rows
        // setConfig({ maxHeight: height - 200, columns: 1 });
      } else if (width < 1024) {
        // setConfig({ maxHeight: 600, columns: 2 }); // adjusted for tablets
        setConfig({ maxHeight: height - 240, columns: 2 });
      } else {
        setConfig({ maxHeight: 650, columns: 3 }); // desktop
      }
    };

    updateConfig();
    window.addEventListener('resize', updateConfig);
    return () => window.removeEventListener('resize', updateConfig);
  }, []);

  return config;
};

const TestimonialsSection: React.FC = () => {
  const { maxHeight, columns } = useResponsiveConfig();
  const [page, setPage] = useState(0);

  const estimateHeight = (item: TestimonialItem) => {
    if (item.imageOnly) return 260;
    const length = item.quote?.length || 0;
    if (length > 300) return 270;
    if (length > 150) return 230;
    return 200;
  };

  const chunkTestimonials = () => {
    const pages: TestimonialItem[][][] = [];
    let i = 0;

    while (i < testimonials.length) {
      const cols: TestimonialItem[][] = Array.from({ length: columns }, () => []);
      const heights = new Array(columns).fill(0);
      let col = 0;
      let itemsAdded = 0;

      while (true) {
        const item = testimonials[i % testimonials.length];
        const height = estimateHeight(item);

        if (heights[col] + height + 24 <= maxHeight) {
          cols[col].push(item);
          heights[col] += height + 24;
          i++;
          itemsAdded++;
        } else {
          col++;
          if (col >= columns || itemsAdded >= testimonials.length) break;
        }

        if (itemsAdded >= testimonials.length * 2) break;
      }

      pages.push(cols);
    }

    return pages;
  };

  const allPages = useMemo(() => chunkTestimonials(), [columns, maxHeight]);

  const next = () => setPage((p) => (p + 1) % allPages.length);
  const prev = () => setPage((p) => (p - 1 + allPages.length) % allPages.length);

  return (
    <section className="relative w-full text-white overflow-hidden px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] py-[20px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium leading-tight text-white">
            User Testimonials
          </h2>
          <div className="flex items-center">
            <div className="flex-grow border-t border-white/20 mr-4 hidden sm:block" />
            <button onClick={prev} className="w-[2.3rem] sm:w-10 h-[2.3rem] sm:h-10 border border-[#434A47] rounded-full flex items-center justify-center mr-2 hover:bg-white/10 transition">
              <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
                <path d="M10 17.5C9.3 15.3 8.57 14.13 6.97 12.53C5.36 10.92 2 9.5 2 9.5C2 9.5 5.36 8.08 6.97 6.47C8.57 4.86 9.3 3.66 10 1.5" stroke="#868E96" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button onClick={next} className="w-[2.3rem] sm:w-10 h-[2.3rem] sm:h-10 bg-[#18B76C] hover:bg-green-600 rounded-full flex items-center justify-center transition">
              <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
                <path d="M1 1.5C1.69 3.66 2.42 4.86 4.03 6.47C5.64 8.08 9 9.5 9 9.5C9 9.5 5.64 10.92 4.03 12.53C2.42 14.13 1.69 15.33 1 17.5" stroke="#F8F9FA" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        {/* <div className="flex gap-6 items-start overflow-y-auto" style={{ maxHeight: `${maxHeight}px` }}> */}
        <div className="flex gap-6 items-start flex-wrap">

          {allPages[page]?.map((col, i) => (
            <div key={i} className="flex-1 flex flex-col gap-6">
              {col.map((t: TestimonialItem, j: number) => (
                <TestimonialCard key={`${i}-${j}`} {...t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
