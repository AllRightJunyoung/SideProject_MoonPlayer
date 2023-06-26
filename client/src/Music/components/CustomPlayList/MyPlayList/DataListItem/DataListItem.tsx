import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import * as Styled from './DataListItem.styled';
import { IconButton } from 'common/components';

const DataListItem = ({ title, id }) => {
  // onClick을하면 MusicList UI로 전환시킨다.
  const { onhandleMyPlayListOptionUI } = useMusicPageUIControl();

  return (
    <Styled.Layout
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={() => {
        onhandleMyPlayListOptionUI(false);
      }}
    >
      <Styled.Number>{id}</Styled.Number>
      <Styled.Title>{title}</Styled.Title>
      <IconButton color="rgba(255,255,255,0.64)" size="1x" name="trash" />
    </Styled.Layout>
  );
};

export default DataListItem;
