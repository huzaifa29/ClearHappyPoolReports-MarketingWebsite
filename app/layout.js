import { Nunito, DM_Sans } from 'next/font/google';
import '../styles/globals.css';

// next/font loads fonts at build time — works on Vercel without any external requests
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Clear & Happy Pool Reports — Simple, Reliable Software For Pool Service Businesses',
  description:
    'Clear & Happy Pool Reports is the all-in-one platform for pool service professionals. Schedule appointments, manage clients, and grow your business from one powerful dashboard.',
  keywords: 'pool service software, pool reports, pool business management, pool scheduling',
  icons: {
    icon: [
      { url: '/favicon.ico',       sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple:    '/apple-icon.png',
  },
  openGraph: {
    title: 'Clear & Happy Pool Reports',
    description: 'Simple, Reliable Software For Pool Service Businesses',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
