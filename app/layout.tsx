import type { Metadata } from 'next';
import './globals.css';

// Set NEXT_PUBLIC_SITE_URL to the real HTTPS domain before publishing.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://127.0.0.1:3002';
const title = 'OmneThea — Истина · Anar Mamedov';
const description = '«Истина» — первая книга проекта OmneThea. Пошаговый практикум из 40 шагов. Электронная, аудио и бумажная книга.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: 'website',
    siteName: 'OmneThea',
    title,
    description,
    locale: 'ru_RU',
    alternateLocale: ['en_US'],
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ru"><body>{children}</body></html>;
}
