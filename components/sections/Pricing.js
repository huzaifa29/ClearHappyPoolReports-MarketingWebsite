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
  'Route optimization',
  'Job scheduling',
  'Client & pool management',
  'QuickBooks software integration (subscription with QuickBooks required)',
  'Pool service reports with photos & video',
  'Pool repair service reports with photos & video',
  'Broadcast Emails',
  'Detailed reporting & service history',
  'Unlimited admins',
  'In-app team communication',
  'In-app smart prompt to text or call client before arrival',
  'Easy one-time employee app login capability',
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
            No hidden fees. No long-term contracts. All plans include every feature —
            the only difference is the number of technicians.
          </p>
        </div>

        {/* ── Plans grid ── */}
        <div className={styles.plansGrid}>
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''} js-pricing-card`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={styles.featuredBadge}>{plan.badge}</div>
              )}

              {/* Plan name */}
              <h3 className={styles.planName}>{plan.name}</h3>

              {/* Price */}
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

              {/* Technicians tag */}
              <div className={styles.techTag}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                {plan.technicians}
              </div>

              {plan.note && (
                <p className={styles.planNote}>{plan.note}</p>
              )}

              <div className={styles.divider} />

              {/* Feature list */}
              <ul className={styles.featureList}>
                {FEATURES.map((feat, fi) => (
                  <li key={fi} className={styles.featureItem}>
                    <span className={styles.checkIcon}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
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
