import * as Styled from './MyPlayListHeader.styled';
import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import useMusicPageUIControl from 'Music/hooks/useMusicPageUIController';
import { IconButton } from 'common/components';

const MyPlayListHeader = ({ title }) => {
  const dialogCtx = useContext(DiaLogContext);
  const { onhandleMyPlayListUI } = useMusicPageUIControl();

  const handleSpinnerButton = () => {
    dialogCtx.showConfirm('PlayListLoad');
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

export default MyPlayListHeader;
