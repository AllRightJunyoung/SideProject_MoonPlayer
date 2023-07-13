import * as Styled from './Music.styled';
import type { MusicProps } from './Music.types';

const Music = ({ name, url, order }: MusicProps) => {
  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.MusicNumber>{order}</Styled.MusicNumber>
      <Styled.MusicImage src={url} />
      <Styled.MusicTitle>{name}</Styled.MusicTitle>
    </Styled.Layout>
  );
};
export default Music;
