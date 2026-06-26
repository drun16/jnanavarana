import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import '../../css/Gallery.css';

export default function GalleryItem({ item, onClick }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <article
      ref={ref}
      className={`gallery-item animate-on-scroll animate-zoom ${isVisible ? 'is-visible' : ''}`}
      onClick={() => onClick(item)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(item); } }}
      tabIndex={0}
      role="button"
      aria-label={`View ${item.title}, ${item.year}`}
    >
      <div className="gallery-item__image-wrapper">
        <img
          src={item.image}
          alt={item.alt}
          className="gallery-item__image"
          loading="lazy"
          width={440}
          height={330}
        />
        <div className="gallery-item__overlay">
          <span className="gallery-item__year">{item.year}</span>
          <h3 className="gallery-item__title">{item.title}</h3>
          <p className="gallery-item__description">{item.description}</p>
        </div>
      </div>
      <div className="gallery-item__caption">
        <span className="gallery-item__caption-year">{item.year}</span>
        <span className="gallery-item__caption-text">{item.caption}</span>
      </div>
    </article>
  );
}
