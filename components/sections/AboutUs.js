'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './AboutUs.module.css';

function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add(styles.inView)),
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

const WHY_CARDS = [
  {
    title: "We're pool service owners first — software builders second.",
    desc: "This app wasn't created in a boardroom. It was built from real-world experience running pool routes, managing technicians, and communicating with customers day in and day out. We understand the challenges because we live them too.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="gi1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#14b8a6"/></linearGradient></defs>
        <path stroke="url(#gi1)" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: "Affordable by design",
    desc: "We believe great tools shouldn't break the bank. Our pricing is built with integrity and respect for the margins pool businesses actually operate on — no hidden fees, no bloated features you don't need.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="gi2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#14b8a6"/></linearGradient></defs>
        <line stroke="url(#gi2)" x1="12" y1="1" x2="12" y2="23"/>
        <path stroke="url(#gi2)" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Built for communication, not confusion",
    desc: "Clear communication is the backbone of every successful pool service business. Everything we build focuses on keeping owners, technicians, and customers connected and informed with less friction.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="gi3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#14b8a6"/></linearGradient></defs>
        <path stroke="url(#gi3)" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "Community-driven, always improving",
    desc: "We listen closely to feedback from fellow pool professionals and continuously improve the platform based on real needs — not assumptions. When our community grows stronger, we all do. Integrity guides every decision. From how we price our product to how we support our users, we're committed to honesty, transparency, and doing right by the industry we're proud to serve.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="gi4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#14b8a6"/></linearGradient></defs>
        <path stroke="url(#gi4)" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle stroke="url(#gi4)" cx="9" cy="7" r="4"/>
        <path stroke="url(#gi4)" d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path stroke="url(#gi4)" d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function AboutUs() {
  useReveal(`.js-story-row`);
  useReveal(`.js-why-header`);
  useReveal(`.js-why-card`);

  return (
    <section id="about">

      {/* ══ 1. HEADER ══ */}
      <div className={styles.header}>
        <Image
          src="/images/aboutusheader.jpg"
          alt="Beautiful clear pool"
          fill
          className={styles.headerBg}
          priority
        />
        <div className={styles.headerOverlay} />
        <div className={styles.headerContent}>
          <p className={styles.breadcrumb}>Clear &amp; Happy Pool Reports</p>
          <h2 className={styles.headerTitle}>About Us</h2>
          <span className={styles.headerAccent} />
        </div>
      </div>

      {/* ══ 2. CONTENT ══ */}
      <div className={styles.contentSection}>
        <p className={styles.sectionLabel}>Our Story</p>
        <h3 className={styles.sectionTitle}>Built by pool pros, for pool pros</h3>
        <div className={styles.sectionDivider}><span className={styles.dividerLine} /></div>

        {/* Row 1 — text left, image right */}
        <div className={`${styles.storyRow} js-story-row`}>
          <div className={styles.storyText}>
            <span className={styles.storyNumber}>01 / Our Origin</span>
            <div className={styles.storyAccentBar} />
            <h4 className={styles.storyHeading}>Why We Built This</h4>
            <p className={styles.storyBody}>
              Our app was created by people who know the realities of running a pool service business:
              early mornings, tight margins, constant communication, and the responsibility of doing
              right by customers and technicians every day. We built this platform because we wanted
              an affordable, practical solution that truly supports the way pool professionals work.
            </p>
          </div>
          <div className={styles.storyImageWrap}>
            <Image src="/images/firstsec.jpg" alt="Pool service professionals" width={620} height={360} className={styles.storyImage} />
            <div className={styles.imageTag}>
              <span className={styles.imageTagDot} />
              <span className={styles.imageTagText}>Built from real experience</span>
            </div>
          </div>
        </div>

        {/* Row 2 — image left, text right */}
        <div className={`${styles.storyRow} ${styles.reversed} js-story-row`} style={{transitionDelay:'0.15s'}}>
          <div className={styles.storyText}>
            <span className={styles.storyNumber}>02 / Our Values</span>
            <div className={styles.storyAccentBar} />
            <h4 className={styles.storyHeading}>What We Stand For</h4>
            <p className={styles.storyBody}>
              At our core, we believe in integrity, clear communication, and community. We believe
              technology should make your business easier to run, not more complicated or expensive.
              That&apos;s why we focus on simple, reliable tools designed specifically for pool service
              owners and technicians — no fluff, no unnecessary features, just what you actually need.
              <br /><br />
              Because we&apos;re part of the pool service industry ourselves, we listen closely, improve
              constantly, and build with intention. Our goal is to help pool businesses of all sizes
              stay organized, connected, and confident, while strengthening the community we&apos;re
              proud to be a part of. We&apos;re building this app alongside you — and we&apos;re in it for the long haul.
            </p>
          </div>
          <div className={styles.storyImageWrap}>
            <Image src="/images/secondsec.jpg" alt="Pool deck and lounge chairs" width={620} height={360} className={styles.storyImage} />
            <div className={styles.imageTag}>
              <span className={styles.imageTagDot} />
              <span className={styles.imageTagText}>Community &amp; integrity first</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══ 3. WHY DIFFERENT ══ */}
      <div className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={`${styles.whyHeader} js-why-header`}>
            <p className={styles.whyLabel}>What Sets Us Apart</p>
            <h3 className={styles.whyTitle}>Why We Are Different</h3>
            <p className={styles.whySubtitle}>
              Every decision we make — from pricing to features to support — comes back to one
              question: does this genuinely help pool service professionals do their best work?
            </p>
          </div>

          <div className={styles.whyGrid}>
            {WHY_CARDS.map((card, i) => (
              <div key={i} className={`${styles.whyCard} js-why-card`} style={{transitionDelay:`${i * 0.1}s`}}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
