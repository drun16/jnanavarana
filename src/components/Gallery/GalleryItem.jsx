import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import '../../css/Gallery.css';

export default function GalleryItem({ item, onClick }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [imgSrc, setImgSrc] = useState(item.image);

  useEffect(() => {
    setImgSrc(item.image);
  }, [item.image]);

  const handleImgError = () => {
    if (item.fullImage && imgSrc !== item.fullImage) {
      setImgSrc(item.fullImage);
    }
  };

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
          src={imgSrc}
          alt={item.alt}
          className="gallery-item__image"
          loading="lazy"
          decoding="async"
          onError={handleImgError}
          width={500}
          height={375}
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
