import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onLoadComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadComplete, 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className={`loader ${fadeOut ? 'loader--fade-out' : ''}`} role="status" aria-label="Loading">
      <div className="loader__inner">
        <div className="loader__emblem">
          <span className="loader__ring" />
          <span className="loader__initials">बी.आर.अ.</span>
        </div>
        <h1 className="loader__title">Jnanavarana 2026</h1>
        <p className="loader__subtitle">The Life, Legacy and Vision of Bharat Ratna Dr. B. R. Ambedkar</p>
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>
      </div>
    </div>
  );
}
