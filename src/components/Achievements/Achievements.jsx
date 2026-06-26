import { achievements } from '../../data/achievementsData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Achievements.css';

function AchievementCard({ item, index }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article
      ref={ref}
      className={`achievement-card animate-on-scroll animate-fade delay-${(index % 6) + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="achievement-card__icon" aria-hidden="true">{item.icon}</div>
      <h3 className="achievement-card__title">{item.title}</h3>
      <p className="achievement-card__description">{item.description}</p>
      <div className="achievement-card__shine" aria-hidden="true" />
    </article>
  );
}

export default function Achievements() {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="achievements" className="section section--alt">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Honors &amp; Roles</span>
          <h2 className="section__title">Achievements</h2>
          <p className="section__subtitle">
            A polymath whose contributions span law, economics, politics, social reform, and literature.
          </p>
          <div className="section__divider" />
        </header>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <AchievementCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
