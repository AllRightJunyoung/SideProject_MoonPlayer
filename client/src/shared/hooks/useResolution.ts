import { useState, useEffect } from 'react';

const delay = 300;
let timer;
// 해상도에 맞게 감지하는 훅
const useResolution = () => {
  const [resolution, setResolution] = useState<'MOBILE' | 'Tablet' | 'DESKTOP'>('DESKTOP');

  useEffect(() => {
    const ev = () => {
      clearTimeout(timer);
      if (window.innerWidth >= 1200) {
        return setResolution('DESKTOP');
      } else if (window.innerWidth >= 768) {
        return setResolution('Tablet');
      } else {
        return setResolution('MOBILE');
      }
    };

    window.addEventListener('resize', () => {
      timer = setTimeout(ev, delay);
    });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', ev);
    };
  }, []);

  return { resolution, setResolution };
};

export default useResolution;
