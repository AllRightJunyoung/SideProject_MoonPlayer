import * as Styled from './Music.styled';
import type { MusicProps } from './Music.types';

const Music = ({ name, url, id }: MusicProps) => {
  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.MusicNumber>{id}</Styled.MusicNumber>
      <Styled.MusicImage src={url} />
      <Styled.MusicTitle>{name}</Styled.MusicTitle>
    </Styled.Layout>
  );
};
export default Music;
