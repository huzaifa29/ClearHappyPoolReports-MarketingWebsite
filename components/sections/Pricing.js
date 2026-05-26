'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Pricing.module.css';

function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add(styles.inView)),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

const FEATURES = [
  { icon: '🗺️', label: 'Route optimization' },
  { icon: '📅', label: 'Job scheduling' },
  { icon: '👥', label: 'Client & pool management' },
  { icon: '💼', label: 'QuickBooks software integration (subscription with QuickBooks required)' },
  { icon: '📸', label: 'Pool service reports with photos & video' },
  { icon: '🔧', label: 'Pool repair service reports with photos & video' },
  { icon: '📧', label: 'Broadcast Emails' },
  { icon: '📊', label: 'Detailed reporting & service history' },
  { icon: '♾️', label: 'Unlimited admins' },
  { icon: '💬', label: 'In-app team communication' },
  { icon: '📲', label: 'In-app smart prompt to text or call client before arrival' },
  { icon: '🔑', label: 'Easy one-time employee app login capability' },
];

const PLANS = [
  {
    name: 'Current',
    price: '$59.99',
    period: '/Month',
    technicians: '1 Technician',
    featured: false,
    cta: 'Book Now',
    ctaHref: '#contact',
  },
  {
    name: 'Flow',
    price: '$99.99',
    period: '/Month',
    technicians: '3 Technicians',
    featured: true,
    badge: '★ Most Popular',
    cta: 'Book Now',
    ctaHref: '#contact',
  },
  {
    name: 'Cascade',
    price: '$159.99',
    period: '/Month',
    technicians: '6 Technicians',
    featured: false,
    cta: 'Book Now',
    ctaHref: '#contact',
  },
  {
    name: 'Deep End',
    price: '$219.99',
    period: '/Month',
    technicians: '10 Technicians',
    featured: false,
    cta: 'Book Now',
    ctaHref: '#contact',
  },
  {
    name: 'Infinity',
    price: 'Custom',
    period: '',
    technicians: '10+ Technicians',
    featured: false,
    note: 'Contact us for custom pricing',
    cta: 'Contact Us',
    ctaHref: '#contact',
  },
];

export default function Pricing() {
  useReveal('.js-pricing-title');
  useReveal('.js-pricing-card');
  useReveal('.js-features-header');
  useReveal('.js-feature-item');

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.inner}>

        {/* ── Title ── */}
        <div className={`${styles.titleBlock} js-pricing-title`}>
          <p className={styles.sectionLabel}>
            <span className={styles.labelDot} />
            Simple Pricing
          </p>
          <h2 className={styles.title}>
            Choose From Our Lowest<br />Plans and Prices
          </h2>
          <p className={styles.subtitle}>
            No hidden fees. No long-term contracts. Every plan includes all features —
            the only difference is the number of technicians.
          </p>
        </div>

        {/* ══════════════════════════════════════
            ALL PLANS INCLUDE — Features section
        ══════════════════════════════════════ */}
        <div className={styles.featuresSection + " js-features-header"}>
          <div className={styles.featuresHeader}>
            <div className={styles.featuresHeaderLine} />
            <div className={styles.featuresHeaderText}>
              <span className={styles.featuresHeaderLabel}>All Plans Include</span>
              <p className={styles.featuresHeaderSub}>Every feature, every plan — no upsells.</p>
            </div>
            <div className={styles.featuresHeaderLine} />
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                className={styles.featureCard + " js-feature-item"}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className={styles.featureEmoji}>{feat.icon}</span>
                <span className={styles.featureLabel}>{feat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Plans grid ── */}
        <div className={styles.plansGrid}>
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''} js-pricing-card`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {plan.badge && (
                <div className={styles.featuredBadge}>{plan.badge}</div>
              )}

              <h3 className={styles.planName}>{plan.name}</h3>

              <div className={styles.priceWrap}>
                {plan.price === 'Custom' ? (
                  <div className={styles.customPrice}>
                    <span className={styles.customLabel}>Custom Pricing</span>
                  </div>
                ) : (
                  <div className={styles.pricePill}>
                    <span className={styles.currencySign}>$</span>
                    <span className={styles.priceAmount}>{plan.price.replace('$', '')}</span>
                    <span className={styles.pricePeriod}>{plan.period}</span>
                  </div>
                )}
              </div>

              <div className={styles.techTag}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                {plan.technicians}
              </div>

              {plan.note && <p className={styles.planNote}>{plan.note}</p>}

              <Link
                href={plan.ctaHref}
                className={`${styles.ctaBtn} ${plan.featured ? styles.ctaBtnFilled : styles.ctaBtnOutline}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
