import '@/styles/globals.css';
import { Metadata } from 'next';

import { Analytics } from '@/components/analytics';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { seoMetaData } from '@/config/seo-meta-data';
import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = seoMetaData;

export const viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: 'white',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: 'black',
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontMono.variable}`}
        suppressHydrationWarning
      >
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <Analytics />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
