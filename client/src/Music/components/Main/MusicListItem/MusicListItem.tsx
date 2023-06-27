import * as Styled from './MusicListItem.styled';
import { IconButton, CircleTooltip } from 'common/components';

import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';
import { MusicDataType } from 'types/app/data/index';

const MusicListItem = ({ id, name, img_url, source_url }: MusicDataType) => {
  const dispatch = useAppDispatch();

  const playerSelector = useAppSelector((state) => state.music.player);
  const isInPlayer = playerSelector.list.find((music: MusicDataType) => music.name === name) ? true : false;
  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = { id, name, img_url, source_url };
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Number>{id}</Styled.Number>
      <Styled.MusicImage src={img_url} />
      <CircleTooltip anchorId={'musicList-title' + id} content={name} />
      <Styled.Title id={'musicList-title' + id}>{name}</Styled.Title>
      <IconButton
        color="rgba(255,255,255,0.76)"
        active={isInPlayer}
        onClick={handleAddMusic}
        name="circlePlus"
        size="2x"
      />
    </Styled.Layout>
  );
};

export default MusicListItem;
