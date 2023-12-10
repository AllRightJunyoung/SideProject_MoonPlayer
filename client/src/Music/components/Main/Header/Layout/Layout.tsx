import useResolution from 'shared/hooks/useResolution';
import DesktopHeader from '../Desktop/DesktopHeader';
import MobileHeader from '../Mobile/MobileHeader';

// Header의 상태 값에 따라 어떤 헤더를 렌더링할지 결정한다.
export const MainHeaderLayout = ({ title }) => {
  const { resolution } = useResolution();

  return <>{resolution === 'DESKTOP' ? <DesktopHeader title={title} /> : <MobileHeader />}</>;
};
export default MainHeaderLayout;
