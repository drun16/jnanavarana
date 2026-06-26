import { useEffect, useRef, useState } from 'react';
import { legacyStats, legacyTopics } from '../../data/legacyData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Legacy.css';

function AnimatedStat({ stat, isVisible }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className="legacy-stat">
      <span className="legacy-stat__icon" aria-hidden="true">{stat.icon}</span>
      <span className="legacy-stat__value">
        {count}{stat.suffix}
      </span>
      <span className="legacy-stat__label">{stat.label}</span>
    </div>
  );
}

function LegacyTopicCard({ topic, index }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article
      ref={ref}
      className={`legacy-topic animate-on-scroll animate-fade delay-${(index % 4) + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <span className="legacy-topic__icon" aria-hidden="true">{topic.icon}</span>
      <h3 className="legacy-topic__title">{topic.title}</h3>
      <p className="legacy-topic__description">{topic.description}</p>
    </article>
  );
}

export default function Legacy() {
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="legacy" className="section legacy">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Enduring Impact</span>
          <h2 className="section__title">Legacy</h2>
          <p className="section__subtitle">
            Dr. Ambedkar&apos;s vision continues to shape India and inspire movements for justice and equality across the world.
          </p>
          <div className="section__divider" />
        </header>

        <div
          ref={statsRef}
          className={`legacy-stats ${statsVisible ? 'legacy-stats--visible' : ''}`}
        >
          {legacyStats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} isVisible={statsVisible} />
          ))}
        </div>

        <div className="legacy-topics">
          {legacyTopics.map((topic, index) => (
            <LegacyTopicCard key={topic.title} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
