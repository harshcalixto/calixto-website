'use client';

// import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
// import { Menu, X } from 'lucide-react';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Top 100 Stocks', href: '/top-stocks' },
//   { label: 'Stock Screener', href: '/stock-screener' },
//   { label: 'Educational Hub', href: '/educational-hub' },
//   { label: 'User Dashboard', href: '/dashboard' },
//   { label: 'Pricing', href: '/pricing' },
// ];

const Navbar: React.FC = () => {
  // const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const pathname = usePathname();

  return (
    <header className="bg-[#101811] text-white sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 py-4 h-[88px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Calixto Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Center Navigation - Desktop Only */}
        {/* <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex gap-1 px-2 py-1 bg-white/5 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={clsx(
                    'px-4 py-3 rounded-full text-sm transition-all duration-150 font-body',
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div> */}

        {/* Right: Always-visible Login + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Button label="Coming Soon" href="#" />
          {/* <button
            className="lg:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button> */}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {/* {isMobileOpen && (
        <div className="lg:hidden bg-[#101811] px-6 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-2 text-white hover:text-green-400 border-b border-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )} */}
    </header>
  );
};

export default Navbar;
