import useMusicPageUIControl from 'Music/hooks/useMusicPageUIController';
import * as Styled from './MyPlayListItem.styled';
import { IconButton } from 'common/components';

const MyPlayListItem = ({ title, order }) => {
  const { onhandleMyPlayListUI } = useMusicPageUIControl();

  return (
    <Styled.Layout
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={() => {
        onhandleMyPlayListUI(false);
      }}
    >
      <Styled.Number>{order}</Styled.Number>
      <Styled.Title>{title}</Styled.Title>
      <IconButton color="rgba(255,255,255,0.64)" size="1x" name="trash" />
    </Styled.Layout>
  );
};

export default MyPlayListItem;
