import { educationInstitutions } from '../../data/educationData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Education.css';

function EducationCard({ item, index }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article
      ref={ref}
      className={`edu-card animate-on-scroll animate-zoom delay-${index + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="edu-card__header">
        <span className="edu-card__icon" aria-hidden="true">{item.icon}</span>
        <h3 className="edu-card__institution">{item.institution}</h3>
      </div>
      <div className="edu-card__meta">
        <div className="edu-card__meta-item">
          <span className="edu-card__meta-label">Degree</span>
          <span className="edu-card__meta-value">{item.degree}</span>
        </div>
        <div className="edu-card__meta-item">
          <span className="edu-card__meta-label">Year</span>
          <span className="edu-card__meta-value edu-card__year">{item.year}</span>
        </div>
      </div>
      <p className="edu-card__description">{item.description}</p>
    </article>
  );
}

export default function Education() {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="education" className="section section--alt">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Academic Journey</span>
          <h2 className="section__title">Education</h2>
          <p className="section__subtitle">
            A scholar of extraordinary breadth — his academic pursuits spanned continents and disciplines.
          </p>
          <div className="section__divider" />
        </header>

        <div className="edu-grid">
          {educationInstitutions.map((item, index) => (
            <EducationCard key={item.institution} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
