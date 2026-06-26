import { useCallback, useEffect, useState } from 'react';
import { galleryCategories, galleryItems } from '../../data/galleryData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import GalleryItem from './GalleryItem';
import '../../css/Gallery.css';

function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
      <button className="lightbox__close" onClick={onClose} aria-label="Close lightbox">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {hasPrev && (
        <button className="lightbox__nav lightbox__nav--prev" onClick={onPrev} aria-label="Previous image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button className="lightbox__nav lightbox__nav--next" onClick={onNext} aria-label="Next image">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img src={item.fullImage || item.image} alt={item.alt} className="lightbox__image" />
        <div className="lightbox__info">
          <time className="lightbox__year">{item.year}</time>
          <h3 className="lightbox__title">{item.title}</h3>
          <p className="lightbox__description">{item.description}</p>
          <p className="lightbox__attribution">Source: {item.attribution}</p>
        </div>
      </div>

      <div className="lightbox__backdrop" onClick={onClose} aria-hidden="true" />
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [headerRef, headerVisible] = useIntersectionObserver();

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((item) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  const currentIndex = lightboxItem
    ? filteredItems.findIndex((i) => i.id === lightboxItem.id)
    : -1;

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) setLightboxItem(filteredItems[currentIndex - 1]);
  }, [currentIndex, filteredItems]);

  const goToNext = useCallback(() => {
    if (currentIndex < filteredItems.length - 1) setLightboxItem(filteredItems[currentIndex + 1]);
  }, [currentIndex, filteredItems]);

  return (
    <section id="gallery" className="section section--alt gallery-section">
      <div className="section__container">
        <header
          ref={headerRef}
          className={`section__header animate-on-scroll animate-fade ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section__label">Historical Archives</span>
          <h2 className="section__title">Photo Gallery</h2>
          <p className="section__subtitle">
            A visual journey through the life of Dr. Ambedkar — authentic historical photographs from public archives.
          </p>
          <div className="section__divider" />
        </header>

        <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`gallery-filter ${activeCategory === cat ? 'gallery-filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-masonry">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} onClick={openLightbox} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="gallery-empty">No images found in this category.</p>
        )}
      </div>

      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < filteredItems.length - 1}
        />
      )}
    </section>
  );
}
