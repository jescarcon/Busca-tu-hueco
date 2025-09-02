import React, { useEffect, useRef, useState } from 'react';
import './carrousel.css';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  showArrows?: boolean;
  gap?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
  showArrows = true,
  gap = 10,
}) => {
  const [hover, setHover] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const extendedImages = [...images, ...images]; // duplicar para loop infinito

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.offsetWidth;
        setWidth(containerWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [index, setIndex] = useState(images.length); // empezar en la segunda mitad
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(timer);
  }, [index, interval]);

  const next = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0] as HTMLElement;
    const cardWidth = card.offsetWidth + gap;
    let newIndex = index + 1;
    trackRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth',
    });
    setIndex(newIndex);

    if (newIndex >= extendedImages.length - images.length) {
      // reset instantáneamente al inicio
      setTimeout(() => {
        if (!trackRef.current) return;
        trackRef.current.scrollTo({
          left: images.length * cardWidth,
          behavior: 'auto',
        });
        setIndex(images.length);
      }, 300); // esperar la transición
    }
  };

  const prev = () => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0] as HTMLElement;
    const cardWidth = card.offsetWidth + gap;
    let newIndex = index - 1;
    trackRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth',
    });
    setIndex(newIndex);

    if (newIndex < images.length) {
      setTimeout(() => {
        if (!trackRef.current) return;
        trackRef.current.scrollTo({
          left: extendedImages.length - 2 * images.length * cardWidth,
          behavior: 'auto',
        });
        setIndex(extendedImages.length - 2 * images.length);
      }, 300);
    }
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {showArrows && hover && (
        <button className="carousel-arrow left" onClick={prev}>
          &#10094;
        </button>
      )}
      <div
        className="carousel-track"
        ref={trackRef}
        style={{ gap: `${gap}px` }}
      >
        {extendedImages.map((img, i) => (
          <div className="carousel-card" key={i}>
            <img src={img} alt={`carousel-${i}`} />
          </div>
        ))}
      </div>
      {showArrows && hover && (
        <button className="carousel-arrow right" onClick={next}>
          &#10095;
        </button>
      )}
    </div>
  );
};

export default ImageCarousel;
