import CircleTooltip from '../../../shared/components/ui/CircleTooltip';
import * as Styled from './MusicItem.styled';
import type { MusicItemProps } from './MusicItem.types';
import { memo } from 'react';

const MusicItem = ({ name, url, order }: MusicItemProps) => {
  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.MusicNumber>{order}</Styled.MusicNumber>
      <Styled.MusicImage src={url} />
      <Styled.MusicTitle id={order + 'musicTooltip'}>{name}</Styled.MusicTitle>
      <CircleTooltip anchorId={order + 'musicTooltip'} content={name} />
    </Styled.Layout>
  );
};
export default memo(MusicItem);
