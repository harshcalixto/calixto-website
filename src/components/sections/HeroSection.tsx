'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Button from '../ui/Button';
import StockCard from '../ui/StockCard';

const tickerList = [
  'MSFT', 'NVDA', 'AAPL', 'AMZN', 'META',
  'GOOGL', 'GOOG', 'BRK.B', 'TSLA', 'AVGO',
  'UNH', 'JNJ', 'V', 'WMT', 'XOM',
  'MA', 'PG', 'LLY', 'HD', 'MRK',
];

const FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

if (!FINNHUB_API_KEY) {
  throw new Error('NEXT_PUBLIC_FINNHUB_API_KEY  is not defined in environment variables');
}

interface Stock {
  id: number;
  icon: string;
  index: string;
  price: string;
  change: string;
  changeValue: string;
}

const HeroSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const quotePromises = tickerList.map((ticker) =>
          axios.get(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${FINNHUB_API_KEY}`)
        );

        const profilePromises = tickerList.map((ticker) =>
          axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${FINNHUB_API_KEY}`)
        );

        const [quoteResponses, profileResponses] = await Promise.all([
          Promise.all(quotePromises),
          Promise.all(profilePromises),
        ]);

        const merged = tickerList.map((ticker, idx) => {
          const quote = quoteResponses[idx].data;
          const profile = profileResponses[idx].data;

          return {
            id: idx,
            icon: profile.logo || '/images/stock-img.png',
            index: ticker,
            price: `$${quote.c.toFixed(2)} USD`,
            change:
              quote.dp >= 0
                ? `+${quote.dp.toFixed(2)}%`
                : `${quote.dp.toFixed(2)}%`,
            changeValue: `${quote.d.toFixed(2)} (${quote.dp.toFixed(2)}%)`,
          };
        });

        setStocks([...merged, ...merged]); // duplicate for smooth scroll
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData(); // initial load

    const interval = setInterval(fetchStockData, 5 * 60 * 1000); // refresh every 5 mins
    return () => clearInterval(interval); // cleanup
  }, []);

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
          <span className="inline-block">The FIRST GLOBAL AI Driven</span>
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
          Unlock the power of advanced analytics, AI-driven predictions, fun and immersive learning experiences to build your financial knowledge.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button label="About us" href="/about" variant="filled" />
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
              {stocks.map((stock, index) => (
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
