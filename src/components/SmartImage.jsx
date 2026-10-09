import { useState } from 'react';

// Lazy image with fade-in and a graceful gradient fallback if the URL fails.


export default function SmartImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className={`smart-img ${className}`}>
      {!failed && (
        <img
          className={`smart-img__el ${loaded ? 'is-loaded' : ''}`}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
