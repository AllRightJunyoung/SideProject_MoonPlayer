import * as Styled from './MyPlayListHeader.styled';
import { IconButton } from 'shared/components';
import { useDialog } from 'shared/hooks';
import useMusicPageUIControl from 'Music/hooks/useMusicPageUIController';

const MyPlayListHeader = ({ title }) => {
  const { showConfirmMessage } = useDialog();
  const { onhandleMyPlayListUI } = useMusicPageUIControl();

  const handleSpinnerButton = () => {
    showConfirmMessage('PlayListLoad');
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
