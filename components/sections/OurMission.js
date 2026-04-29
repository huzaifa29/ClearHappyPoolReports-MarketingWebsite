'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './OurMission.module.css';

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

const TILES = [
  {
    image: '/images/tile_one.jpg',
    title: 'Built by Pool Pros',
    desc: "We're pool service company owners who actually run routes and manage techs. This app is built from real-world experience — not guesses.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    image: '/images/tile_two.jpg',
    title: 'Simple & Affordable',
    desc: "No bloated features. No crazy prices. Just practical tools designed for the way pool businesses really work.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    image: '/images/tile_three.jpg',
    title: 'Communication First',
    desc: "Clear communication keeps everything moving. We make it easier to stay connected with your team and your customers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    image: '/images/tile_four.jpg',
    title: 'Community-Driven',
    desc: "Many of our features come straight from feedback from fellow pool pros. We build together and improve constantly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    image: '/images/tile_six.jpg',
    title: 'Integrity Matters',
    desc: "We do the right thing — in pricing, support, and everything we build. Always.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function OurMission() {
  useReveal('.js-mission-title');
  useReveal('.js-mission-tiles');

  return (
    <section id="mission" className={styles.mission}>
      <div className={styles.inner}>

        {/* ── Title Block ── */}
        <div className={`${styles.titleBlock} js-mission-title`}>
          <p className={styles.sectionLabel}>
            <span className={styles.labelDot} />
            What Drives Us
          </p>
          <h2 className={styles.title}>Our Mission</h2>
          <p className={styles.description}>
            Our mission is to support pool service owners and technicians with affordable tools that
            make daily work simpler and more connected. Built by pool service company owners, our app
            is rooted in integrity, open communication, and a shared commitment to growing a stronger
            pool service community together.
          </p>
        </div>

        {/* ── Flip Tiles ── */}
        <div className={`${styles.tilesRow} js-mission-tiles`}>
          {TILES.map((tile, i) => (
            <div key={i} className={styles.tile}>
              <div className={styles.tileInner}>

                {/* FRONT */}
                <div className={styles.tileFront}>
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className={styles.tileFrontImg}
                  />
                  <div className={styles.tileFrontOverlay} />
                  <div className={styles.tileFrontContent}>
                    <span className={styles.tileNumber}>0{i + 1}</span>
                    <h3 className={styles.tileFrontTitle}>{tile.title}</h3>
                    <div className={styles.tileFlipHint}>
                      <span className={styles.hintLine} />
                      hover to learn more
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className={styles.tileBack}>
                  <div className={styles.tileBackIcon}>{tile.icon}</div>
                  <div className={styles.tileBackAccent} />
                  <h3 className={styles.tileBackTitle}>{tile.title}</h3>
                  <p className={styles.tileBackDesc}>{tile.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
