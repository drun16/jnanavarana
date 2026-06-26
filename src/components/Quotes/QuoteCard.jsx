import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './QuoteCard.css';

export default function QuoteCard({ quote, index }) {
  const [ref, isVisible] = useIntersectionObserver();
  const animClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';

  return (
    <blockquote
      ref={ref}
      className={`quote-card animate-on-scroll ${animClass} delay-${(index % 4) + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <span className="quote-card__mark" aria-hidden="true">&ldquo;</span>
      <p className="quote-card__text">{quote.text}</p>
      <footer className="quote-card__footer">
        <cite className="quote-card__author">Dr. B. R. Ambedkar</cite>
        <span className="quote-card__context">{quote.context}</span>
      </footer>
    </blockquote>
  );
}
