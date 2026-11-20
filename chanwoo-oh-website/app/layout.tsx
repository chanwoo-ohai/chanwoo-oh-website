import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';
import { siteDescription, siteTitle, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: '%s | Chanwoo Oh' },
  description: siteDescription,
  authors: [{ name: 'Chanwoo Oh' }],
  keywords: ['Chanwoo Oh', '오찬우', 'Human-AI Interaction', 'Human-Centered AI', 'HCI', 'Sungkyunkwan University', 'Creative Technology'],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Chanwoo Oh',
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
    alternateLocale: ['ko_KR'],
  },
  twitter: { card: 'summary_large_image', title: siteTitle, description: siteDescription },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#101114' },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('lang');if(l==='ko')document.documentElement.lang='ko';}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
