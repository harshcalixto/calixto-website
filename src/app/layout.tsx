// src/app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ReduxProvider } from '../store/provider'; // <--- ADD THIS IMPORT
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Define your Manrope local font
const manrope = localFont({
  src: [
    {
      path: '../../public/fonts/Manrope-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Manrope-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    // If you want to use the variable font for finer control:
    // {
    //   path: '../../public/fonts/Manrope-VariableFont_wght.ttf',
    //   weight: '100 800', // Define the range of weights for the variable font
    //   style: 'normal',
    // },
  ],
  variable: '--font-manrope', // Assign a CSS variable name
  display: 'swap', // Best practice for font loading
});

export const metadata: Metadata = {
  title: 'Calixto', // 
  description: 'A cutting-edge learning platform for capital markets.', // <-- Updated description (feel free to customize)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>{/* <--- APPLY THE FONT VARIABLE TO HTML */}
      <body className="bg-[#101811] text-white">
        <ReduxProvider> {/* <--- WRAP CHILDREN WITH REDUXPROVIDER */}
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}