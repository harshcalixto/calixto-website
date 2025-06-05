'use client';

import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <section className="flex relative w-full px-4 sm:px-6 md:px-[50px] lg:px-[80px] py-[60px] sm:py-[80px] md:py-[50px] lg:py-[115px] bg-[#0D130E] overflow-hidden min-h-[calc(100vh-88px)] z-0">
      <Image
        src="/images/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-center"
      />

      <div className="relative max-w-[1440px] lg:w-[1200px] my-auto mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-[calc(50%-20px)] text-left md:text-left text-center md:text-left">
          <h1 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-medium leading-tight text-white">
            <span className="block">Know About</span>
            <span className="block">Calixto.AI</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-[#7B8380] max-w-[620px] mx-auto md:mx-0">
            Calixto.ai is a pioneering real-time educational platform that allows users to experience live trading concepts in equities, options, and futures—all with virtual money.
          </p>
        </div>

        {/* Right Visual */}
        <div className="w-full w-[calc(90%)] md:w-[calc(50%-20px)] aspect-square rounded-[16px] bg-[#121A15]">
          <Image
            src="/images/about-hero-visual.png"
            alt="About Calixto Visual"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
