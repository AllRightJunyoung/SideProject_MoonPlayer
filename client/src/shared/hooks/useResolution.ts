import { getCurrentResolution } from 'Music/utils/resolution';
import { useState, useEffect, useMemo } from 'react';
const delay = 300;
let timer;
// 해상도에 맞게 감지하는 훅
const useResolution = () => {
  const [resolution, setResolution] = useState<'MOBILE' | 'Tablet' | 'DESKTOP'>(getCurrentResolution());

  useEffect(() => {
    const ev = () => {
      clearTimeout(timer);
      setResolution(getCurrentResolution());
    };

    window.addEventListener('resize', () => {
      timer = setTimeout(ev, delay);
    });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', ev);
    };
  }, []);

  return useMemo(() => ({ resolution, setResolution }), [resolution, setResolution]);
};

export default useResolution;
