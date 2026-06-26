import React from 'react';
import '../../css/Footer.css';

const usefulLinks = [
  { label: 'Biography', href: '#biography' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Quotes', href: '#quotes' },
  { label: 'Legacy', href: '#legacy' },
];

const socialLinks = [
  {
    label: 'Wikipedia',
    href: 'https://en.wikipedia.org/wiki/B._R._Ambedkar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    label: 'Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/Category:B._R._Ambedkar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 0 1 7.75 6h-3.27a13.9 13.9 0 0 0-4.48-3.11A8.01 8.01 0 0 1 12 4zm-5.2 8a13.9 13.9 0 0 0 1.72 4.11H5.25A8.01 8.01 0 0 1 6.8 12zm0 2a8.01 8.01 0 0 1 1.45 4.11h3.27A13.9 13.9 0 0 1 9.2 14H6.8zm5.2 6a8.01 8.01 0 0 1-4.48-3.11h3.27A13.9 13.9 0 0 0 12 20zm0-2a13.9 13.9 0 0 0 4.48-3.11h-3.27A13.9 13.9 0 0 1 12 18zm5.2-4h2.55A8.01 8.01 0 0 1 18.2 18h-3.27a13.9 13.9 0 0 0 1.72-4zm0-2a13.9 13.9 0 0 0-1.72-4.11H18.2a8.01 8.01 0 0 1-1.45 4.11zm-2.55-6h2.55A8.01 8.01 0 0 0 12 4c1.68 0 3.24.51 4.53 1.38A13.9 13.9 0 0 0 14.65 8z" />
      </svg>
    ),
  },
  {
    label: 'Constitution of India',
    href: 'https://www.india.gov.in/my-government/constitution-india',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h2 className="footer__title">Jnanavarana 2026</h2>
            <p className="footer__tagline">
              The Life, Legacy and Vision of Bharat Ratna Dr. B. R. Ambedkar
            </p>
            <p className="footer__purpose">Created for Educational Purpose</p>
            
            {/* Added Address Block */}
            <address className="footer__address" style={{ fontStyle: 'normal', marginTop: '1.5rem', opacity: 0.9, lineHeight: '1.6' }}>
              <strong>Venue:</strong><br />
              Government Medical and Engineering Hostel,<br />
              Bogadi, Mysore
            </address>
          </div>

          <div className="footer__links">
            <h3 className="footer__heading">Useful Links</h3>
            <ul>
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h3 className="footer__heading">Resources</h3>
            <div className="footer__social-icons">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="footer__social-link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Jnanavarana 2026. All images sourced from public archives with attribution.
          </p>
          <button className="footer__back-to-top" onClick={scrollToTop}>
            Back to Top
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" style={{ marginLeft: '8px' }}>
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}