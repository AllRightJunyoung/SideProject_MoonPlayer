import { useEffect } from 'react';
import useResolution from 'shared/hooks/useResolution';
import DesktopHeader from '../Desktop/DesktopHeader';
import MobileHeader from '../Mobile/MobileHeader';

// Header의 상태 값에 따라 어떤 헤더를 렌더링할지 결정한다.
export const MainHeaderLayout = ({ title }) => {
  const { resolution, setResolution } = useResolution();

  useEffect(() => {
    //  새로고침 발생시 상태값 초기화 되서 넣어줌
    if (window.innerWidth >= 1200) {
      setResolution('DESKTOP');
    } else {
      setResolution('MOBILE');
    }
  }, [resolution]);

  return <>{resolution === 'DESKTOP' ? <DesktopHeader title={title} /> : <MobileHeader />}</>;
};
export default MainHeaderLayout;
