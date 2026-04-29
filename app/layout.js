import '../styles/globals.css';

export const metadata = {
  title: 'Clear & Happy Pool Reports — Simple, Reliable Software For Pool Service Businesses',
  description:
    'Clear & Happy Pool Reports is the all-in-one platform for pool service professionals. Schedule appointments, manage clients, and grow your business from one powerful dashboard.',
  keywords: 'pool service software, pool reports, pool business management, pool scheduling',
  openGraph: {
    title: 'Clear & Happy Pool Reports',
    description: 'Simple, Reliable Software For Pool Service Businesses',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
