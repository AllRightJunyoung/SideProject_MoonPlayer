import styled from 'styled-components';

import { handleRemoveMusic, handleAddMusic } from 'store/feature/music/PlayerSlice';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useAppSelector, useAppDispatch } from 'hooks/useReduxStore';

import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';
import { useContext } from 'react';
import { DiaLogContext } from 'context/Dialog';
import { MusicDataType } from 'types/app/data/index';
import Flex from 'components/Global/style/Flex';
import { Text } from 'components/Global/style/Text';
import OverFlowText from 'components/Global/style/OverFlowText';
import Image from 'components/Global/style/Image';
import CircleTooltip from 'components/Global/UI/CircleTooltip/CircleTooltip';

export const Item = ({ name, img_url, id, source_url }: MusicDataType) => {
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
    <Layout
      isActive={isCurrentMusic}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={handlePlayMusic}
    >
      <Number>{id}</Number>
      <StyledImage img={img_url} />
      <CircleTooltip anchorId={'playList-title' + id} content={name} />
      <Title id={'playList-title' + id}>{name}</Title>
      <IconButton color="rgba(255,255,255,0.64)" onClick={handleTrashButton} size="1x" name="trash" />
    </Layout>
  );
};
interface LayoutProps {
  isActive: boolean;
}

const Layout = styled(Flex)<LayoutProps>`
  padding: 0px 16px;
  background-color: ${({ isActive }) => (isActive ? 'rgba(0,0,0,0.64)' : 'none')};
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  height: 84px;
  overflow: hidden;
`;

const Number = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  width: 16px;
`;

const Title = styled(OverFlowText)`
  flex: 1;
  font-size: 14px;
  max-height: 48px;
  color: rgba(255, 255, 255, 0.84);
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`;
const StyledImage = styled(Image)`
  width: 96px;
`;
export default Item;
