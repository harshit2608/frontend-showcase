import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ModalProvider from '@/components/providers/modal-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/images/preview.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'flex min-h-screen animate-fade-in-left flex-col transition-transform duration-700 ease-in-out dark:bg-[#1f1f1f]',
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey={`${siteConfig.name}-theme`}
          disableTransitionOnChange
        >
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
