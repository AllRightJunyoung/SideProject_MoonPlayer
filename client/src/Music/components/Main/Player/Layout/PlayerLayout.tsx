import * as Styled from './PlayerLayout.styled';

import { useAppSelector } from 'shared/hooks/useReduxStore';
import MainHeaderLayout from '../../Header/Layout';
import PlayerItem from '../PlayerItem';
import { memo } from 'react';

const PlayerLayout = () => {
  const playerSelector = useAppSelector((state) => state.music.player);

  return (
    <Styled.Layout>
      <MainHeaderLayout title="P L A Y L I S T" />
      {playerSelector.list.length > 0 ? (
        playerSelector.list.map(({ name, img_url, source_url }, index) => (
          <PlayerItem name={name} img_url={img_url} key={index} id={++index} source_url={source_url} />
        ))
      ) : (
        <Styled.PlayerText>재생 목록이 비어있습니다.</Styled.PlayerText>
      )}
    </Styled.Layout>
  );
};

export default memo(PlayerLayout);
