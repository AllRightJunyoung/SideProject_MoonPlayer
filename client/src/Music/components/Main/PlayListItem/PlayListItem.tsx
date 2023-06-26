import * as Styled from './PlayListItem.styled';

import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import { useAppSelector, useAppDispatch } from 'hooks/useReduxStore';
import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';
import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import { MusicDataType } from 'types/app/data/index';
import { CircleTooltip, IconButton } from 'common/components';

export const PlayListItem = ({ name, img_url, id, source_url }: MusicDataType) => {
  const dispatch = useAppDispatch();
  const { onhandleOpenMusicFooterUI } = useMusicPageUIControl();
  const DialogCtx = useContext(DiaLogContext);

  const playerSelector = useAppSelector((state) => state.music.player);
  const isCurrentMusic = playerSelector.playingMusic.name === name ? true : false;

  const handleTrashButton = () => {
    return isCurrentMusic
      ? DialogCtx.showAlarm('현재 재생중인 음악은 삭제할수없습니다.')
      : dispatch(handleRemoveMusic(name));
  };

  const handlePlayMusic = () => {
    const currentMusic = { name, img_url, id, source_url };
    dispatch(handleAddMusic(currentMusic));
    onhandleOpenMusicFooterUI(true); // 음악재생시 footer바가 자동으로 올라오게
  };

  return (
    <Styled.Layout
      isActive={isCurrentMusic}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={handlePlayMusic}
    >
      <Styled.Number>{id}</Styled.Number>
      <Styled.MuiscImage src={img_url} />
      <CircleTooltip anchorId={'playList-title' + id} content={name} />
      <Styled.Title id={'playList-title' + id}>{name}</Styled.Title>
      <IconButton color="rgba(255,255,255,0.64)" onClick={handleTrashButton} size="1x" name="trash" />
    </Styled.Layout>
  );
};
export default PlayListItem;
