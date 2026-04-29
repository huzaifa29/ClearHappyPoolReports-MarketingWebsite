'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About Us',   href: '#about' },
  { label: 'Features',   href: '#features' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Pricing',    href: '#pricing' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [activeLink,      setActiveLink]      = useState('Home');
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Left — Logo */}
        <Link href="/" aria-label="Clear & Happy Pool Reports Home">
          <Image
            src="/images/logo.png"
            alt="Clear & Happy Pool Reports"
            width={160}
            height={50}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Center — Nav Links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`${styles.navLink} ${activeLink === label ? styles.active : ''}`}
                onClick={() => handleNavClick(label)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — Actions */}
        <div className={styles.navRight}>
          <button className={styles.signIn}>Sign In</button>
          <Link href="#" className={styles.ctaButton}>
            Start Free Trial &nbsp;→
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`${styles.navLink} ${activeLink === label ? styles.active : ''}`}
            onClick={() => handleNavClick(label)}
          >
            {label}
          </Link>
        ))}
        <div className={styles.mobileActions}>
          <button className={styles.signIn}>Sign In</button>
          <Link href="#" className={styles.ctaButton}>Start Free Trial →</Link>
        </div>
      </div>
    </>
  );
}
