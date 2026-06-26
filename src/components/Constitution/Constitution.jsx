import { constitutionPillars } from '../../data/constitutionData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Constitution.css';

function PillarCard({ pillar, index }) {
  const [ref, isVisible] = useIntersectionObserver();
  const animClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';

  return (
    <div
      ref={ref}
      className={`constitution__pillar animate-on-scroll ${animClass} delay-${(index % 4) + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="constitution__pillar-icon" aria-hidden="true">{pillar.icon}</div>
      <h3 className="constitution__pillar-title">{pillar.title}</h3>
      <p className="constitution__pillar-desc">{pillar.description}</p>
    </div>
  );
}

export default function Constitution() {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [centerRef, centerVisible] = useIntersectionObserver();

  return (
    <section id="constitution" className="section constitution">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Founding Document</span>
          <h2 className="section__title">The Indian Constitution</h2>
          <p className="section__subtitle">
            As Chairman of the Drafting Committee, Dr. Ambedkar gave India its supreme law — a living testament to justice, liberty, and equality.
          </p>
          <div className="section__divider" />
        </header>

        <div className="constitution__infographic">
          <div
            ref={centerRef}
            className={`constitution__center animate-on-scroll animate-zoom ${centerVisible ? 'is-visible' : ''}`}
          >
            <div className="constitution__center-ring constitution__center-ring--outer" aria-hidden="true" />
            <div className="constitution__center-ring constitution__center-ring--inner" aria-hidden="true" />
            <div className="constitution__center-content">
              <span className="constitution__center-icon" aria-hidden="true">📜</span>
              <h3 className="constitution__center-title">Father of the Constitution</h3>
              <p className="constitution__center-text">
                2 years, 11 months &amp; 18 days of meticulous drafting
              </p>
              <time className="constitution__center-date" dateTime="1949-11-26">Adopted: 26 Nov 1949</time>
            </div>
          </div>

          <div className="constitution__pillars">
            {constitutionPillars.map((pillar, index) => (
              <PillarCard key={pillar.title} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
