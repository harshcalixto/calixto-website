'use client';

import Image from 'next/image';
import Button from '../../ui/Button'; // <-- adjust the path based on your folder structure

const JoinUsSection: React.FC = () => {
  return (
    <section className="w-full px-[20px] md:px-[40px] lg:px-[80px] py-[80px] text-white">
      <div className="max-w-[1200px] mx-auto rounded-2xl bg-[#0D2211] relative overflow-hidden p-[24px] sm:p-[60px] md:p-[78px] text-center">
        <Image
        src="/images/JoinUsBG.png"
        alt="Hero Background"
        fill
        priority
        className="object-center"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-medium leading-snug">
            Join Us And Build The Financial System<br className="hidden sm:block" />
            For Everyone.
          </h2>

          <p className="text-sm text-[#9DA5A1] mt-4">
            Help us improve Calixto.ai by sharing your thoughts.
          </p>

          <div className="mt-6 sm:mt-8">
            <Button label="Read More" href="/get-started" variant="filled" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
