import { timelineEvents } from '../../data/timelineData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import '../../css/Timeline.css';

function TimelineItem({ event, index }) {
  const [ref, isVisible] = useIntersectionObserver();
  const animClass = event.side === 'left' ? 'animate-slide-left' : 'animate-slide-right';

  return (
    <div
      ref={ref}
      className={`timeline__item timeline__item--${event.side} animate-on-scroll ${animClass} delay-${(index % 4) + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="timeline__marker">
        <span className="timeline__dot" />
      </div>
      <div className="timeline__card">
        <time className="timeline__year" dateTime={event.year.split('–')[0]}>{event.year}</time>
        <h3 className="timeline__title">{event.title}</h3>
        <p className="timeline__description">{event.description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="timeline" className="section">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Chronology</span>
          <h2 className="section__title">Timeline</h2>
          <p className="section__subtitle">
            Key milestones in the life of one of India&apos;s greatest minds — from birth to eternal legacy.
          </p>
          <div className="section__divider" />
        </header>

        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />
          {timelineEvents.map((event, index) => (
            <TimelineItem key={`${event.year}-${event.title}`} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
