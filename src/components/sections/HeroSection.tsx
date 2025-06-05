'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import StockCard from '../ui/StockCard';

const dummyStocks = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  icon: '/images/stock-img.png',
  index: 'NASDAQ',
  price: '4,420.00 USD',
  change: i % 2 === 0 ? '-0.26%' : '+0.15%',
  changeValue: i % 2 === 0 ? '63.20 (-0.26%)' : '32.10 (+0.15%)',
}));

const HeroSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    const scrollSpeed = 0.3;

    const animate = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="flex flex-col relative w-full bg-[#101811] text-white overflow-hidden min-h-[calc(100vh-88px)] z-0">
      <Image
        src="/images/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-center"
      />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto mt-auto px-4 sm:px-6 flex flex-col items-center text-center pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[112px]">
        <h1 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-tight font-medium text-white">
          <span className="inline-block">The FIRST AI Driven</span>
          <Image
            src="/images/hero-contant-img.png"
            alt="Stock Learn Icon"
            width={144}
            height={86}
            className="hidden md:inline-block align-middle w-[auto] h-[63px] sm:h-[40px] md:h-[50px] lg:h-[63px] mx-2"
          />
          <span className="inline-block">Gamified & Fun</span> Educational Platform To Determine The Stock Price Of A Publicly Traded Company
        </h1>

        <p className="text-sm sm:text-base text-[#7B8380] mt-6 leading-relaxed">
          Unlock the power of advanced analytics, AI-driven predictions, and immersive learning experiences to build your financial future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button label="Coming Soon" href="#" variant="filled" />
          {/* <Button label="Get Started" href="/get-started" variant="filled" />
          <Button label="Explore Top Stocks" href="/top-stocks" variant="outlined" /> */}
        </div>
      </div>

      <div className="relative z-10 mt-[60px] mb-auto px-4 sm:px-[80px] pb-[80px] md:pb-[100px] lg:pb-[180px] w-full">
        <div className="overflow-hidden" ref={sliderRef}>
          <div className="w-full whitespace-nowrap">
            <div
              className="flex gap-y-6 gap-x-6 animate-scroll"
              style={{
                width: 'max-content',
                display: 'grid',
                gridAutoFlow: 'column',
                gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
              }}
            >
              {[...dummyStocks, ...dummyStocks].map((stock, index) => (
                <div
                  key={index}
                  className={`w-[300px] ${index % 2 === 1 ? 'translate-x-[150px]' : ''}`}
                >
                  <StockCard {...stock} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
