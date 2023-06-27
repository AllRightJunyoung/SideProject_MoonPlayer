import * as Styled from './HideButton.styled';
import { IconButton } from 'common/components';
import { useMusicPageController } from 'Music/hooks';

export const HideButton = () => {
  const { onhandleOpenMusicFooterUI, isOpenMusicFooterUI } = useMusicPageController();

  const renderHideButton = !isOpenMusicFooterUI ? (
    <IconButton name="up" color="white" size="1x" />
  ) : (
    <IconButton name="down" color="white" size="1x" />
  );
  return (
    <Styled.Layout onClick={() => onhandleOpenMusicFooterUI(!isOpenMusicFooterUI)}>{renderHideButton}</Styled.Layout>
  );
};

export default HideButton;
