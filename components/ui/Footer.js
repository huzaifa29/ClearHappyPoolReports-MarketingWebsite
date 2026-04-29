'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const NAV_COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features',  href: '#features' },
      { label: 'Pricing',   href: '#pricing'  },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',   href: '#about'   },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',    href: '/privacy'  },
      { label: 'Terms of Services', href: '/terms'    },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* ── Main row ── */}
        <div className={styles.mainRow}>

          {/* Left — brand */}
          <div className={styles.brand}>
            <Link href="/" aria-label="Clear & Happy Pool Reports Home">
              <Image
                src="/images/logo.png"
                alt="Clear & Happy Pool Reports"
                width={160}
                height={60}
                className={styles.logo}
              />
            </Link>
            <p className={styles.tagline}>
              Streamline your pool service business with our comprehensive management solution.
            </p>
          </div>

          {/* Right — link columns */}
          <nav className={styles.linkColumns} aria-label="Footer navigation">
            {NAV_COLS.map((col) => (
              <div key={col.heading} className={styles.col}>
                <h4 className={styles.colHeading}>{col.heading}</h4>
                <ul className={styles.colLinks}>
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className={styles.colLink}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ── Separator ── */}
        <div className={styles.separator} />

        {/* ── Bottom bar ── */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 Clear &amp; Happy Pool Resorts. All rights reserved.
          </p>

          {/* Social icons */}
          <div className={styles.socials}>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
