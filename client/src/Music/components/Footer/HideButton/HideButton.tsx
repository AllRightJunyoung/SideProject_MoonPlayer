import * as Styled from './HideButton.styled';
import { IconButton } from 'shared/components';
import { useMusicPageUIController } from 'Music/hooks';

export const HideButton = () => {
  const { onhandleOpenMusicFooterUI, isOpenMusicFooterUI } = useMusicPageUIController();

  return (
    <Styled.Layout onClick={() => onhandleOpenMusicFooterUI(!isOpenMusicFooterUI)}>
      {!isOpenMusicFooterUI ? (
        <IconButton name="up" color="white" size="1x" />
      ) : (
        <IconButton name="down" color="white" size="1x" />
      )}
    </Styled.Layout>
  );
};

export default HideButton;
