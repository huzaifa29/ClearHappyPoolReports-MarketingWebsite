'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './ContactUs.module.css';

function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add(styles.inView)),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

export default function ContactUs() {
  useReveal('.js-showcase');
  useReveal('.js-contact-grid');

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>

        {/* ══════════════════════════════════════
            1. APP SCREENSHOTS SHOWCASE
        ══════════════════════════════════════ */}
        <div className={`${styles.showcaseBlock} js-showcase`}>
          <p className={styles.sectionLabel}>
            <span className={styles.labelDot} />
            See It In Action
          </p>
          <h2 className={styles.showcaseTitle}>
            Built for the way you<br />actually work
          </h2>
          <p className={styles.showcaseSubtitle}>
            Manage your entire pool service business from a powerful desktop
            dashboard — or on the go with our mobile app. Everything stays
            in sync, all the time.
          </p>

          {/* Screenshot stage */}
          <div className={styles.screenshotStage}>

            {/* Desktop — center */}
            <div className={styles.desktopWrap}>
              <div className={styles.desktopFrame}>
                <div className={styles.desktopBar}>
                  <span className={styles.trafficDot} />
                  <span className={styles.trafficDot} />
                  <span className={styles.trafficDot} />
                  <div className={styles.urlBar}>
                    <div className={styles.urlLock} />
                    <span className={styles.urlText}>app.clearhappypoolreports.com</span>
                  </div>
                </div>
                <Image
                  src="/images/about_us_one.jpg"
                  alt="Clear & Happy Pool Reports Dashboard"
                  width={800}
                  height={560}
                  className={styles.desktopScreen}
                  priority
                />
              </div>

              {/* Floating stat */}
              <div className={styles.desktopStat}>
                <div className={styles.statIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.statLabel}>Active Clients</div>
                  <div className={styles.statValue}>2,000+</div>
                </div>
              </div>
            </div>

            {/* Mobile — right side */}
            <div className={styles.mobileWrap}>
              <div className={styles.mobileFrame}>
                <div className={styles.mobileNotch} />
                <Image
                  src="/images/about_us_two.jpg"
                  alt="Clear & Happy Pool Reports Mobile App"
                  width={420}
                  height={760}
                  className={styles.mobileScreen}
                />
                <div className={styles.mobileBar} />
              </div>
            </div>

            <div className={styles.stageGlow} />
          </div>
        </div>

        {/* ══════════════════════════════════════
            2. CONTACT FORM
        ══════════════════════════════════════ */}
        <div className={`${styles.contactGrid} js-contact-grid`}>

          {/* Left — info */}
          <div className={styles.contactInfo}>
            <p className={styles.sectionLabel}>
              <span className={styles.labelDot} />
              Get In Touch
            </p>
            <h2 className={styles.contactTitle}>
              Ready to get started?<br />Let&apos;s talk.
            </h2>
            <p className={styles.contactDesc}>
              Whether you have questions about our plans, want to see a demo,
              or just want to chat with someone who truly understands pool service —
              we&apos;re here. Reach out and we&apos;ll get back to you quickly.
            </p>

            <div className={styles.contactItems}>
              {/* Email */}
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className={styles.contactItemText}>
                  <span className={styles.contactItemLabel}>Email</span>
                  <span className={styles.contactItemValue}>hello@clearhappypoolreports.com</span>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className={styles.contactItemText}>
                  <span className={styles.contactItemLabel}>Phone</span>
                  <span className={styles.contactItemValue}>+1 (555) 000-0000</span>
                </div>
              </div>

              {/* Location */}
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.contactItemText}>
                  <span className={styles.contactItemLabel}>Based In</span>
                  <span className={styles.contactItemValue}>United States</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>First Name</label>
                <input className={styles.formInput} type="text" placeholder="John" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Last Name</label>
                <input className={styles.formInput} type="text" placeholder="Smith" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <input className={styles.formInput} type="email" placeholder="john@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone (optional)</label>
                <input className={styles.formInput} type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.formLabel}>I&apos;m interested in</label>
                <select className={styles.formSelect}>
                  <option value="">Select a plan or topic...</option>
                  <option value="core">Core Plan — $49/month</option>
                  <option value="plus">Plus Plan — $99/month</option>
                  <option value="demo">Request a Demo</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label className={styles.formLabel}>Message</label>
                <textarea className={styles.formTextarea} placeholder="Tell us a bit about your pool service business..." />
              </div>
            </div>
            <button className={styles.submitBtn}>
              Send Message
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
