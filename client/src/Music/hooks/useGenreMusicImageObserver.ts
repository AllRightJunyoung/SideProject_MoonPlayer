import { useEffect, useMemo, useRef, useState } from 'react';

export const useGenreMusicImageObserver = (src: string) => {
  const [imageSrc, setImageSrc] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    let observer;
    if (imageRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(imageRef.current);
          }
        },
        { rootMargin: '0px 0px 500px 0px' }
      );

      observer.observe(imageRef.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [imageRef, imageSrc, src]);
  return useMemo(() => ({ imageRef, imageSrc, src }), [imageRef, imageSrc, src]);
};
