import { biographyTopics } from '../../data/biographyData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import '../../css/Biography.css';

function BioCard({ topic, index }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article
      ref={ref}
      className={`bio-card animate-on-scroll animate-fade delay-${(index % 6) + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="bio-card__icon" aria-hidden="true">{topic.icon}</div>
      <h3 className="bio-card__title">{topic.title}</h3>
      <p className="bio-card__content">{topic.content}</p>
    </article>
  );
}

export default function Biography() {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="biography" className="section section--alt">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Life Story</span>
          <h2 className="section__title">Biography</h2>
          <p className="section__subtitle">
            From a marginalized childhood to becoming the architect of modern India — the extraordinary journey of Dr. B. R. Ambedkar.
          </p>
          <div className="section__divider" />
        </header>

        <div className="bio-grid">
          {biographyTopics.map((topic, index) => (
            <BioCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
