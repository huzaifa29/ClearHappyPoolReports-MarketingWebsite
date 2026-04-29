import Link from 'next/link';

export const metadata = {
  title: 'Terms of Services — Clear & Happy Pool Reports',
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: '820px', margin: '0 auto', padding: '8rem 2rem 6rem', fontFamily: 'var(--font-body)' }}>
      <Link href="/" style={{ fontSize: '0.9rem', color: '#06b6d4', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
        ← Back to Home
      </Link>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: '#1e3a5f', marginBottom: '0.75rem' }}>
        Terms of Services
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2.5rem', fontSize: '0.9rem' }}>Last updated: January 2026</p>
      <p style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
        By accessing or using Clear &amp; Happy Pool Reports ("the Service"), you agree to be bound by these Terms of Services. Please read them carefully before using our platform.
      </p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>Use of the Service</h2>
      <p style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
        You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to misuse the platform, attempt unauthorized access, or use the Service in any way that could damage or impair it.
      </p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>Subscriptions & Payments</h2>
      <p style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
        Clear &amp; Happy Pool Reports is offered on a monthly subscription basis. You may cancel at any time. We reserve the right to modify pricing with reasonable notice to existing subscribers.
      </p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>Limitation of Liability</h2>
      <p style={{ lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
        To the fullest extent permitted by law, Clear &amp; Happy Pool Reports shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.
      </p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>Contact</h2>
      <p style={{ lineHeight: 1.8, color: '#475569' }}>
        For questions about these Terms, contact us at{' '}
        <a href="mailto:clearandhappypools@gmail.com" style={{ color: '#06b6d4' }}>clearandhappypools@gmail.com</a>.
      </p>
    </main>
  );
}
