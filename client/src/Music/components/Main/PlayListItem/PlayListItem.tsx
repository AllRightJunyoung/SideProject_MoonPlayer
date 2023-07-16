import * as Styled from './PlayListItem.styled';
import type { MusicItemType } from 'Music/types';

import { handleRemoveMusic, handleSetMusic } from 'Music/store/feature/PlayerSlice';
import { useAppSelector, useAppDispatch } from 'common/hooks/useReduxStore';
import { CircleTooltip, IconButton } from 'common/components';
import { useMusicPageUIController, usePlayerController } from 'Music/hooks';

const PlayListItem = ({ name, img_url, id, source_url }: MusicItemType) => {
  const dispatch = useAppDispatch();
  const { onSetMusic, resetPlayerModule } = usePlayerController();
  const { onhandleOpenMusicFooterUI } = useMusicPageUIController();

  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.playingMusic.name === name ? true : false;

  const handleTrashButton = () => {
    if (isCurrentMusic) {
      dispatch(handleSetMusic({ id: 0, name: '', img_url: '', source_url: '' }));
      dispatch(handleRemoveMusic(name));
      resetPlayerModule();
      onhandleOpenMusicFooterUI(false);
    } else {
      dispatch(handleRemoveMusic(name));
    }
  };

  const playMusic = () => {
    const currentMusic = { name, img_url, id, source_url };
    onSetMusic(currentMusic);
  };

  return (
    <Styled.Layout direction="row" isActive={isCurrentMusic} alignItems="center" justifyContent="space-between">
      <Styled.MusicInfoBox direction="row" justifyContent="center" alignItems="center" onClick={playMusic}>
        <Styled.Number>{id}</Styled.Number>
        <Styled.MuiscImage src={img_url} />
        <CircleTooltip anchorId={'playList-title' + id} content={name} />
        <Styled.Title id={'playList-title' + id}>{name}</Styled.Title>
      </Styled.MusicInfoBox>
      <IconButton color="rgba(255,255,255,0.64)" onClick={handleTrashButton} size="1x" name="trash" />
    </Styled.Layout>
  );
};
export default PlayListItem;
