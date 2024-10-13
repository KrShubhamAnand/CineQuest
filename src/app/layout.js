import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
// import {
//   ContextProductsProvider,
//   SimpleFallback,
// } from "@/components/ContextProductsProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CineQuest',
  description: 'This is a movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          
      <Suspense>
       {children}
      </Suspense>

        </Providers>
      </body>
    </html>
  );
}
