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
        className={`${inter.className} bg-slate-50 min-h-screen flex flex-col`}
      >
        <Navigation />
        <div className="w-full max-w-[1300px] mx-auto grow flex bg-slate-500">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
