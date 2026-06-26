import { quotes } from '../../data/quotesData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import QuoteCard from './QuoteCard';
import './Quotes.css';

export default function Quotes() {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section id="quotes" className="section">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Wisdom</span>
          <h2 className="section__title">Famous Quotes</h2>
          <p className="section__subtitle">
            Timeless words that continue to inspire generations in the pursuit of justice, equality, and knowledge.
          </p>
          <div className="section__divider" />
        </header>

        <div className="quotes-grid">
          {quotes.map((quote, index) => (
            <QuoteCard key={quote.id} quote={quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
