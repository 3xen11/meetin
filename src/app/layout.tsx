'use client';

// STYLE
import './globals.css';
// COMPONENTS
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ReduxProvider from '../provider/ReduxProvider';
import BodyContainer from '../layout/BodyContainer';
import Searching from '../components/Searching';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="pl">
        <head>
          <title>MeetIN</title>
          <meta name="Room project" content="Description" />
        </head>
        <body className="inter.className">
          <BodyContainer>
            <Navigation />
            <Searching />
            <div className="w-full md:w-4/5 max-w-[1300px] mx-auto grow flex ">
              {children}
            </div>
            <Footer />
          </BodyContainer>
        </body>
      </html>
    </ReduxProvider>
  );
}
