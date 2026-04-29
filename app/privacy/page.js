import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Clear & Happy Pool Reports',
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: '820px', margin: '0 auto', padding: '8rem 2rem 6rem', fontFamily: 'var(--font-body)' }}>
      <Link href="/" style={{ fontSize: '0.9rem', color: '#06b6d4', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
        ← Back to Home
      </Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: '#1e3a5f', marginBottom: '0.75rem' }}>
        Privacy Policy
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2.5rem', fontSize: '0.9rem' }}>Last updated: January 2026</p>
      <p style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
        Clear &amp; Happy Pool Reports ("we", "us", or "our") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
      </p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>Information We Collect</h2>
      <p style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
        We collect information you provide directly — such as your name, email address, business details, and messages submitted through our contact form. We also collect usage data to improve the platform.
      </p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>How We Use Your Information</h2>
      <p style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
        We use your information to provide and improve our services, respond to inquiries, send important updates about your account, and comply with legal obligations. We do not sell your data to third parties.
      </p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>Contact</h2>
      <p style={{ lineHeight: 1.8, color: '#475569' }}>
        For privacy-related questions, contact us at{' '}
        <a href="mailto:clearandhappypools@gmail.com" style={{ color: '#06b6d4' }}>clearandhappypools@gmail.com</a>.
      </p>
    </main>
  );
}
