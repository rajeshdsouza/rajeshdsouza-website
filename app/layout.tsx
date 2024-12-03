import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Rajesh D\'Souza - Personal Website',
  description: 'High agency operator who owns cross-functional day-to-day execution enabling founders to focus on big picture goals.',
  metadataBase: new URL('https://rajeshdsouza.com'),
  openGraph: {
    title: 'Rajesh D\'Souza - Personal Website',
    description: 'High agency operator who owns cross-functional day-to-day execution enabling founders to focus on big picture goals.',
    url: 'https://rajeshdsouza.com',
    siteName: 'Rajesh D\'Souza',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajesh D\'Souza - Personal Website',
    description: 'High agency operator who owns cross-functional day-to-day execution enabling founders to focus on big picture goals.',
    creator: '@rdgoesgeek',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={cn('bg-black min-h-screen text-white', inter.className)} suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}