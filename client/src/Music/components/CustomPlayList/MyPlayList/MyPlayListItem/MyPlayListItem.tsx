import useMusicPageUIControl from 'Music/components/hooks/useMusicPageUIController';
import * as Styled from './MyPlayListItem.styled';
import { IconButton } from 'common/components';

const MyPlayListItem = ({ title, id }) => {
  // onClick을하면 MusicList UI로 전환시킨다.
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
      <Styled.Number>{id}</Styled.Number>
      <Styled.Title>{title}</Styled.Title>
      <IconButton color="rgba(255,255,255,0.64)" size="1x" name="trash" />
    </Styled.Layout>
  );
};

export default MyPlayListItem;
