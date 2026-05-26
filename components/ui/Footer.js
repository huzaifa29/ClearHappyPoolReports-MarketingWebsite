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
            © 2026 Clear &amp; Happy Pool Reports. All rights reserved.
          </p>

          {/* Social icons */}
          <div className={styles.socials}>
            {/* YouTube */}
            <a href="https://www.youtube.com/@ClearandHappyPoolReports" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a2a35"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
