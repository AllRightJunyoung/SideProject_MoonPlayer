import * as Styled from './HideButton.styled';
import { IconButton } from 'common/components';
import { useMusicPageUIController } from 'Music/components/hooks';

export const HideButton = () => {
  const { onhandleMusicFooterUI, isOpenMusicFooterUI } = useMusicPageUIController();

  return (
    <Styled.Layout onClick={() => onhandleMusicFooterUI(!isOpenMusicFooterUI)}>
      {!isOpenMusicFooterUI ? (
        <IconButton name="up" color="white" size="1x" />
      ) : (
        <IconButton name="down" color="white" size="1x" />
      )}
    </Styled.Layout>
  );
};

export default HideButton;
