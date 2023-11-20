import { useEffect, useState } from 'react';
import { useElementInViewPort } from './useElementInViewPort';

export const useImageLoaded = (lazy?: boolean) => {
  const { ref, isVisible } = useElementInViewPort({
    rootMargin: '0px 0px 500px 0px',
  }); // 이미지 요소가 뷰포트 하단 500에 들어올경우 감지

  const [isLoaded, setIsLoaded] = useState(!lazy);

  useEffect(() => {
    if (isLoaded || !isVisible) {
      return;
    }
    setIsLoaded(true);
  });
  return { ref, isLoaded };
};
