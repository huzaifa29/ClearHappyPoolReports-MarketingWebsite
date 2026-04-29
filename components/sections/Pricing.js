'use client';

import { useEffect } from 'react';
import styles from './Pricing.module.css';

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

const PLANS = [
  {
    name: 'Core',
    price: '49',
    subtitle: 'Best for small pool service businesses',
    featured: false,
    features: [
      'Limited number of pools or technicians',
      'Client & pool management',
      'Scheduling & basic routing',
      'Pool service reports with photos',
      'Team communication',
      'Monthly subscription only',
    ],
  },
  {
    name: 'Plus',
    price: '99',
    subtitle: 'Ideal for growing pool service companies',
    featured: true,
    features: [
      'Higher number of pools or technicians',
      'Includes everything in Basic Plan',
      'Advanced scheduling & route optimization',
      'Accounting software integration (QuickBooks)',
      'Detailed reporting & service history',
      'Priority support',
      'Monthly subscription only',
    ],
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
            No hidden fees. No long-term contracts. Just straightforward
            pricing built for pool service professionals.
          </p>
        </div>

        {/* ── Plans ── */}
        <div className={styles.plansGrid}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''} js-pricing-card`}
            >
              {/* Header */}
              <div className={styles.cardHeader}>
                {plan.featured && (
                  <div className={styles.featuredBadge}>
                    <span className={styles.badgeStar}>★</span>
                    Most Popular
                  </div>
                )}

                <h3 className={styles.planName}>{plan.name} Plan</h3>

                {/* Price pill */}
                <div className={styles.pricePill}>
                  <span className={styles.currencySign}>$</span>
                  <span className={styles.priceAmount}>{plan.price}</span>
                  <span className={styles.pricePeriod}>/Month</span>
                </div>
              </div>

              {/* Subtitle */}
              <p className={styles.planSubtitle}>{plan.subtitle}</p>
              <div className={styles.divider} />

              {/* Features */}
              <ul className={styles.featureList}>
                {plan.features.map((feat, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureDot} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`${styles.ctaBtn} ${plan.featured ? styles.ctaBtnFilled : styles.ctaBtnOutline}`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
