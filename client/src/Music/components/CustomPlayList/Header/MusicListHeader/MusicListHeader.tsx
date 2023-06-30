import * as Styled from './MusicListHeader.styled';
import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import useMusicPageUIControl from 'Music/components/hooks/useMusicPageUIController';
import { IconButton } from 'common/components';

export const MusicListHeader = ({ title }) => {
  const dialogCtx = useContext(DiaLogContext);
  const { onhandleMyPlayListUI } = useMusicPageUIControl();
  const handleSpinnerButton = () => {
    dialogCtx.showConfirm('Load');
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Title>{title}</Styled.Title>
      <Styled.IconButtonBox direction="row">
        <IconButton name="spinner" size="2x" color="white" onClick={handleSpinnerButton} />
        <IconButton
          name="home"
          size="2x"
          color="white"
          onClick={() => {
            onhandleMyPlayListUI(true);
          }}
        />
      </Styled.IconButtonBox>
    </Styled.Layout>
  );
};

export default MusicListHeader;
