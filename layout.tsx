import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

// Font setup
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'Metaforce | High-End Car Parts',
  description: 'Next generation automotive performance parts and accessories. Power your drive with cutting-edge technology.',
  keywords: 'car parts, automotive, performance parts, turbochargers, wheels, brakes, metaforce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen bg-dark-950">
        <div className="scanline" />
        <div className="cyber-grid min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
} 