import * as Styled from './GenreMusicItem.styled';
import type { GenreMusicItemProps } from './GenreMusicItem.types';
import type { MusicItemType } from 'Music/types';

import { memo, useCallback } from 'react';
import { IconButton, CircleTooltip } from 'shared/components';
import { handleAddPlayer, handleSetMusic } from 'Music/store/feature/PlayerSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useReduxStore';
import { useResolution } from 'shared/hooks';
import GenreMusicImage from '../GenreMusicImage/GenreMusicImage';
import { handleOpenMusicFooterUI } from 'Music/store/feature/MusicUISlice';

const GenreMusicItem = ({ ...props }: GenreMusicItemProps) => {
  const { id, name, img_url, source_url } = props;
  const dispatch = useAppDispatch();
  const { resolution } = useResolution();

  const playerSelector = useAppSelector((state) => state.music.player);
  const isInPlayer = playerSelector.list.find((music: MusicItemType) => music.name === name) ? true : false;
  const selectedMusic = { id, name, img_url, source_url };

  const handlePlusButton = useCallback(() => {
    if (isInPlayer) return;
    dispatch(handleAddPlayer(selectedMusic));
  }, [selectedMusic]);

  const handlePlayButton = useCallback(() => {
    dispatch(handleSetMusic(selectedMusic));
    dispatch(handleOpenMusicFooterUI(true));
  }, [selectedMusic]);

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Number>{id}</Styled.Number>
      <GenreMusicImage width={128} height="auto" id={'musicImage' + id} src={img_url} alt={name} />
      {resolution === 'MOBILE' ? (
        <>
          <CircleTooltip anchorId={'musicImage' + id} content={name} />
          <CircleTooltip anchorId={'musicName' + id} content={name} />
        </>
      ) : (
        <></>
      )}
      <Styled.Title id={'musicName' + id}>{name}</Styled.Title>

      <Styled.Box>
        <IconButton color="rgba(255,255,255,0.76)" onClick={handlePlayButton} name="play" size="2x" />
        <IconButton
          color="rgba(255,255,255,0.76)"
          active={isInPlayer}
          onClick={handlePlusButton}
          name="circlePlus"
          size="2x"
        />
      </Styled.Box>
    </Styled.Layout>
  );
};

export default memo(GenreMusicItem);
