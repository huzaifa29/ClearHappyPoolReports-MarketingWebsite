'use client';

import { useEffect, useState } from 'react';
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

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

export default function ContactUs() {
  useReveal('.js-contact-grid');

  const [form,   setForm]   = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent,   setSent]   = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required.';
    if (!form.lastName.trim())  errs.lastName  = 'Last name is required.';
    if (!form.email.trim())     errs.email     = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                errs.email     = 'Please enter a valid email.';
    if (!form.interest)         errs.interest  = 'Please select an option.';
    if (!form.message.trim())   errs.message   = 'Message cannot be empty.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const first = document.querySelector('[data-error="true"]');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const subject = encodeURIComponent(`Clear & Happy Pool Reports — ${form.interest}`);
    const body    = encodeURIComponent(
      `First Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nInterested In: ${form.interest}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:clearandhappypools@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>

        {/* ── Section header ── */}
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>
            <span className={styles.labelDot} />
            Get In Touch
          </p>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionDesc}>
            Whether you have questions about our plans, want to see a demo, or just want
            to chat with someone who truly understands pool service — we&apos;re here.
          </p>
        </div>

        {/* ── Contact grid ── */}
        <div className={`${styles.contactGrid} js-contact-grid`}>

          {/* Left — image */}
          <div className={styles.contactImageWrap}>
            <Image
              src="/images/contactus.png"
              alt="Clear & Happy Pool Reports app screenshot"
              width={800}
              height={900}
              className={styles.contactImage}
              priority
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>We reply within 24 hours</span>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            <p className={styles.formSubtitle}>Fill in the form below and we&apos;ll get back to you shortly.</p>

            {sent && (
              <div className={styles.successBanner}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Your message has been sent! We&apos;ll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formGrid}>

                {/* First Name */}
                <div className={styles.formGroup} data-error={!!errors.firstName}>
                  <label className={styles.formLabel}>First Name <span className={styles.req}>*</span></label>
                  <input
                    className={`${styles.formInput} ${errors.firstName ? styles.inputError : ''}`}
                    type="text" name="firstName" placeholder="John"
                    value={form.firstName} onChange={handleChange}
                  />
                  {errors.firstName && <span className={styles.errorMsg}>{errors.firstName}</span>}
                </div>

                {/* Last Name */}
                <div className={styles.formGroup} data-error={!!errors.lastName}>
                  <label className={styles.formLabel}>Last Name <span className={styles.req}>*</span></label>
                  <input
                    className={`${styles.formInput} ${errors.lastName ? styles.inputError : ''}`}
                    type="text" name="lastName" placeholder="Smith"
                    value={form.lastName} onChange={handleChange}
                  />
                  {errors.lastName && <span className={styles.errorMsg}>{errors.lastName}</span>}
                </div>

                {/* Email */}
                <div className={styles.formGroup} data-error={!!errors.email}>
                  <label className={styles.formLabel}>Email Address <span className={styles.req}>*</span></label>
                  <input
                    className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                    type="email" name="email" placeholder="john@example.com"
                    value={form.email} onChange={handleChange}
                  />
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone <span className={styles.optional}>(optional)</span></label>
                  <input
                    className={styles.formInput}
                    type="tel" name="phone" placeholder="+1 (555) 000-0000"
                    value={form.phone} onChange={handleChange}
                  />
                </div>

                {/* Interested In */}
                <div className={`${styles.formGroup} ${styles.fullWidth}`} data-error={!!errors.interest}>
                  <label className={styles.formLabel}>I&apos;m Interested In <span className={styles.req}>*</span></label>
                  <select
                    className={`${styles.formSelect} ${errors.interest ? styles.inputError : ''}`}
                    name="interest" value={form.interest} onChange={handleChange}
                  >
                    <option value="">Select an option...</option>
                    <option value="Core Plan - $49/Month">Core Plan — $49/Month</option>
                    <option value="Plus Plan - $99/Month">Plus Plan — $99/Month</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {errors.interest && <span className={styles.errorMsg}>{errors.interest}</span>}
                </div>

                {/* Message */}
                <div className={`${styles.formGroup} ${styles.fullWidth}`} data-error={!!errors.message}>
                  <label className={styles.formLabel}>Message <span className={styles.req}>*</span></label>
                  <textarea
                    className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
                    name="message" placeholder="Tell us a bit about your pool service business..."
                    value={form.message} onChange={handleChange}
                  />
                  {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                </div>

              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
