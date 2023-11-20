// 엘리먼트가 뷰 포트 내부에있는지 확인하는훅

import { useEffect, useRef, useState } from 'react';

export const useElementInViewPort = (option?: IntersectionObserverInit) => {
  const ref = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, option);
    ref.current && observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, option]);
  return { ref, isVisible };
};
