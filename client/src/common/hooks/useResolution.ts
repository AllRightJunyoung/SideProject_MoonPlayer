import { useState, useEffect } from 'react';

// call in Global Component and inject to Context

// 해상도에 맞게 감지하는 훅
const useResolution = () => {
  const [resolution, setResolution] = useState<'MOBILE' | 'Tablet' | 'DESKTOP'>('DESKTOP');
  useEffect(() => {
    const ev = () => {
      if (window.innerWidth >= 1200) {
        return setResolution('DESKTOP');
      } else if (window.innerWidth >= 768) {
        return setResolution('Tablet');
      } else {
        return setResolution('MOBILE');
      }
    };
    window.addEventListener('resize', ev);
    return () => {
      window.removeEventListener('resize', ev);
    };
  }, []);

  return { resolution, setResolution };
};

export default useResolution;
