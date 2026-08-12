'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home',        href: '#home'     },
  { label: 'About Us',    href: '#about'    },
  { label: 'Features',    href: '#features' },
  { label: 'Our Mission', href: '#mission'  },
  { label: 'Pricing',     href: '#pricing'  },
  { label: 'Contact Us',  href: '#contact'  },
];

// Section ids in page order — must match the id= attributes on each section
const SECTION_IDS = ['home', 'about', 'features', 'mission', 'pricing', 'contact'];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeLink,     setActiveLink]     = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track whether the user just clicked a link so we don't fight the scroll observer
  const clickedRef = useRef(false);
  const clickTimerRef = useRef(null);

  useEffect(() => {
    // ── Scroll shadow ──────────────────────────────────────
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── IntersectionObserver — highlight nav based on section in view ──
    const observers = [];

    const activate = (label) => {
      // Don't override while user is still scrolling after a click
      if (clickedRef.current) return;
      setActiveLink(label);
    };

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const label = NAV_LINKS.find((l) => l.href === `#${id}`)?.label;
      if (!label) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) activate(label);
        },
        {
          // Fire when section top crosses into the upper 25% of the viewport
          rootMargin: '-10% 0px -70% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observers.forEach((o) => o.disconnect());
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  const handleNavClick = (label) => {
    // Immediately set active on click for snappy feel
    setActiveLink(label);
    setMobileMenuOpen(false);

    // Suppress observer for ~800ms so the smooth-scroll animation
    // doesn't flicker through intermediate sections
    clickedRef.current = true;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      clickedRef.current = false;
    }, 800);
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

        {/* Centre — Nav Links */}
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
          <Link href="https://dashboard.clearandhappypoolreports.com/login" className={styles.ctaButton}>
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
          <Link href="https://dashboard.clearandhappypoolreports.com/login" className={styles.ctaButton}>Start Free Trial →</Link>
        </div>
      </div>
    </>
  );
}
