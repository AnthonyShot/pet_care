'use client';

import { useState } from 'react';

type FallbackImageProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
};

export function FallbackImage({ src, fallbackSrc, alt }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
