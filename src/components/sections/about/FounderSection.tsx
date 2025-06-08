'use client';

import React from 'react';
import { Linkedin } from 'lucide-react';

const FounderSection: React.FC = () => {
  return (
    <section className="w-full px-[40px] md:px-[80px] py-[40px] md:py-[80px] bg-[#101811] text-white">
      <div className="max-w-[1200px] mx-auto rounded-2xl bg-[#121A15] p-[32px] sm:p-[48px] md:p-[64px] shadow-md backdrop-blur-sm border border-white/10">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-medium mb-6">
          Founder & CEO –{' '}
          <span className="inline-flex items-center gap-2 text-[#18B76C]">
            Dipak Joshi
            <a
              href="https://www.linkedin.com/in/djoshi1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 cursor-pointer"
            >
              <Linkedin className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px]" />
            </a>
          </span>
        </h2>

        <div className="text-sm sm:text-base text-[#9DA5A1] leading-relaxed space-y-6">
          <p>
            Dipak Joshi is a globally respected finance leader and GenAI expert, with over two decades of experience
            driving SaaS, Fintech, and AI companies across six continents. A graduate of Duke University&apos;s Fuqua School
            of Business, a Chartered Accountant, and an alumnus of MIT, Columbia, and Oxford executive programs, Dipak
            brings rare depth to the intersection of Finance, AI, and Education.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Led multi-million dollar exits and private equity deals.</li>
            <li>Scaled global finance operations for companies in the US, UK, Europe, and Asia.</li>
            <li>Served as CFO and interim CEO at some of the most innovative tech firms in the world.</li>
            <li>Built financial systems, teams, and models that enabled exponential growth and strategic acquisitions.</li>
          </ul>

          <p>
            Today, as the founder of Calixto, Dipak fuses his passion for financial empowerment with the power of AI
            and gamified learning, creating a new kind of platform where anyone can master stock valuation and think
            like a Wall Street analyst.
          </p>

          <blockquote className="border-l-4 border-[#18B76C] pl-4 italic text-white">
            &quot;Calixto is more than a company. It&apos;s a movement—to make financial literacy, insight, and opportunity a universal right.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
