import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Project X',
  description: 'Room project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} bg-[#f7fafd] min-h-screen flex flex-col`}
      >
        <Navigation />
        <div className="w-full md:w-4/5 max-w-[1300px] mx-auto grow flex ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
