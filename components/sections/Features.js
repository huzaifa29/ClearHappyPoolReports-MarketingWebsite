'use client';

import { useEffect } from 'react';
import styles from './Features.module.css';

/* ── Scroll reveal ── */
function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add(styles.inView)),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

/* ── Feature data ── */
const FEATURES = [
  {
    title: 'Smart Scheduling',
    desc: 'Optimize routes and manage appointments with drag-and-drop calendar. Never miss a service visit again.',
    iconBg: 'linear-gradient(135deg, #34d399, #059669)',   // green
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="3"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5"/>
        <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2.5"/>
        <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2.5"/>
        <line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5"/>
        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Client Management',
    desc: 'Keep detailed records of every client, their pool specifications, service history, and preferences in one place.',
    iconBg: 'linear-gradient(135deg, #a78bfa, #7c3aed)',   // purple
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Accounting Software Integration',
    desc: 'Integrates with QuickBooks and Oracle at no extra charge for seamless billing and accounting.',
    iconBg: 'linear-gradient(135deg, #fb923c, #ea580c)',   // orange
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: 'Business Analytics',
    desc: 'Get insights into your revenue, most profitable services, and customer retention with detailed reports.',
    iconBg: 'linear-gradient(135deg, #f472b6, #be185d)',   // pink/red
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    title: 'Service Checklists',
    desc: 'Create custom checklists for different service types. Ensure consistency and quality every time.',
    iconBg: 'linear-gradient(135deg, #22d3ee, #0891b2)',   // cyan
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: 'Automated Reminders',
    desc: 'Send automatic reminders to clients for upcoming services and notify your team of daily schedules.',
    iconBg: 'linear-gradient(135deg, #818cf8, #4338ca)',   // indigo/blue
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
  },
];

export default function Features() {
  useReveal(`.js-feat-title`);
  useReveal(`.js-feat-card`);

  return (
    <section id="features" className={styles.features}>
      <div className={styles.inner}>

        {/* ── Title Block ── */}
        <div className={`${styles.titleBlock} js-feat-title`}>
          <p className={styles.sectionLabel}>
            <span className={styles.labelDot} />
            Platform Features
          </p>
          <h2 className={styles.title}>
            Everything You Need To Run Your{' '}
            <span className={styles.titleAccent}>Pool Business</span>
          </h2>
          <p className={styles.description}>
            Powerful features designed specifically for pool service professionals to streamline
            operations and deliver exceptional customer service.
          </p>
        </div>

        {/* ── Feature Grid ── */}
        <div className={styles.grid}>
          {FEATURES.map((feat, i) => (
            <div key={i} className={`${styles.card} js-feat-card`}>
              {/* Icon */}
              <div
                className={styles.iconWrap}
                style={{ background: feat.iconBg }}
              >
                {feat.icon}
              </div>

              {/* Text */}
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
