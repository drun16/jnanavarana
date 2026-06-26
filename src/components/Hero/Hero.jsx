import { useEffect, useState } from 'react';
import '../../css/Hero.css';

// const HERO_PORTRAIT =
//   'https://upload.wikimedia.org/wikipedia/commons/c/c3/Dr._Bhimrao_Ambedkar.jpg';
const HERO_PORTRAIT =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlf_NjOJjCT_qv5wweFeqW9AA8fwZ_PO_kKQ&s';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullQuote = 'Cultivation of mind should be the ultimate aim of human existence.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullQuote.length) {
        setTypedText(fullQuote.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__particles" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="hero__particle" style={{ '--i': i }} />
          ))}
        </div>
        <div className="hero__gradient-orb hero__gradient-orb--1" aria-hidden="true" />
        <div className="hero__gradient-orb hero__gradient-orb--2" aria-hidden="true" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Educational Exhibition</p>
          <h1 className="hero__title">
            Jnanavarana <span className="hero__title-year">2026</span>
          </h1>
          <p className="hero__subtitle">
            The Life, Legacy and Vision of Bharat Ratna Dr. B. R. Ambedkar
          </p>

          <blockquote className="hero__quote">
            <span className="hero__quote-mark" aria-hidden="true">&ldquo;</span>
            <p className="hero__quote-text">
              {typedText}
              <span className="hero__cursor" aria-hidden="true">|</span>
            </p>
            <cite className="hero__quote-author">— Dr. B. R. Ambedkar</cite>
          </blockquote>

          <div className="hero__cta">
            <button className="btn btn--primary" onClick={() => scrollTo('#biography')}>
              Explore Biography
            </button>
            <button className="btn btn--outline" onClick={() => scrollTo('#gallery')}>
              Photo Gallery
            </button>
          </div>
        </div>

        <div className="hero__portrait-wrapper">
          <div className="hero__portrait-frame">
            <div className="hero__portrait-glow" aria-hidden="true" />
            <img
              src={HERO_PORTRAIT}
              alt="Portrait of Dr. Bhimrao Ramji Ambedkar, architect of the Indian Constitution"
              className="hero__portrait"
              loading="eager"
              width={800}
              height={1000}
            />
            <div className="hero__portrait-badge">
              <span className="hero__portrait-badge-year">1891</span>
              <span className="hero__portrait-badge-year">1956</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
