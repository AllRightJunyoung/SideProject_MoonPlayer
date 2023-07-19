import * as Styled from './MusicListItem.styled';
import { IconButton, CircleTooltip, Flex } from 'common/components';

import { handleAddPlayer } from 'Music/store/feature/PlayerSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';
import type { MusicListItemProps } from './MusicListItem.types';
import type { MusicItemType } from 'Music/types';
import { useResolution } from 'common/hooks';

const MusicListItem = ({ id, name, img_url, source_url }: MusicListItemProps) => {
  const dispatch = useAppDispatch();

  const { resolution } = useResolution();

  const playerSelector = useAppSelector((state) => state.music.player);
  const isInPlayer = playerSelector.list.find((music: MusicItemType) => music.name === name) ? true : false;
  const handlePlusButton = () => {
    if (isInPlayer) return;
    const selectedMusic = { id, name, img_url, source_url };
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Number>{id}</Styled.Number>
      <Styled.MusicImage id={'musicImage' + id} src={img_url} />
      {resolution === 'MOBILE' ? (
        <>
          <CircleTooltip anchorId={'musicImage' + id} content={name} />
          <CircleTooltip anchorId={'musicName' + id} content={name} />
        </>
      ) : (
        <></>
      )}
      <Styled.Title id={'musicName' + id}>{name}</Styled.Title>

      <IconButton
        color="rgba(255,255,255,0.76)"
        active={isInPlayer}
        onClick={handlePlusButton}
        name="circlePlus"
        size="2x"
      />
    </Styled.Layout>
  );
};

export default MusicListItem;
