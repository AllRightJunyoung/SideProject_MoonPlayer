import { handleAddPlayer } from 'store/feature/music/PlayerSlice';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxStore';

import { MusicDataType } from 'types/app/data/index';
import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import OverFlowText from 'components/Global/style/OverFlowText';
import Image from 'components/Global/style/Image';
import { CircleTooltip } from 'components/Global/UI/CircleTooltip/CircleTooltip';

export const Item = ({ id, name, img_url, source_url }: MusicDataType) => {
  const dispatch = useAppDispatch();

  const playerSelector = useAppSelector((state) => state.music.player);
  const isInPlayer = playerSelector.list.find((music: MusicDataType) => music.name === name) ? true : false;
  const handleAddMusic = () => {
    if (isInPlayer) return;
    const selectedMusic = { id, name, img_url, source_url };
    dispatch(handleAddPlayer(selectedMusic));
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Number>{id}</Number>
      <StyledImage img={img_url} />
      <CircleTooltip anchorId={'musicList-title' + id} content={name} />
      <Title id={'musicList-title' + id}>{name}</Title>
      <IconButton
        color="rgba(255,255,255,0.76)"
        active={isInPlayer}
        onClick={handleAddMusic}
        name="circlePlus"
        size="2x"
      />
    </Layout>
  );
};
const Layout = styled(Flex)`
  padding: 0px 16px;
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
