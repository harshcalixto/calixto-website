'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Linkedin,
  // Twitter,
  // Youtube,
  Mail
} from 'lucide-react';

// const quickLinks = [
//   { label: 'Home', href: '/' },
//   { label: 'Top 100 Stocks', href: '/top-stocks' },
//   { label: 'Contact Us', href: '/contact' },
//   { label: 'Stock Screener', href: '/stock-screener' },
//   { label: 'Educational Hub', href: '/educational-hub' },
//   { label: 'User Dashboard', href: '/dashboard' },
//   { label: 'Pricing', href: '/pricing' },
// ];

const otherLinks = [
  // { label: 'Gamification Hub', href: '/gamification' },
  // { label: 'User Support', href: '/support' },
  { label: 'About Us', href: '/about' },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0D130E] text-white px-[40px] md:px-[80px] pt-[80px] pb-[30px] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-y-12 justify-between">
        {/* Left Section - 30% Width */}
        <div className="w-full lg:w-[30%] space-y-5">
          <Image
            src="/images/CalixtoFooter.png"
            alt="Calixto Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
          The FIRST AI Driven Gamified & Fun Educational Platform To Determine The Stock Price Of A Publicly Traded Company.
          </p>
          <div className="flex items-center gap-4">
            <a className="text-white hover:text-green-500 cursor-pointer" href='https://www.linkedin.com/company/calixtoai/about/' target='_blank' rel='noopener noreferrer' ><Linkedin size={20} /></a>
            {/* <Twitter size={20} className="text-white hover:text-green-500 cursor-pointer" />
            <Youtube size={20} className="text-white hover:text-green-500 cursor-pointer" /> */}
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="space-y-4">
          <h4 className="font-semibold text-white">Quick links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Other Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Other links</h4>
          <ul className="text-gray-400 text-sm hover:text-green-500 cursor-pointer space-y-2">
            {otherLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Contact Us</h4>
          <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-green-500 cursor-pointer">
            <a href="mailto:info@calixto.ai" className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@calixto.ai</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-white/10 pt-6">
        © Copyright 2024 Calixto
      </div>
    </footer>
  );
};

export default Footer;
