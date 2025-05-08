import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://akhisargozdekuaforu.com'),
  title: {
    default: 'Gözde Erkek Kuaförü',
    template: '%s | Gözde Erkek Kuaförü'
  },
  description: 'Profesyonel saç kesimi, sakal tıraşı ve bakım hizmetleri. Modern ve şık ortamda kaliteli hizmet.',
  keywords: ['kuaför', 'erkek kuaförü', 'saç kesimi', 'sakal tıraşı', 'berber', 'profesyonel kuaför'],
  authors: [{ name: 'Adil & Baki Erdoğan' }],
  creator: 'Adil & Baki Erdoğan',
  publisher: 'Gözde Erkek Kuaförü',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://akhisargozdekuaforu.com',
    siteName: 'Gözde Erkek Kuaförü',
    title: 'Gözde Erkek Kuaförü',
    description: 'Profesyonel saç kesimi, sakal tıraşı ve bakım hizmetleri',
    images: [
      {
        url: '/sources/logo.png',
        width: 800,
        height: 600,
        alt: 'Gözde Erkek Kuaförü Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gözde Erkek Kuaförü',
    description: 'Profesyonel saç kesimi, sakal tıraşı ve bakım hizmetleri',
    images: ['/sources/logo.png'],
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
  icons: {
    icon: '/sources/logo.png',
    apple: '/sources/logo.png',
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console doğrulama kodu
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
