import * as Styled from './PlayList.styled';

import { useAppSelector } from 'common/hooks/useReduxStore';
import { MainHeader } from '../Header/MainHeader';
import PlayListItem from '../PlayListItem';

const PlayList = () => {
  const playerSelector = useAppSelector((state) => state.music.player);

  return (
    <Styled.Layout>
      <MainHeader title="P L A Y L I S T" />
      {playerSelector.list.length > 0 ? (
        playerSelector.list.map(({ name, img_url, source_url }, index) => (
          <PlayListItem name={name} img_url={img_url} key={index} id={++index} source_url={source_url} />
        ))
      ) : (
        <Styled.PlayListText>재생 목록이 비어있습니다.</Styled.PlayListText>
      )}
    </Styled.Layout>
  );
};

export default PlayList;
