import uuid from 'react-uuid';
import CircleTooltip from '../CircleTooltip';
import * as Styled from './Music.styled';
import type { MusicProps } from './Music.types';

const id = uuid();

const Music = ({ name, url, order }: MusicProps) => {
  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.MusicNumber>{order}</Styled.MusicNumber>
      <Styled.MusicImage src={url} />
      <Styled.MusicTitle id={order + 'musicTooltip'}>{name}</Styled.MusicTitle>
      <CircleTooltip anchorId={order + 'musicTooltip'} content={name} />
    </Styled.Layout>
  );
};
export default Music;
