'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>

        {/* ===== LEFT — Text Content ===== */}
        <div className={`${styles.content} ${visible ? styles.visible : ''}`}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            #1 Pool Service Software
          </div>

          <h1 className={styles.heading}>
            Simple, Reliable<br />
            Software For Pool<br />
            Service Businesses
          </h1>

          <p className={styles.body}>
            Clear &amp; Happy Pool Reports is the all-in-one platform
            designed for pool service professionals. Schedule
            appointments, manage clients, and grow your business—all
            from one powerful dashboard.
          </p>

          <div className={`${styles.actions} ${visible ? styles.visible : ''}`}>
            <Link href="#" className={styles.btnPrimary}>
              Start Free Trial &nbsp;→
            </Link>
            <Link href="#" className={styles.btnOutline}>
              <span className={styles.playIcon} />
              Watch Demo
            </Link>
          </div>
        </div>

        {/* ===== RIGHT — Image ===== */}
        <div className={`${styles.imageWrap} ${visible ? styles.visible : ''}`}>

          {/* Decorative elements */}
          <div className={styles.decoRing} />
          <div className={styles.decoDots}>
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={styles.decoDot} />
            ))}
          </div>

          {/* Hero image */}
          <Image
            src="/images/web-mob.png"
            alt="Clear & Happy Pool Reports — Web Dashboard & Mobile App"
            width={620}
            height={430}
            className={styles.heroImage}
            priority
          />

          {/* Floating stat card */}
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg
                width="18" height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <div className={styles.statLabel}>Active Clients</div>
              <div className={styles.statValue}>500+ Businesses</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
